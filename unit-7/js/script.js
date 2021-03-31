'use strict';
/*
 ! Lessons:
 + function
*/

/*
const btn = document.querySelector('.btn');
const btnOne = document.querySelector('.btn-one');
const out = document.querySelector('.out');

function one() {
	console.log('work');
}

one();

// btn.onclick = one;
btn.onclick = () => {
	console.log('Hello');
};

function two() {
	console.log('work !!!!');
	return 54;
}

console.log(two());

let a = 8;
let b = 9;

function multi(x, y) {
	return x * y;
}

console.log(multi(a, b));

btnOne.onclick = function () {
	console.log('+++++');
};

btnOne.onclick = () => {
	console.log('+++++');
	console.log('-----');
};
*/

/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const out = document.querySelector('.out');

// *	Task 1

// let a1 = 8;
//
// function t1() {
// 	out.innerHTML = a1;
// }
//
// btn.onclick = t1;

// *	Task 2

// let a2 = 8;
//
// function t2() {
//
// }
//
// btn.onclick = () => {
// 	out.textContent = t2();
// };

// *	Task 3

// function t3(a, b) {
// 	return a + b;
// }
//
// btn.onclick = () => {
// 	out.textContent += t3(3, 4);
// };

// *	Task 4

// function age(a) {
// 	return 2021 - a;
// }
//
// btn.onclick = () => {
// 	out.textContent = age(1989);
// };

// *	Task 5

// function name(name) {
// 	return 'Hello ' + name;
// }
//
// console.log(name('Mr.Fox'));

// *	Task 6

// function random(a, b) {
// 	return Math.floor(Math.random() * (a - b + 1)) + a;
// }
//
// console.log(random(5, 9));

// *	Task 7

// let strX = Math.floor(Math.random() * 255);
// let strY = Math.floor(Math.random() * 255);
// let strZ = Math.floor(Math.random() * 255);
// let str = '';
//
// function rgb(x, y, z) {
// 	str += `${x}, ${y}, ${z}`;
// 	return str;
// }
//
// btn.onclick = () => {
// 	out.style.background = `rgb(${str})`;
// };
//
// console.log(rgb(strX, strY, strZ));

// *	Task 8

// function t8(a) {
// 	return a.trim();
// }
//
// console.log(t8('  Hello'));

// *	Task 9

// function f9(a) {
// 	if (a % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//
// console.log(f9(4));
// console.log(f9(5));

// *	Task 10

// function f10(a, b) {
// 	if (a > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
//
// console.log(f10(3, 4));
// console.log(f10(5, 3));



























