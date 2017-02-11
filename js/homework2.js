
/////////////////////////////////////////////////////////

// 11.02.2017

/////////////////////////////////////////////////////////

// ДЗ 1

// создание случайного числа

function randNum(min, max) {
  return Math.floor(min + Math.random() * ((max + 1) - min));
}

// создание матрицы

function buildMatrix(heightArr, withArr) {
  var matrixArr = [];
  
  for (var i = 0; i < heightArr; i++) {
    matrixArr[i] = [];
    
    for (var j = 0; j < withArr; j++) {
      matrixArr[i][j] = randNum(0, 100);
	  // то же самое через "пуш"
	  // matrixArr[i].push( randNum(0, 100) );
    }
  }
  
  return matrixArr;
}

var matrix = buildMatrix(10, 10);
console.table(matrix);

// Итог: матрица из случайных чисел 10х10

/////////////////////////////////////////////////////////

// ДЗ 2.1

// Функция: показать числа в массиве по периметру матрицы по часовой стрелке

function showClock(arr) {
  var perimeter = [],
      top = [],
	  right = [],
	  bottom = [],
	  left = [];

  top = arr[0].slice();
  bottom = arr[arr.length - 1].slice().reverse();
  
  for (var i = 1; i < arr.length - 1; i++) {
    right.push(arr[i][arr.length - 1]);
	// left требует реверса
	left.push(arr[i][0]);
  }
  
  perimeter = top.concat(right, bottom, left.reverse());
  
  return perimeter;
}

console.log( showClock(matrix) );

// Итог: пробегаемся по часовой стрелке

/////////////////////////////////////////////////////////

// ДЗ 2.2

// Функция: показать числа в массиве по периметру матрицы против часовой стрелки

function showClockReverse(arr) {
  var perimeter = [],
      top = [],
	  right = [],
	  bottom = [],
	  left = [];

  // top требует реверса
  top = arr[0].slice(1, arr.length - 1);
  bottom = arr[arr.length - 1].slice(1, arr.length - 1);
  
  for (var i = 0; i < arr.length; i++) {
    // right требует реверса
	right.push(arr[i][arr.length - 1]);
	left.push(arr[i][0]);
  }
  
  perimeter = left.concat(bottom, right.reverse(), top.reverse());
  
  return perimeter;
}

console.log( showClockReverse(matrix) );

// Итог: пробегаемся против часовой стрелки

/////////////////////////////////////////////////////////

// ДЗ 2.3

// Функция: числа по часовой стрелке, возвращается по диагонали из 9-9 в 0-0

function showClockDiagonal(arr) {
  var perimeter = [],
      top = [],
	  right = [],
	  diagonal = [];

  top = arr[0].slice();
  
  for (var i = 1; i < arr.length; i++) {
    right.push(arr[i][arr.length - 1]);
	// diagonal требует реверса
	diagonal.push(arr[i][i]);
  }

  // diagonal обрезаю крайний элемент, чтоб не повторялся
  diagonal.pop();
  perimeter = top.concat(right, diagonal.reverse());
  
  return perimeter;
}

console.log( showClockDiagonal(matrix) );

// Итог: пробегаемся по часовой стрелке и диагонали

/////////////////////////////////////////////////////////

// ДЗ 2.4

// Функция: показать числа в массиве по периметру матрицы против часовой стрелки, по диагонали 9-0 0-9

function showClockReverseDiagonal(arr) {
  var perimeter = [],
      top = [],
	  left = [],
	  diagonal = [];

  // top требует реверса
  top = arr[0].slice(1, arr.length - 1);
  
  for (var i = 0; i < arr.length; i++) {
	left.push(arr[i][0]);
	// diagonal требует реверса
	diagonal.push(arr[i][arr.length - 1 - i]);
  }
  
  // diagonal обрезаю крайний элемент, чтоб не повторялся
  diagonal.pop();
  perimeter = left.concat(diagonal.reverse(), top.reverse());
  
  return perimeter;
}

console.log( showClockReverseDiagonal(matrix) );

// Итог: пробегаемся против часовой стрелки по диагонали
