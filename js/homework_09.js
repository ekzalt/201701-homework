'use strict';

/////////////////////////////////////////////////////////

// 25.03.2017

/////////////////////////////////////////////////////////

// ДЗ - Наследование в ES6

/*
Cоздать класс своего домашнего любимца, который бы реализовывал несколько свойств и методов (на ваш вкус).
Цепочка наследования должна быть не менее двух.
Например:
Animal —> Dog —> LabradorRetriever
Наследовать от каждого родительского касса НЕ  МЕНЕЕ одного свойства И одного метода.
 */

///////////////////

class Animal {
  constructor(name='Animal') {
    this.name = name;
    this.paws = 4;
  }

  eat() {
    console.log(`${this.name} eat: om-nom-nom`);
  }
}

class Predator extends Animal {
  constructor(name='Predator') {
    super();

    this.name = name;
    this.teeth = 'fangs';
  }

  hunt() {
    console.log(`${this.name} hunt: RRR!!!`);
  }
}

class Cat extends Predator {
  constructor(name='Cat') {
    super();

    this.name = name;
    this.claws = 'sharp';
  }

  hide() {
    console.log(`${this.name} hide: ^-^`);
  }
}

let elephant = new Animal('Pinky');
let aligator = new Predator('Ali');
let cat = new Cat('Tiger');

// + переделал Лошадь в ES6
