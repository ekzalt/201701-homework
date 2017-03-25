'use strict';

/////////////////////////////////////////////////////////

// 21.03.2017

/////////////////////////////////////////////////////////

// ДЗ - Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

// Варианты, которые я оптимизировал

/*
Function.prototype.defer = function(ms) {
  var self = this;
  setTimeout(function() {
    self.call(null);
  }, ms);
};

Function.prototype.defer = function(ms) {
  var self = this;
  setTimeout(self, ms);
};

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  alert('привет');
}

f.defer(2000);
*/

/////////////////////////////////////////////////////////

// ДЗ - лошадь устала

/*
Лошадь должжна иметь свойство усталость, которое накабливается при беге. 
Пройденный 1 км добавляет 1 ед. усталости.
Максимальное значение усталости - 10. 
Когда оно достигается, лошадь отдыхает в течении 5 секунд (время не имеет особого значения). 
Затем, когда отдых закончился, лошадь добегает оставшиеся километры, снова увеличивая усталость.

т.е. если надо пробежать 25 км:
10 пробежали - отдых - 10 пробежали - отдых - 5 пробежали. 
В конце работы скрипта у лошади сохраняется остаточная усталость. 
Т.е. у лошади из данного примера остаточная усталость будет равна 5.
 */

////////////////////////////

// сделал себе кучу console.log() для отслеживания состояния

/*
function Horse(name) {
  this.name = name;
  this.mileage = 0;
  this.tired = 0;
}

Horse.prototype.run = function(n) {
  var self = this;

  var totalDistance = n;
  var distance = 0;

  while (distance < totalDistance) {
    if (this.tired === 10) {
      console.log('я устала: ' + this.tired);
      break;
    }

    distance++;
    this.tired++;
    this.mileage++;
    console.log('пробежала: ' + distance + ', всего: ' + this.mileage + ', устала: ' + this.tired);
  }

  console.log('отдыхаю: 3сек.');
  setTimeout(function() {
    // от себя добавил, что если дистанция закончилась на счетчике "усталости" 10, то лошадь сначала отдыхает, а потом прекращает действовать
    if (self.tired !== 10 && distance === totalDistance) {
      console.log('я пробежала всю дистанцию');
      return;
    }

    self.tired = 0;
    console.log('я отдохнула, усталость: ' + self.tired);

    console.log('еще бежать: ' + (totalDistance - distance));

    console.log('я побежала');
    self.run(totalDistance - distance);
  }, 3000);
};

var h1 = new Horse('Rose');
h1.run(15);
*/

////////////////////////////

// переделал .run(n) : 1) вынес из анонимной функции в setTimeout в именнную, 2) "забиндил", чтоб избавиться от "self"

/*
function Horse(name) {
  this.name = name;
  this.mileage = 0;
  this.tired = 0;
}

Horse.prototype.run = function(n) {
  var totalDistance = n;
  var distance = 0;

  var restAndRun = function() {
    this.tired = 0;
    console.log('я отдохнула, усталость: ' + this.tired);

    console.log('еще бежать: ' + (totalDistance - distance));

    console.log('я побежала');
    this.run(totalDistance - distance);
  };

  restAndRun = restAndRun.bind(this);

  while (distance <= totalDistance) {
    // от себя добавил, что если дистанция закончилась на счетчике "усталости" 10, то лошадь сначала отдыхает, а потом прекращает действовать
    if (this.tired !== 10 && distance === totalDistance) {
      console.log('я пробежала всю дистанцию');
      return;
    }

    if (this.tired === 10) {
      console.log('я устала: ' + this.tired);
      break;
    }

    distance++;
    this.tired++;
    this.mileage++;
    console.log('пробежала: ' + distance + ', всего: ' + this.mileage + ', устала: ' + this.tired);
  }

  console.log('отдыхаю: 3сек.');
  setTimeout(restAndRun, 3000);
};

var h1 = new Horse('Rose');
h1.run(15);
*/

////////////////////////////

// переделал в ES6

class Horse {
  constructor(name) {
    this.name = name;
    this.mileage = 0;
    this.tired = 0;
  }
  
  run(n) {
    let totalDistance = n;
    let distance = 0;

    const restAndRun = () => {
      this.tired = 0;
      console.log('я отдохнула, усталость: ' + this.tired);

      console.log('еще бежать: ' + (totalDistance - distance));

      console.log('я побежала');
      this.run(totalDistance - distance);
    };

    while (distance <= totalDistance) {
      // от себя добавил, что если дистанция закончилась на счетчике "усталости" 10, то лошадь сначала отдыхает, а потом прекращает действовать
      if (this.tired !== 10 && distance === totalDistance) {
        console.log('я пробежала всю дистанцию');
        return;
      }

      if (this.tired === 10) {
        console.log('я устала: ' + this.tired);
        break;
      }

      distance++;
      this.tired++;
      this.mileage++;
      console.log('пробежала: ' + distance + ', всего: ' + this.mileage + ', устала: ' + this.tired);
    }

    console.log('отдыхаю: 3сек.');
    setTimeout(restAndRun, 3000);
  }
}

let h1 = new Horse('Rose');
h1.run(15);
