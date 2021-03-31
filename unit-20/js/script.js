'use strict';

// ! Lessons:

// + event

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
const inOne = document.querySelector('.in-one');

// inOne.addEventListener('keypress', (e) => {
//   console.log('charCode: ' + e.charCode);
//   console.log('code: ' + e.code);
//   console.log('key: ' + e.key);
//   console.log('keyCode: ' + e.keyCode);
//   console.log(e);
// });

// inOne.addEventListener('keydown', (e) => {
//   console.log('charCode: ' + e.charCode);
//   console.log('code: ' + e.code);
//   console.log('key: ' + e.key);
//   console.log('keyCode: ' + e.keyCode);
//   console.log(e);
// });

// ! Home task

// *  Task 1

// inOne.addEventListener('keydown', function f1(e) {
//   out.innerHTML += e.key;
// });

// *  Task 2

// inOne.addEventListener('keydown', function f2(e) {
//   out.innerHTML = e.keyCode;
// });

// *  Task 3

// inOne.addEventListener('keydown', function f3(e) {
//   if (e.keyCode >= 48 && e.keyCode <= 57) {
//     out.innerHTML = false;
//   } else {
//     out.innerHTML = true;
//   }
// });

// *  Task 4

// inOne.addEventListener('keypress', function f4(e) {
//   out.innerHTML += e.key.toLowerCase();
// });

// *  Task 5

// inOne.addEventListener('keypress', function f5(e) {
//   out.innerHTML += e.key.toUpperCase();
// });

// *  Task 6

// inOne.addEventListener('keypress', function f6(e) {
//   inOne.value = inOne.value.toLowerCase();
// });

// *  Task 8

// inOne.addEventListener('keypress', function f8(e) {
//   const obj = {
//     i: 1,
//     o: 0,
//     I: 7,
//   };

//   out.innerHTML += obj[e.key];
// });

// *  Task 9

// let counter = 0;

// inOne.addEventListener('keydown', function f9(e) {
//   if (e.key === 'ArrowDown') {
//     counter++;
//   }
//   out.innerHTML = counter;
// });

// *  Task 10

// let w = 75;
// let h = 75;
// const block = document.querySelector('.block');

// inOne.addEventListener('keydown', function f10(e) {
//   if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//     block.style.width = `${w}px`;
//     w++;
//   } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
//     block.style.height = `${h}px`;
//     h++;
//   }
// });

// *  Task 11

// const num = document.querySelectorAll('.num');
// let obj = {
//   1: '1',
//   2: '2',
//   3: '3',
//   4: '4',
//   5: '5',
//   6: '6',
//   7: '7',
//   8: '8',
//   9: '9',
//   0: '0',
//   q: 'q',
//   w: 'w',
//   e: 'e',
//   r: 'r',
//   t: 't',
//   y: 'y',
//   u: 'u',
//   i: 'i',
//   o: 'o',
//   p: 'p',
// };

// inOne.addEventListener('keypress', (e) => {
//   console.log(obj[e.key]);
//   if (e.key === obj[e.key]) {
//     obj[e].classList.add('active');
//   }
// });
