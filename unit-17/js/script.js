'use strict';

// ! Lessons:

// + .map()
// + .filter()

// let a = [4, 1, 5, 434, 665, 2342, 6, 342, 34, 2, 6, 7, 4];

// let b = a.map((item, idx) => {
//   console.log(idx);
//   return item * 5;
// });

// let c = a.filter((item, idx) => {
//   if (item % 2 === 0) {
//     return true;
//   }
// });

// console.log(b);
// console.log(c);

// ! Home task

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');

// *  Task 1

// const a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

// const a1_res = a1.map((item, idx) => {
//   return item * 2;
// });

// console.log(a1_res);

// *  Task 2

// const a2 = [2, 3, 4, 5, 10, 11, 12];

// const a2_res = a2.map((item) => item * item);

// console.log(a2_res);

// *  Task 3

// const a3 = [4, '3', 6, 7, '12', 34, '56', 78, 90, 11];

// function f3() {
//   const a3_re = a3.map((item) => {
//     return item;
//   });

//   const a3_res = a3_re.filter((item) => {
//     if (typeof item === 'number') {
//       return true;
//     }
//   });

//   console.log(a3_res);
// }

// btn.addEventListener('click', f3);

// *  Task 4

// const a4 = [4, '3', 6, 7, '12', 34, '56', 78, 90, 11];

// function f4() {
//   const a4_re = a4.map((item) => {
//     return item;
//   });

//   const a4_res = a4_re.filter((item) => {
//     if (typeof item === 'number') {
//       return true;
//     }
//   });
//   console.log(a4_res);
// }

// btn.addEventListener('click', f4);

// *  Task 5

// const b1 = [3, 14, 15, 92];

// function fb1() {
//   const b1_res = b1.filter((item) => {
//     if (item % 2 === 0) {
//       return true;
//     }
//   });

//   console.log(b1_res);
// }

// btn.addEventListener('click', fb1);

// *  Task 6

// const b6 = [3, 14, 15, 92, '6', '5', 'hello', 32];

// function f6() {
//   const b6_res = b6.filter((item) => {
//     if (typeof item === 'number') {
//       return item;
//     }
//   });

//   console.log(b6_res);
// }

// btn.addEventListener('click', f6);

// *  Task 7

// const b7 = ['php-7', 'html', 'css', 92, '6', '5', 'hello', 32];

// function f7() {
//   const b7_res = b7.filter((item) => {
//     if (typeof item === 'string') {
//       return item;
//     }
//   });

//   console.log(b7_res);
// }

// btn.addEventListener('click', f7);

// *  Task 8

// const b8 = [3, 14, 15, 92, '6', '5', 'hello', 32];

// function f8() {
//   const f8_res = b8.filter((item, idx) => {
//     if (idx % 2 === 0) {
//       return idx;
//     }
//   });

//   console.log(f8_res);
// }

// btn.addEventListener('click', f8);

// *  Task 9

// const b9 = [3, 'hello', 4, 'world', 5, 'hi'];

// function f9() {
//   const b9_num = b9.filter((item) => {
//     if (typeof item === 'string') {
//       return item;
//     }
//   });

//   const b9_str = b9.filter((item) => {
//     if (typeof item === 'number') {
//       return item;
//     }
//   });

//   console.log(b9_num);
//   console.log(b9_str);
// }

// btn.addEventListener('click', f9);

// *  Task 10

// const b10 = [
//   [1, 2, 3],
//   [3, 4, 6],
//   [4, 5, 7],
//   [8, 9, 3],
// ];

// function f10() {
//   let arr = [];

//   for (let i = 0; i < b10.length; i++) {
//     for (let k = 0; k < b10[i].length; k++) {
//       if (b10[i][k] === 3) {
//         arr.push(b10[i]);
//       }
//     }
//   }

//   const b10_res = arr.filter((item, idx) => {
//     return item;
//   });

//   console.log(b10_res);
// }

// btn.addEventListener('click', f10);
