'use strict';

/////////////////////////////////////////////////////////

// 14.03.2017

/////////////////////////////////////////////////////////

// ДЗ - задачки из функционального ООП

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить метод и свойство кофеварке

Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(), который будет останавливать кипячение (через clearTimeout).

function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };

}

Вот такой код должен ничего не выводить:

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет

P.S. Текущую температуру воды вычислять и хранить не требуется.
P.P.S. При решении вам, скорее всего, понадобится добавить приватное свойство timerId, которое будет хранить текущий таймер.
 */

////////////////

/*
function CoffeeMachine(power) {
  var self = this,
      timerId,
      WATER_HEAT_CAPACITY = 4200;

  this.waterAmount = 0;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  };
  this.stop = function() {
    clearTimeout(timerId);
  };
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Написать объект с геттерами и сеттерами

Напишите конструктор User для создания объектов:
С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.

function User() {
  // ваш код
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов
 */

////////////////

/*
function User() {
  var firstName,
      surname;

  this.getFullName = function() {
    return firstName + ' ' + surname;
  }
  this.setFirstName = function(str) {
    firstName = str;
  }
  this.setSurname = function(str) {
    surname = str;
  }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
user.getFullName();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить геттер для power

Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

function CoffeeMachine(power, capacity) {
  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

}

Обратим внимание, что ситуация, когда у свойства power есть геттер, но нет сеттера – вполне обычна.
Здесь это означает, что мощность power можно указать лишь при создании кофеварки и в дальнейшем её можно прочитать, но нельзя изменить.
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }
    waterAmount = amount;
  };
  this.getWaterAmount = function() {
    return waterAmount;
  };
  this.getPower = function() {
    return power;
  };
}

var coff1 = new CoffeeMachine(1500, 1500);
coff1.getPower();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить публичный метод кофеварке

Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };
}

Вот такой код должен приводить к ошибке:

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }
    waterAmount = amount;
  };
  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  };
  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };
}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше..
coffeeMachine.run();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Создать сеттер для onReady

Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде:

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

}

Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();

P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска кофеварки, то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var self = this;
  var readyFunc;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };
  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  this.setOnReady = function(f) {
      if (readyFunc) readyFunc();
      if (!arguments.length && !readyFunc) alert('Кофе готов!');
      readyFunc = f;
    }
  this.run = function() {
    setTimeout(self.setOnReady, getTimeToBoil());
  };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' );
});

coffeeMachine.run();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавить метод isRunning

Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});
 */

////////////////

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var self = this;
  var readyFunc;
  var inAction = false;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };
  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  this.setOnReady = function(f) {
      if (readyFunc) readyFunc();
      if (!arguments.length && !readyFunc) alert('Кофе готов!');
      readyFunc = f;
      inAction = false;
    }
  this.run = function() {
    inAction = true;
    setTimeout(self.setOnReady, getTimeToBoil());
  };
  this.isRunning = function() {
    return inAction;
  }
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Запускать только при включённой кофеварке

В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable;
  
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    if (!this._enabled) throw new Error('Coffee Machine is OFF');

    setTimeout(onReady, 1000);
  }
  this.enable = function() {
    parentEnable();
    // this.run();
  }
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Останавливать кофеварку при выключении

Когда кофеварку выключают – текущая варка кофе должна останавливаться.

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      timerId;
  
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    if (!this._enabled) throw new Error('Coffee Machine is OFF');

    timerId = setTimeout(onReady, 1000);
  }
  this.enable = function() {
    parentEnable();
    // this.run();
  }
  this.disable = function() {
    parentDisable();
    clearTimeout(timerId);
  }
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Унаследуйте холодильник

Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():
- Приватное свойство food хранит массив еды.
- Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
- Если холодильник выключен, то добавить еду нельзя, будет ошибка.
- Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
- Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.

Код для проверки:

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен

Ещё код для проверки:

// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

Код использования холодильника без ошибок:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

Исходный код класса Machine, от которого нужно наследовать:

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      space = power / 100,
      food = [];

  this.addFood = function() {
    if (!this._enabled) throw new Error('Холодильник выключен, еду добавлять нельзя!');
    
    for (var i = 0; i < arguments.length; i++) {
      if (food.length < space) {
        food.push(arguments[i]);
        console.log('Максимальная емкость: ' + space + ', осталось: ' + (space - food.length));
      } else {
        throw new Error('Холодильник переполнен! Максимальная емкость: ' + space);
      }
    }
  }
  this.getFood = function() {
    var pubFood = food.slice();
    return pubFood;
  }
  this.enable = function() {
    parentEnable();
  }
  this.disable = function() {
    parentDisable();
  }
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Добавьте методы в холодильник

