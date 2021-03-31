'use strict';
/*
 ! Lessons:
 + for
 + for in
 + for of
*/


// const out = document.querySelector('.out');
// const btn = document.querySelector('.btn');
// let p = document.getElementsByTagName('p');
// let qP = document.querySelectorAll('p');
//
// const arr = [4, 5, 7, 3, 5];
// console.log(p);

// * for

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let i = 0; i < p.length; i++) {
// 	console.log(p[i]);
// }

// for (let i = 0; i < qP.length; i++) {
// 	console.log(qP[i]);
// }


// * for in

// for (let key in arr) {
// 	console.log(arr[key]);
// }

// for (let key in p) {
// 	console.log(p[key]);
// }

// for (let key in qP) {
// 	console.log(qP[key]);
// }

// * for of

// for (let item of arr) {
// 	console.log(item);
// }

// for (let item of p) {
// 	console.log(item);
// }

// for (let item of qP) {
// 	console.log(item);
// }


/*
 ! Home task
*/

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');

// *	Task 1

// const a1 = [5, 7, 9, 11, 13, 15];
//
// function f1() {
// 	let str = '';
//
// 	for (let i = 0; i < a1.length; i++) {
// 		str += `${a1[i]} `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f1;

// *	Task 2

// const a2 = [5, 7, 9, 11, 13, 15];
//
// function f2() {
// 	let str = '';
//
// 	for (let i = 0; i < a2.length; i++) {
// 		str += `${i}: ${a2[i]} `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f2;

// *	Task 3

// function f3() {
// 	const div = document.getElementsByClassName('out');
// 	console.log(div);
// 	for (let i = 0; i < div.length; i++) {
// 		div[i].innerHTML = '3';
// 	}
// }
//
// btn.onclick = f3;

// *	Task 4

// function f4() {
// 	const div = document.querySelectorAll('.out');
// 	console.log(div);
// 	for (let i = 0; i < div.length; i++) {
// 		div[i].innerHTML = '4';
// 	}
// }
//
// btn.onclick = f4;

// *	Task 5

// const a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];
//
// function f5() {
// 	let str = '';
// 	for (let item of a5) {
// 		if (item > 7) {
// 			str += item + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f5;

// *	Task 6

// const a6 = [[1, 2], [3, 4], [5, 6]];
// let arr = [];
// let str = '';
//
// function f6() {
// 	for (let i = 0; i < a6.length; i++) {
// 		for (let k = 0; k < a6[i].length; k++) {
// 			arr.push(a6[i][k]);
// 			str += a6[i][k] + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.addEventListener('click', f6);

// *	Task 7

// const a7 = [{id: 23, name: 'Ivan'}, {id: 45, name: 'Petr'}];
// const newA7 = {};
//
// function f7() {
// 	for (let key in a7) {
// 		let one = a7[key].id;
// 		let two = a7[key].name;
// 		newA7[one] = two;
// 	}
// 	return newA7;
// }
//
// btn.addEventListener('click', () => {
// 	console.log(f7());
// });

// *	Task 8

// const a8 = [{id: 23, name: 'Ivan'}, {id: 45, name: 'Petr'}];
// const newArr = [];
//
// function f8() {
// 	for (let key in a8) {
// 		newArr.push(a8[key].id);
// 	}
// 	return newArr;
// }
//
// btn.addEventListener('click', () => {
// 	console.log(f8());
// });

// *	Task 9

// const a9 = [[4, 3, 2], [2, 5], [0, 0, 0, 0, 0]];
//
// function f9() {
// 	let max = 0;
//
// 	for (let i = 0; i < a9.length; i++) {
// 		if (a9[i].length > max) {
// 			max = a9[i].length - 1;
// 			console.log(max);
// 		}
// 	}
// 	out.innerHTML = max;
// }
//
// btn.addEventListener('click', f9);

// *	Task 10

// const a10 = [4, 6, 9, 'Hello'];
// const newA10 = {};
//
// function f10() {
// 	for (let key in a10) {
// 		console.log(a10[key]);
// 		newA10[a10[key]] = a10[key];
// 	}
// 	return newA10;
// }
//
// btn.addEventListener('click', () => {
// 	console.log(f10());
// });

// *	Task 11

// const a11 = {
// 	one: 11,
// 	two: 7,
// 	three: 13,
// 	four: 0
// };
//
// function f11() {
// 	let str = '';
//
// 	for (let key in a11) {
// 		if (a11[key] > 10) {
// 			str += `${a11[key]} `;
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.addEventListener('click', f11);

// *	Task 12

// const a12 = [4, 5, 6, 7];
// let str = '';
//
// function f12() {
// 	for (let item of a12) {
// 		str += `${item} `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.addEventListener('click', f12);

// *	Task 13

// const a13 = 'testone';
// let str = '';
//
// function f13() {
// 	let a = a13.split('');
//
// 	for (let item of a) {
// 		str += `${item} `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.addEventListener('click', f13);

// *	Task 14

// const a14 = new Set([4, 5, 6]);
// let str = '';
//
// function f14() {
// 	for (let item of a14) {
// 		str += `${item} `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.addEventListener('click', f14);

// *	Task 15

// function f15() {
// 	const outs = document.querySelectorAll('.out');
//
// 	for (let item of outs) {
// 		console.log(item);
// 		item.innerHTML = 15;
// 	}
// }
//
// btn.addEventListener('click', f15);

























