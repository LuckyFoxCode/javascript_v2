'use strict';

const btn = document.querySelector('.btn');
let out = document.querySelector('.out');

let arr1 = ['a1', 'a2', 'a3', 1, 2, 3, true, false];

let empty = '';
for (let i = 0; i < arr1.length; i++) {
  empty += arr1[i] + ', ';
}

btn.addEventListener('click', () => {
  out += out.innerHTML = empty;
});
