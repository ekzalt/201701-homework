'use strict';

/////////////////////////////////////////////////////////

// 15.04.2017

/////////////////////////////////////////////////////////

// ДЗ - дроп-меню

/*
Используя ТОЛЬКО средства джаваскрипт, реализовать выпадающее меню (НЕ select, а нечто, похожее на него визуально), состоящее из следующих элементов:
- кнопка, содержащая текст
- список ul-li, скрытый по-умолчанию

Клик на кнопке открывает список.
Клик по эл-ту списка закрывает список и текст выбранного элемента копирует в кнопку.
Клик ВНЕ открытого списка закрывает список, если он открыт (window.onclick).
*/

////////////////////////////////////

/*
let wrap = document.querySelector('.wrapper');

const makeMenu = wrap => {
  let btn = document.createElement('button');
  btn.innerHTML = '&equiv;';

  let span = document.createElement('span');
  span.style.marginLeft = '20px';

  let ul = document.createElement('ul');
  ul.style.background = '#ccc';
  ul.style.display = 'none';

  for (let i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.textContent = `Menu ${i}`;
    li.style.cursor = 'pointer';
    ul.append(li);
  }

  wrap.append(btn, span, ul);
};

makeMenu(wrap);

let ul = wrap.querySelector('ul');
let span = wrap.querySelector('span');

const action = e => {
  // console.log(e.target);
  if (e.target.tagName === 'BUTTON') {
    ul.style.display = (ul.style.display === 'none') ? 'block' : 'none';

  } else if (e.target.tagName === 'LI') {
    span.textContent = e.target.textContent;
    ul.style.display = 'none';
    
  } else {
    ul.style.display = 'none';
  }
};

document.addEventListener('click', action);
*/

////////////////////////////////////

// ДЗ 2 - кастомный селект

const doSelect = e => {
  let select = document.querySelector('.customSelect');
  let btn = select.querySelector('.customSelectBtn');
  let ul = select.querySelector('ul');

  if (e.target === btn) {
    ul.classList.toggle('hide');

  } else if (select.contains(e.target) && e.target.closest('li')) {
    btn.textContent = e.target.textContent;
    ul.classList.add('hide');

  } else {
    ul.classList.add('hide');
  }
};

document.addEventListener('click', doSelect);