Добавьте в холодильник методы:
- Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
- Публичный метод removeFood(item), который удаляет еду item из холодильника.
Код для проверки:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      space = power / 100,
      food = [];

  this.addFood = function() {
    if (!this._enabled) throw new Error('Холодильник выключен, еду добавлять нельзя!');
    
    for (var i = 0; i < arguments.length; i++) {
      if (food.length < space) {
        food.push(arguments[i]);
        console.log('Максимальная емкость: ' + space + ', осталось: ' + (space - food.length));
      } else {
        throw new Error('Холодильник переполнен! Максимальная емкость: ' + space);
      }
    }
  };
  this.getFood = function() {
    return food.slice();
  };
  this.enable = function() {
    parentEnable();
  };
  this.disable = function() {
    parentDisable();
  };
  this.filterFood = function(func) {
    return food.filter(func);
  };
  this.removeFood = function(item) {
    if (~food.indexOf(item)) {
      food.splice(food.indexOf(item), 1);
    } else {
      throw new Error('Нет такой еды');
    }
  };
}
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Переопределите disable

Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
 */

////////////////

/*
function Machine(power) {
  var self = this;

  this._power = power;
  this._enabled = false;

  this.enable = function() {
    self._enabled = true;
  };
  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var parentEnable = this.enable,
      parentDisable = this.disable,
      space = power / 100,
      food = [];

  this.addFood = function() {
    if (!this._enabled) throw new Error('Холодильник выключен, еду добавлять нельзя!');
    
    for (var i = 0; i < arguments.length; i++) {
      if (food.length < space) {
        food.push(arguments[i]);
        console.log('Максимальная емкость: ' + space + ', осталось: ' + (space - food.length));
      } else {
        throw new Error('Холодильник переполнен! Максимальная емкость: ' + space);
      }
    }
  };
  this.getFood = function() {
    return food.slice();
  };
  this.enable = function() {
    parentEnable();
  };
  this.disable = function() {
    if (food.length) throw new Error('Холодильник выключать нельзя, там есть еда!');

    parentDisable();
  };
  this.filterFood = function(func) {
    return food.filter(func);
  };
  this.removeFood = function(item) {
    if (~food.indexOf(item)) {
      food.splice(food.indexOf(item), 1);
    } else {
      throw new Error('Нет такой еды');
    }
  };
}
*/

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// ДЗ - допилить CoffeeMachine

/*
Реализовать возможность «запрограммировать» кофе-машину таким образом, 
чтобы когда кофе будет готов, вызывалась функция, определенная пользователем. 

Если пользователь НЕ определил функцию, используется ф-ция по-умолчанию.

this.programReadyState = function(fn) {
  // magic
};
 */

function Machine() {
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
    console.log(this._enabled ? 'Включено' : 'Выключено');
  };

  this.disable = function() {
    this._enabled = false;
    console.log(this._enabled ? 'Включено' : 'Выключено');
  };
}

function CoffeeMachine(power, maxWater) {
  Machine.call(this);

  var oldEnable = this.enable;
  var oldDisable = this.disable;
  //var self = this;
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var timerId;

  function getBoilTime() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  // Сохранил дефолтную версию onReady
  var onReadyDefault = function() {
    alert('Кофе готов!');
  };

  // onReady переделал для удобства в Function Expression
  var onReady = onReadyDefault;

  this.waterAmount = function(value) {
    if (!value) {
      return waterAmount;
    }
    if (value + waterAmount > maxWater) {
      waterAmount = maxWater;
      console.log('Вылилось: ' + (value - waterAmount));
    } else {
      waterAmount = value;
    }
  };

  // закос под полиморфизм :)
  this.programReadyState = function(fn) {
    if (typeof(fn) === 'function') {
      onReady = fn;
      console.log('Пользовательские настройки активированы!');
    } else if (!arguments.length) {
      onReady = onReadyDefault;
      console.log('Пользовательские настройки сброшены, стандартные настройки активированы!');
    } else {
      console.log('Неверный аргумент!');
    }
  };

  // добавил проверку на "включенность"
  this.run = function() {
    if (this._enabled) {
      var time = getBoilTime();
      console.log(time / (1000 * 60) + ' мин.');
      timerId = setTimeout(onReady, time);
    } else {
      console.log('Сначала надо включить!');
    }
  };

  this.enable = function() {
    oldEnable.call(this);
    console.log('Лампочка включилась!');
  };

  // добавил clearTimeout при выключении
  this.disable = function() {
    oldDisable.call(this);
    clearTimeout(timerId);
    console.log('Лампочка выключилась!');
  };
}

var machine = new CoffeeMachine(1000, 3000);
machine.waterAmount(20);
machine.run();
