'use strict';

// ! Lessons:

// + touch

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
const block = document.querySelector('.block');
const blockTwo = document.querySelector('.block-2');

// block.addEventListener('touchstart', myTouch);

// function myTouch(e) {
//   console.log('touch');
//   console.log(e);
//   out.innerHTML += 'work';
// }

// ! Home task

// * Task 1

// block.addEventListener('touchstart', () => {
//   out.innerHTML = 'touch';
// });

// * Task 2

// let counter = 0;
// block.addEventListener('touchstart', () => {
//   counter++;
//   out.innerHTML = counter;
// });

// * Task 3

// block.addEventListener('touchstart', () => {
//   out.innerHTML += ' Block One';
// });

// blockTwo.addEventListener('touchstart', () => {
//   out.innerHTML += ' Block Two';
// });

// * Task 4

// btn.addEventListener('click', () => {
//   block.addEventListener('touchstart', () => {
//     out.innerHTML = 'touch';
//   });
// });

// * Task 6

// block.addEventListener('touchend', () => {
//   out.innerHTML = 'touchend';
// });

// * Task 7

// block.addEventListener('touchstart', () => {
//   block.style.backgroundColor = 'red';
// });

// * Task 8

// const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

// block.addEventListener('touchstart', () => {
//   let random = Math.floor(Math.random(a8.length - 1) * 10);
//   block.style.backgroundColor = a8[random];
// });

// * Task 10

// let w = 75;

// block.addEventListener('touchmove', () => {
//   block.style.width = w + 'px';
//   w++;
//   console.log(w);
// });
