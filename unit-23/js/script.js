'use strict';

// ! Lessons:

// + localStorage

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
let input = document.querySelector('.in-one');

// localStorage.setItem('data', 5);
// console.log(localStorage.getItem('data'));

// const a = [3, 4, 5, 6];

// localStorage.setItem('a', JSON.stringify(a));

// let b = localStorage.getItem('a');
// b = JSON.parse(b);

// console.log(b);
// console.log(b[0]);

// const c = {
//   hello: 5,
//   k: 5,
//   r: 'hi',
// };

// localStorage.setItem('c', JSON.stringify(c));
// let d = localStorage.getItem('c');
// d = JSON.parse(d);

// console.log(d);

// ! Home task

// * Task 1

// btn.addEventListener('click', () => {
//   localStorage.setItem('5', 11);
// });

// * Task 2

// const a2 = [7, 6, 5];

// btn.addEventListener('click', () => {
//   localStorage.setItem('a2', a2);
// });

// * Task 3

// btn.addEventListener('click', () => {
//   out.innerHTML = localStorage.getItem('a2');
// });

// * Task 4

// const a4 = { hello: 'world', hi: 'mahai' };

// btn.addEventListener('click', () => {
//   localStorage.setItem('a4', JSON.stringify(a4));
// });

// * Task 5

// btn.addEventListener('click', () => {
//   let obj = localStorage.getItem('a4');
//   obj = JSON.parse(obj);

//   for (let key in obj) {
//     out.innerHTML += `${key} ${obj[key]} <br>`;
//   }
// });

// * Task 6

// btn.addEventListener('click', () => {
//   localStorage.clear();
// });

// * Task 7

const arr = [];

btn.addEventListener('click', () => {
  let val = input.value;

  arr.push(val);
  input.value = '';

  localStorage.setItem('a7', arr);
});
