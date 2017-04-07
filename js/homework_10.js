'use strict';

/////////////////////////////////////////////////////////

// 04.04.2017

/////////////////////////////////////////////////////////

// ДЗ 1 - проверить CSS-класс у элемента

/*
const hasCssClass = (elem, str) => {
  let all = elem.className;
  let arr = all.split(' ');

  if (~arr.indexOf(str)) return true;
  return false;
};
*/

////////////////////////////////////

// ДЗ 2 - таблица 10х10

/*
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const tab = (rows, cols) => {
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
      
    for (let j = 0; j < cols; j++) {
      let td = document.createElement('td');
      
      if (i % 2 === 0 && j % 2 === 0) td.style.background = 'lightgrey';
      if (i % 2 !== 0 && j % 2 !== 0) td.style.background = 'lightgrey';
      
      td.textContent = random(100, 999);
      tr.append(td);
    }
    tbody.append(tr);
  }
  
  table.append(tbody);
  
  return table;
};

let wrapper = document.querySelector('.wrapper');

wrapper.append(tab(10, 10));
*/

////////////////////////////////////

// ДЗ 3 - таблица 10х10 через innerHTML

const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

let wrapper = document.querySelector('.wrapper');

wrapper.innerHTML = `
<table>
  <tbody>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  </tbody>
</table>`;

let tds = wrapper.querySelectorAll('td');

for (let td of tds) {
  td.textContent = random(100, 999);
  
  if (td.parentElement.sectionRowIndex % 2 === 0 &&
      td.cellIndex % 2 === 0) td.style.background = 'lightgrey';
  
  if (td.parentElement.sectionRowIndex % 2 !== 0 &&
      td.cellIndex % 2 !== 0) td.style.background = 'lightgrey';
}
