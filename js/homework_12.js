'use strict';

/////////////////////////////////////////////////////////

// 22.04.2017

/////////////////////////////////////////////////////////

// ДЗ 1 - ajax

/*
1) написать json
2) получить его аяксом и вывести
*/

/*
let btn = document.querySelector('button');

const getList = e => {
  // console.log(e);
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '../users.json', true);
  xhr.send();
  
  const printData = e => {
    let wrap = document.querySelector('.wrapper');
    let data = JSON.parse(xhr.responseText);
    // console.log(data);
    let ul = document.createElement('ul');
    
    for (let user of data) {
      let li = document.createElement('li');
      li.textContent = user.email;
      ul.append(li);
    }
    wrap.append(ul);
  };
  xhr.addEventListener('load', printData);
};
btn.addEventListener('click', getList);
*/

////////////////////////////////////

// ДЗ 2 - погодный виджет на кастомном селекте

/*
http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&APPID=9fea622469655366e55b7443555daae8
http://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&APPID=9fea622469655366e55b7443555daae8
http://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&APPID=9fea622469655366e55b7443555daae8
*/

const printWeather = data => {
  // console.log('print! :)');
  const C = 273;
  let weather = document.querySelector('.weather');
  
  let ico = weather.querySelector('.ico');
  ico.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
  let city = weather.querySelector('.city');
  city.textContent = data.name;;
  
  let temp = weather.querySelector('.weatherDeg');
  temp.textContent = `${parseInt(data.main.temp - C)} °C`;
  
  let wind = weather.querySelector('.weatherWind');
  wind.textContent = `${parseInt(data.wind.speed)} м/с`;
  
  let last = weather.querySelector('.weatherLast');
  last.textContent = new Date(data.dt * 1000).toLocaleString();
};
  
const getWeather = city => {
  city = city || document.querySelector('.customSelectBtn').textContent;
  // console.log(city);
  let url = '';
  
  switch (city) {
    case 'Киев':
      url = 'http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&APPID=9fea622469655366e55b7443555daae8';
      break;
    case 'Харьков':
      url = 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&APPID=9fea622469655366e55b7443555daae8';
      break;
    case 'Одесса':
      url = 'http://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&APPID=9fea622469655366e55b7443555daae8';
      break;
  }

  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  
  const printData = e => {
    let data = JSON.parse(xhr.responseText);
    // console.log(data);
    printWeather(data);
  };
  xhr.addEventListener('load', printData);
};

getWeather();

const doSelect = e => {
  let select = document.querySelector('.customSelect');
  let btn = select.querySelector('.customSelectBtn');
  let ul = select.querySelector('ul');

  if (e.target === btn) {
    ul.classList.toggle('hide');

  } else if (select.contains(e.target) && e.target.closest('li')) {
    btn.textContent = e.target.textContent;
    ul.classList.add('hide');
    getWeather(btn.textContent);

  } else {
    ul.classList.add('hide');
  }
};

document.addEventListener('click', doSelect);
