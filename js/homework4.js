'use strict';

/////////////////////////////////////////////////////////

// 25.02.2017

/////////////////////////////////////////////////////////

// ДЗ 1 - вычислить факториал рекурсией

function factorial(n) {
  if (n > 1) n *= factorial(n - 1);
  return n;
}
factorial(5);

/////////////////////////////////////////////////////////

// ДЗ 2 - вычислить Фибоначчи рекурсией

function fib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  } else {
    return n;
  }
}
fib(7);
// fib(77); воевал с функцией, гуглил формулы и реализации на других языках, 20 раз повесил браузер, забил

/////////////////////////////////////////////////////////

// ДЗ 3 - лампочки

// Попытвлся сделать, но не получилось
















