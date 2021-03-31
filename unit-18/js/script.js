'use strict';

// ! Lessons:

// + .join()
// + .split()
// + .forEach()

// const a = 'hello,hi,mihai';

// console.log(a.split(','));

// const b = [8, 9, 7];

// console.log(b.join('-'));

// b.forEach(function (elem, idx) {
//   console.log(idx);
//   console.log(elem * 2);
//   console.log('--');
// });

// ! Home task

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');

// * Task 1

// const a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

// function f1() {
//   const a1_res = [];
//   a1.forEach(function (elem) {
//     a1_res.push(elem * 2);
//   });
//   console.log(a1_res);
// }

// btn.addEventListener('click', f1);

// * Task 2

// const a2 = [2, 3, 4, 5, 10, 11, 12];

// function f2() {
//   const a2_res = [];
//   a2.forEach((elem) => {
//     a2_res.push(elem / 2);
//   });
//   console.log(a2_res);
// }

// btn.addEventListener('click', f2);

// * Task 3

// const a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];

// function f3() {
//   const a3_res = [];
//   a3.forEach((elem) => {
//     if (typeof elem === 'number') {
//       a3_res.push(elem);
//     }
//   });
//   console.log(a3_res);
// }

// btn.addEventListener('click', f3);

// * Task 4

// const spans = document.querySelectorAll('.task-4');
// console.log(spans);

// function f4() {
//   const a4_res = [];
//   spans.forEach((elem) => {
//     a4_res.push(elem.getAttribute('data'));
//   });
//   console.log(a4_res);
// }

// btn.addEventListener('click', f4);

// * Task 5

// const spans = document.querySelectorAll('.task-4');

// function f5() {
//   const a5_res = [];
//   spans.forEach((elem) => {
//     a5_res.push(elem.getAttribute('data'));
//   });
//   console.log(a5_res);
// }

// spans.forEach((elem) => {
//   elem.addEventListener('click', f5);
// });

// * Task 6

// const str6 = 'helloworld';

// function f6() {
//   const a6_res = [];
//   let str = str6.split('');
//   str6.split('').forEach((elem) => {
//     a6_res.push(elem);
//   });
//   console.log(a6_res);
// }

// f6();

// * Task 7

// const str7 = 'hello world hi mazai';

// function f7() {
//   const a7_res = [];
//   str7.split(' ').forEach((elem) => {
//     a7_res.push(elem);
//   });

//   out.innerHTML = a7_res;
// }

// btn.addEventListener('click', f7);

// * Task 8

// const a8 = [1, 2, 66, 77, 15];

// function f8() {
//   let a = a8.join('-');
//   console.log(a);
// }

// f8();

// * Task 9

// const a9 = [
//   ['hi', 'mahai'],
//   ['test', 'best'],
// ];

// function f9() {
//   let a9_res = '';
//   a9.forEach((elem) => {
//     a9_res += elem.join('-') + ' ';
//     console.log(a9_res);
//   });
// }

// f9();

// * Task 10

const a10 = { name: 'ivan', age: 15, sex: 1, id: 45 };

function f10() {
  // get str() {
  //   return `${this.name}& ${this.age}& ${this.sex}& ${this.id}`;
  // }
}

f10();
