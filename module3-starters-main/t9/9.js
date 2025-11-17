'use strict';

const calculation = document.querySelector('#calculation');
const start = document.querySelector('#start');
const result = document.querySelector('#result');

start.addEventListener('click', () => {
  const input = calculation.value.replace(/\s+/g, ''); // remove spaces
  let a, b, answer;

  if (input.includes('+')) {
    [a, b] = input.split('+');
    answer = Number(a) + Number(b);
  }
  else if (input.includes('-')) {
    [a, b] = input.split('-');
    answer = Number(a) - Number(b);
  }
  else if (input.includes('*')) {
    [a, b] = input.split('*');
    answer = Number(a) * Number(b);
  }
  else if (input.includes('/')) {
    [a, b] = input.split('/');
    answer = Number(b) === 0 ? 'Cannot divide by zero' : Number(a) / Number(b);
  }
  else {
    answer = 'Invalid calculation';
  }

  result.textContent = `Result: ${answer}`;
});
