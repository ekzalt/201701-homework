'use strict';

/////////////////////////////////////////////////////////

// 04.02.2017

/////////////////////////////////////////////////////////

// ДЗ 1.1

/*
var a = 10,
    b = 20,
    c = 30;

a *= 10;
b *= 10;
c *= 10;

if (Math.max(a, b, c) === a) a *= 10;
if (Math.max(a, b, c) === b) b *= 10;
if (Math.max(a, b, c) === c) c *= 10;

if (Math.min(a, b, c) === a) a /= 10;
if (Math.min(a, b, c) === b) b /= 10;
if (Math.min(a, b, c) === c) c /= 10;
*/

// Итог: a = 10, b = 200, c = 3000

///////////////////////////////////////////////////////

// ДЗ 2.1

/*
var a = 10,
    b = 20,
    c = 0;

c = a;
a = b;
b = c;
*/

// Итог: a = 20, b = 10

///////////////////////////////////////////////////////

// ДЗ 3 + ДЗ 4

function randomNum(startNum, endNum) {
  return Math.floor(startNum + Math.random() * ((endNum + 1) - startNum));
}

// randomNum(0, 100);

// Итог: случайное число в диапазоне включительно 0-100

function randomArr(size) {
  var arr = [];
  for (var i = 0; i < size; i++) arr.push(randomNum(0, 100));
  return arr;
}

// randomArr(30);

// Итог: случайный массив динной 30

var arr1 = randomArr(30);

function lastIndexArr(arr, val) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) index = i;
  }
  return index;
}

// lastIndexArr(arr1, 77);

// Итог: возвращает индекс элемента с конца массива или -1

function firstIndexArr(arr, val) {
  var index = -1;
  for (var i = arr.length; i >= 0; i--) {
    if (arr[i] === val) index = i;
  }
  return index;
}

firstIndexArr(arr1, 77);

// Итог: возвращает индекс элемента с начала массива или -1
