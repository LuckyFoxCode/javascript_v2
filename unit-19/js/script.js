'use strict';

// ! Lessons:

// + event

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
const check = document.querySelector('.check');
const body = document.querySelector('body');
const img = document.querySelector('.img');
const progress = document.querySelector('progress');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

// one.addEventListener('click', (e) => {
//   console.log(e);
//   console.log('click');
// });

// two.addEventListener('click', () => {
//   console.log('click 2');
// });

// two.addEventListener('dblclick', () => {
//   console.log('click 2');
// });

// let w = 75;
// three.addEventListener('mousemove', () => {
//   three.style.width = w + 'px';
//   w++;
// });

// three.addEventListener('mouseenter', () => {
//   three.style.background = 'crimson';
// });
// three.addEventListener('mouseleave', () => {
//   three.style.background = 'red';
// });
// three.addEventListener('mousedown', () => {
//   three.style.background = 'blue';
// });
// three.addEventListener('mouseup', () => {
//   three.style.background = 'orangered';
// });

// let p = 10;
// btn.addEventListener('click', (e) => {
//   p++;
//   document.querySelector('progress').value = p;
// });

// ! Home task

// * Task 1

// function f1() {
//   return (out.innerHTML = one.textContent);
// }

// btn.addEventListener('click', f1);

// * Task 2

// one.addEventListener('click', function f2(e) {
//   if (e.altKey === true) {
//     return (out.innerHTML = e.altKey);
//   } else {
//     return (out.innerHTML = e.altKey);
//   }
// });

// * Task 3

// let w = 75;
// three.addEventListener('click', () => {
//   three.style.width = w + 'px';
//   w = w + 5;
//   out.textContent = three.style.width;
// });

// * Task 4

// one.addEventListener('dblclick', function f1() {
//   out.innerHTML = one.textContent;
// });

// * Task 5

// one.addEventListener('dblclick', function f5() {
//   one.classList.toggle('active');
// });

// * Task 6

// one.addEventListener('dblclick', function f6() {
//   two.classList.toggle('hide');
// });

// * Task 7

// one.addEventListener('contextmenu', function f7() {
//   one.classList.toggle('active');
// });

// * Task 8

// check.addEventListener('change', function f8(e) {
//   if (check.checked) {
//     console.log(check.checked);
//     body.style.background = 'red';
//   } else {
//     body.style.background = 'transparent';
//   }
// });

// * Task 9

// img.addEventListener('contextmenu', function f9() {
//   img.src = 'https://fakeimg.pl/60x60/';
// });

// * Task 10

// img.addEventListener('mouseenter', function f9() {
//   img.src = 'https://fakeimg.pl/60x60/';
// });

// * Task 11

// img.addEventListener('mouseenter', function f9() {
//   img.src = 'https://fakeimg.pl/60x60/';
// });

// img.addEventListener('mouseleave', function f9() {
//   img.src = 'https://fakeimg.pl/50x50/';
// });

// * Task 12

// one.addEventListener('mousedown', function f12() {
//   one.classList.add('active');
// });

// * Task 13

// one.addEventListener('mousedown', function f12() {
//   one.classList.add('active');
// });

// one.addEventListener('mouseup', function f12() {
//   one.classList.remove('active');
// });

// * Task 14

// btn.addEventListener('click', function f14() {
//   one.classList.add('active');
// });

// * Task 15

// let num = 1;
// three.addEventListener('mousemove', function f15() {
//   three.innerHTML = num;
//   num++;
// });

// * Task 16

// let num = 10;
// three.addEventListener('mousemove', function f15() {
//   three.style.width = num + 'px';
//   num++;
// });

// * Task 18

// one.addEventListener('mouseenter', function f18(e) {
//   out.innerHTML = e.target.offsetWidth;
// });

// * Task 19

// one.addEventListener('mouseenter', function f19(e) {
//   out.innerHTML = e.target.classList.value;
// });

// * Task 20

// progress.addEventListener('mousemove', function f20() {
//   progress.value += 1;
// });
