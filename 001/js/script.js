'use strict';

const out = document.querySelector('.out'),
  btn = document.querySelector('button'),
  numOne = document.querySelector('.num-one'),
  numTwo = document.querySelector('.num-two');

btn.addEventListener('click', () => {

  let a = '';
  for (let i = 10; i >= 0; i--) {
    a += i + ' ';
    console.log(a);
    for (let z = 0; z <= 10; z++) {
      a += z + ' ';
    }
  }

  out.innerHTML = a;
});
