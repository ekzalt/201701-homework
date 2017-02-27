'use strict';

/////////////////////////////////////////////////////////

// 21.02.2017

/////////////////////////////////////////////////////////

// ДЗ 1

// n - периодичность выведения часов (в милисекундах)

/*
function clock(n) {
  setInterval(function() {
    var hh = new Date().getHours(),
        mm = new Date().getMinutes(),
        ss = new Date().getSeconds();
    
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    
    console.log('%c' +
                hh + ':' + mm + ':' + ss,
                'color: white; font-weight: bold; background-color: green; padding: 0 5px; border-radius: 3px');
  }, n);
  
  setInterval(function() {
    console.clear();
  }, n * 10);
}

clock(5000);
*/

// Итог: консольные часы с периодичностью n и очисткой n*10

/////////////////////////////////////////////////////////

// ДЗ 2

// функция-бомба принимает "прощальное сообщение" :)

/*
function bomb(msg) {
  var count = 10;
  
  var id = setInterval(function() {
    if (count < 1) {
      clearInterval(id);
      return alert(msg);
    }
    
    console.log('%c' + count--,
                'color: red; font-weight: bold;');
  }, 1000);
}

bomb('BOOM!!!');
*/

// Итог: тыкался-мыкался, внезапно оказалось замыкание через анонимную функцию :)

/////////////////////////////////////////////////////////

// ДЗ 3

// вариант 1 - через замыкание, анонимную функцию (FE)

function iter() {
  for (var i = 1; i <= 10; i++) {
    (function(index) {
	  setTimeout(function() {
	    console.log(index);
      }, 1000 * i);
	})(i);
  }
}

iter();

// Итог: 1, 2, 3...

// вариант 2 - через свойство именованной функции (FD)

function iter() {
  for (var i = 1; i <= 10; i++) {
    function inner() { console.log(inner.me); }
	inner.me = i;
	setTimeout(inner, 1000 * i);
  }
}

iter();

// Итог: 1, 2, 3...
