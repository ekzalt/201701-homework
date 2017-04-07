'use strict';

/////////////////////////////////////////////////////////

// 11.03.2017

/////////////////////////////////////////////////////////

// ДЗ - допилить свой bind

function mySuperBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var user = { name: 'Вася' };

function sayHi() {
  var argsArr = [].slice.apply(arguments);
  return this.name + ' сказал: ' + argsArr.join(' ');
}

var hello = mySuperBind(sayHi, user);

hello('Привет!', 'Как дела?', 'Пока)');
hello(1, 2, 3, 4, 5);

// Итог: всё отлично работает :)
