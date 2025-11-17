'use strict';

const target = document.querySelector('#target');
const names = ['John', 'Paul', 'Jones'];

let listHTML = '';

for (let i = 0; i < names.length; i++) {
  listHTML += `<li>${names[i]}</li>`;
}

target.innerHTML = listHTML;
