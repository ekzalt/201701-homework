'use strict';

/////////////////////////////////////////////////////////

// 18.03.2017

/////////////////////////////////////////////////////////

// ДЗ - Сферический конь в вакууме

/*
Реализовать функцию-конструктор Horse

Свойства:
name - имя лошади
mileage - собственный пробег лошади
totalMileage - общий пробег всех лошадей

Методы:
run - бежать. увеличивает собственный пробег, а также увеличивает пробег общий

Подумать, куда здесь можно прикрутить прототипы
 */

function Horse(name) {
  this.name = name;
  this.mileage = 0;
}

Horse.prototype.totalMileage = 0;

Horse.prototype.run = function(n) {
  this.mileage += n;
  Horse.prototype.totalMileage += n;
};

var h1 = new Horse('Rose');
var h2 = new Horse('Lilu');

h1.run(10);
h1.run(20);
h1.mileage; // 30
h1.totalMileage; // 30

h2.mileage; // 0
h2.totalMileage; // 30
