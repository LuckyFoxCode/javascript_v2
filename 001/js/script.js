'use strict';

const btn = document.querySelector('button'),
      one = document.querySelector('#one'),
      two = document.querySelector('#two'),
      text = document.querySelector('.text'),
      select = document.querySelector('#select');

btn.addEventListener('click', () => {
  let numOne = +one.value,
      numTwo = +two.value,
      selected = select.value;

  if (selected === '+') {
    text.innerHTML = numOne + numTwo;
  } else {
    text.innerHTML = numOne - numTwo;
  }

});

