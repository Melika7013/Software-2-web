'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const start = document.querySelector('#start');
const result = document.querySelector('#result');

start.addEventListener('click', () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  let answer = '';

  if (isNaN(a) || isNaN(b)) {
    result.textContent = 'Please enter valid numbers.';
    return;
  }

  switch (operation.value) {
    case 'add':
      answer = a + b;
      break;

    case 'sub':
      answer = a - b;
      break;

    case 'multi':
      answer = a * b;
      break;

    case 'div':
      answer = b === 0 ? 'Cannot divide by zero' : a / b;
      break;

    default:
      answer = 'Unknown operation';
  }

  result.textContent = `Result: ${answer}`;
});
