'use strict';

// метод итерации по объектам

/*
for (var key in obj) {
  console.log(key[obj]);
}
*/

// .push():lendth - добавляет елемент в конец массива, возвращает длинну массива

// .pop():element - вырезает элемент с конца массива, и возвращает этот же элемент

// .unshift():lendth - добавляет елемент в начало массива (сдвигает всех дальше), возвращает длинну массива

// .shift():element - вырезает элемент с начала массива (сдвигает всех вперед), и возвращает этот же элемент

// slice.(arg1, arg2):newArr - копирует часть массива или весь массив, если без аргументов, возвращает копию.
// arg1 - с какого элемента включительно
// arg2 - по какой объект НЕ включительно

// Замыкание

/*
function showBigger(n) {
  return function frozzen(m) {
    return n < m;
  }
}
*/

//////////////////////////////////////////////////////////////////////////////////

// проход по массиву с конца на i++

/*
for (var i = 0; i < arr.length; i++) {
  arr[(arr.length - 1) - i];
}
*/

// выводим четные И не ноль

/*
if (arr[i] % 2 === 0 && arr[i] !== 0) {};
*/

// не выводим отрицательные

/*
if (arr[i] < 0) {};
*/

// matrix

/*
function randNum(min, max) {
  return Math.floor(min + Math.random() * ((max + 1) - min));
}

var arrSize = 10
var martix = [];

for (var i = 0; i < arrSize; i++) {
  martix[i] = [];
  for (var j = 0; j < arrSize; j++) {
    martix[i][j] = randNum(0, 100);
  } 
}
console.table(martix);
*/

//////////////////////////////////////////////////////////////////////////////////

// проверка на массив
// Array.isArray();

/*
// Условия (варианты написания)

// вариант 1
message = message || 'Hello!';

// вариант 2
message = !message ? 'Hello!' : message;

// вариант 3
message = arguments.length < 1 ? 'Hello!' : message;

// вариант 4
if (!message) {
  'Hello!';
} else {
  message = message;
}
*/

//////////////////////////////////////////////////////////////////////////////////

// [1] + [2] - [3];  // 9
// в первом случае - конкатенация, во втором - вычитание

// функция-самосчетчик

/*
function countMe() {
  var c = 0;
  
  return function() {
    console.log(++c);
  }
}

var counter = countMe();

counter();

console.log('%c' + variable, 'color: green; font-weight: bold;');
*/

///////////////////////////

// замыкание - шаблон 1

/*
function setName(name) {
  return function(msg) {
    console.log(name + ': ' + msg);
  }
}

var userVasya = setName('Вася');

userVasya('Привет, я Вася :)');
*/

///////////////////////////

// замыкание - шаблон 2

/*
var arr = [];

for (var i = 0; i < 10; i++) {
  (function(index) {
    arr.push(function() {
      console.log(index);
    });
  })(i);
}
*/

///////////////////////////

/*
// setTimeout устанавливает задержку на выполнение одноразовое функции и возвращает свой ИД

setTimeout(someFunc, 3000);
clearTimeout(1);

// setInterval - выполняет функцию через интервал времени и возвращает свой ИД

setInterval(someFunc, 3000);
clearInterval(1);

// анонимная функция

;(function() {
  // code
})();
*/

//////////////////////////////////////////////////////////////////////////////////

// Рекурсия

/*
// Рекурсивое суммирование - вариант 1
function sumTo(x) {
  if (x >= 1) {
    return x + sumTo(x - 1);
  } else {
    return x;
  }
}
sumTo(100);
*/

/*
// Рекурсивое суммирование - вариант 2
function sumTo(x) {
  if (x < 1) {
    return x;
  } else {
    return x + sumTo(x - 1);
  }
}
sumTo(100);
*/

/////////////////////////////////////////

// function pow(x, n) {
//   var result = x;
//   for (var i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// console.time('церез цикл');
// pow(2, 50);
// console.timeEnd('церез цикл');

//////////////////////////////////////////

/*
// древовидный объект
var user = {
  name: 'Vasya Pupkin',
  children: [{
    name: 'Maria Pupkin',
    children: [{
      name: 'Petrik Pupkin',
      children: []
    }]
  }, {
    name: 'Fedor Pupkin',
    children: [{
      name: 'Vasya Pupkin Jr.',
      children: []
    }, {
      name: 'Mihail Pupkin',
      children: []
    }]
  }]
};
*/

// рекурсивный обход - вариант 1
// var results = [];

// function getName(obj) {
//   if ('name' in obj) {
//     results.push(obj.name);
//   } else if (obj.children && obj.children.length) {
//     for (var i = 0; i < obj.children.length; i++) {
//       getName(obj.children[i]);
//     }
//   }
// }
// getName(user);
// results;

/*
// рекурсивный обход - вариант 2
var results = [];

function getName(obj) {
  for (var key in obj) {
    if (key === 'name') {
      results.push(obj.name);
    } else if (obj.children && obj.children.length) {
      for (var i = 0; i < obj.children.length; i++) {
        getName(obj.children[i]);
      }
    }
  }
}
getName(user);
results;
*/

//////////////////////////////////////////////////////////////////////////////////

// const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));




























