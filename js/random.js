'use strict';

/////////////////////////////////////////////////////

function randomAnswer() {
  var side = Math.round(Math.random());
  if (side) return 'Yes!';
  return 'No!';
}

/////////////////////////////////////////////////////

function throwCoin() {
  return Math.round(Math.random());
}

function benchCoin(times) {
  var c0 = 0, c1 = 0;

  for (var i = 0; i < times; i++) {
    var side = throwCoin();

    if (side) c1++;
    else c0++;
  }

  var attempts = 'Попыток: ' + times + ' \n';
  var eagle = 'Орел: ' + (c1 / times * 100).toFixed(1) + '% \n';
  var tail = 'Решка: ' + (c0 / times * 100).toFixed(1) + '% \n';

  return attempts + eagle + tail;
}

/////////////////////////////////////////////////////

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function throwCube() {
  return randomInt(1, 6);
}

function benchCube(times) {
  var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

  for (var i = 0; i < times; i++) {
    var side = throwCube();

    if (side === 1) c1++;
    if (side === 2) c2++;
    if (side === 3) c3++;
    if (side === 4) c4++;
    if (side === 5) c5++;
    if (side === 6) c6++;
  }

  var attempts = 'Попыток: ' + times + ' \n';

  var one = '1: ' + (c1 / times * 100).toFixed(1) + '% \n';
  var two = '2: ' + (c2 / times * 100).toFixed(1) + '% \n';
  var three = '3: ' + (c3 / times * 100).toFixed(1) + '% \n';
  var four = '4: ' + (c4 / times * 100).toFixed(1) + '% \n';
  var five = '5: ' + (c5 / times * 100).toFixed(1) + '% \n';
  var six = '6: ' + (c6 / times * 100).toFixed(1) + '% \n';

  return attempts + one + two + three + four + five + six;
}

function bench2Cubes(times) {
  var c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0, c9 = 0, c10 = 0, c11 = 0, c12 = 0;

  for (var i = 0; i < times; i++) {
    var cube1 = throwCube(),
        cube2 = throwCube(),
        sum = cube1 + cube2;

    // if (sum === 2) c2++;
    // if (sum === 3) c3++;
    // if (sum === 4) c4++;
    // if (sum === 5) c5++;
    // if (sum === 6) c6++;
    // if (sum === 7) c7++;
    // if (sum === 8) c8++;
    // if (sum === 9) c9++;
    // if (sum === 10) c10++;
    // if (sum === 11) c11++;
    // if (sum === 12) c12++;

    switch(sum) {
      case 2: c2++; break;
      case 3: c3++; break;
      case 4: c4++; break;
      case 5: c5++; break;
      case 6: c6++; break;
      case 7: c7++; break;
      case 8: c8++; break;
      case 9: c9++; break;
      case 10: c10++; break;
      case 11: c11++; break;
      case 12: c12++;
    }
  }

  var attempts = 'Попыток: ' + times + ' \n';

  var two = '2: ' + (c2 / times * 100).toFixed(1) + '%, Вариантов 1 (1:1), Шанс 1/36 \n';
  var three = '3: ' + (c3 / times * 100).toFixed(1) + '%, Вариантов 2 (1:2, 2:1), Шанс 2/36 \n';
  var four = '4: ' + (c4 / times * 100).toFixed(1) + '%, Вариантов 3 (1:3, 3:1, 2:2), Шанс 3/36 \n';
  var five = '5: ' + (c5 / times * 100).toFixed(1) + '%, Вариантов 4 (1:4, 4:1, 2:3, 3:2), Шанс 4/36 \n';
  var six = '6: ' + (c6 / times * 100).toFixed(1) + '%, Вариантов 5 (1:5, 5:1, 2:4, 4:2, 3:3), Шанс 5/36 \n';
  var seven = '7: ' + (c7 / times * 100).toFixed(1) + '%, Вариантов 6 (1:6, 6:1, 2:5, 5:2, 3:4, 4:3), Шанс 6/36 \n';
  var eight = '8: ' + (c8 / times * 100).toFixed(1) + '%, Вариантов 5 (2:6, 6:2, 3:5, 5:3, 4:4), Шанс 5/36 \n';
  var nine = '9: ' + (c9 / times * 100).toFixed(1) + '%, Вариантов 4 (3:6, 6:3, 4:5, 5:4), Шанс 4/36 \n';
  var ten = '10: ' + (c10 / times * 100).toFixed(1) + '%, Вариантов 3 (4:6, 6:4, 5:5), Шанс 3/36 \n';
  var eleven = '11: ' + (c11 / times * 100).toFixed(1) + '%, Вариантов 2 (5:6, 6:5), Шанс 2/36 \n';
  var twelve = '12: ' + (c12 / times * 100).toFixed(1) + '%, Вариантов 1 (6:6), Шанс 1/36 \n';

  return attempts + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve;
}

















































