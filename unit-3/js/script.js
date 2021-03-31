'use strict';
/*
 ! Lessons:
 + if
 + else if
 + else
 + switch
*/

const button = document.querySelector('button');
const input = document.querySelector('.age');
const inputOne = document.querySelector('.one');
const inputTwo = document.querySelector('.two');
const select = document.querySelector('.select');
const selectOne = document.querySelector('.select-one');
const selectTwo = document.querySelector('.select-two');
const selectS = document.querySelector('.select-s');
const out = document.querySelector('.out');


// let a = 6;
//
// if (a > 9) {
// 	console.log('Yes');
// } else {
// 	console.log('Else');
// }


// button.onclick = () => {
// 	let num = +input.value;
//
// 	if (num >= 16 && num <= 60) {
// 		console.log('Welcome!');
// 		input.value = '';
// 	} else if (num > 60) {
// 		console.log('Ты точно сюда?');
// 		input.value = '';
// 	} else {
// 		console.log('Ты не пройдешь!');
// 		input.value = '';
// 	}
//
// 	switch (num) {
// 		case 15:
// 			console.log('Еще год потерпи!');
// 			break;
// 		case 16:
// 			console.log('Welcome!');
// 			break;
// 		default:
// 			console.log('Error');
// 	}
// };

/*
 ! Home task
*/


// * Task 1
// button.onclick = () => {
// 	let num = +input.value;
//
// 	if (num === 4) {
// 		console.log('true');
// 	} else {
// 		console.log('false');
// 	}
// };

// * Task 2
// let a21 = 50;
// let a22 = 40;
// button.onclick = () => {
// 	if (a21 > a22) {
// 		out.innerHTML = a21;
// 	} else {
// 		out.innerHTML = a22;
// 	}
// };

// * Task 3

// button.onclick = () => {
// 	let one = +inputOne.value;
// 	let two = +inputTwo.value;
//
// 	if (one > two) {
// 		out.innerHTML = one;
// 	} else {
// 		out.innerHTML = two;
// 	}
// };

// * Task 4

// button.onclick = () => {
// 	let num = +input.value;
//
// 	if (2021 - num >= 18) {
// 		out.innerHTML = 1;
// 	} else {
// 		out.innerHTML = 0;
// 	}
// };

// * Task 5

// button.onclick = () => {
// 	let num = +inputOne.value;
//
// 	if (num < 0) {
// 		out.innerHTML = 'min';
// 	} else if (num === 0) {
// 		out.innerHTML = 0;
// 	} else {
// 		out.innerHTML = 1;
// 	}
// };

// * Task 6

// button.onclick = () => {
// 	let num = +inputOne.value;
//
// 	if (num % 2 === 0) {
// 		out.innerHTML = 'even';
// 	} else {
// 		out.innerHTML = 'odd';
// 	}
// };

// * Task 7

// button.onclick = () => {
// 	let one = +inputOne.value;
// 	let two = +inputTwo.value;
//
// 	let pow = one ** two;
// 	out.innerHTML = pow;
//
// };

// * Task 8

// button.onclick = () => {
// 	let num = +select.value;
//
// 	switch (num) {
// 		case 1:
// 			out.innerHTML = 'one';
// 			break;
// 		case 2:
// 			out.innerHTML = 'two';
// 			break;
// 		case 3:
// 			out.innerHTML = 'three';
// 			break;
// 	}
// };

// * Task 9

// button.onclick = () => {
// 	let num = +inputOne.value;
//
// 	if (num >= 1 && num <= 32) {
// 		out.innerHTML = 'One';
// 	} else if (num >= 33 && num <= 43) {
// 		out.innerHTML = 'Two';
// 	} else if (num >= 44 && num <= 64) {
// 		out.innerHTML = 'Three';
// 	} else {
// 		out.innerHTML = '0';
// 	}
// };

// * Task 10

// button.onclick = () => {
// 	let sel = select.value;
//
// 	out.innerHTML = sel;
//
// };

// * Task 11

// select.onchange = () => {
// 	out.innerHTML = select.value;
// };

// * Task 12

// button.onclick = () => {
// 	let inputType = input.value;
//
// 	out.innerHTML = typeof (inputType);
// };

// * Task 13

// button.onclick = () => {
// 	let inputType = inputOne.value;
//
// 	out.innerHTML = typeof (inputType);
// 	// ! typeOf string из за того что изначально input.value строка, если не
// 	// ! поставить + или не перевести в number.
// };

// * Task 14

// button.onclick = () => {
// 	let sele = select.value;
// 	let one = +inputOne.value;
// 	let two = +inputTwo.value;
//
// 	if (sele === '+') {
// 		out.innerHTML = one + two;
// 	} else if (sele === '-') {
// 		out.innerHTML = one - two;
// 	} else if (sele === '*') {
// 		out.innerHTML = one * two;
// 	} else if (sele === '/') {
// 		out.innerHTML = one / two;
// 	}
// };

// * Task 15

// button.onclick = () => {
// 	let one = +selectOne.value;
// 	let two = +selectTwo.value;
// 	let s = selectS.value;
//
// 	if ( s === '&&') {
// 		if (one === two) {
// 			out.innerHTML = '1';
// 		} else {
// 			out.innerHTML = '0';
// 		}
// 	} else if (s === '||') {
// 		if (one || two) {
// 			out.innerHTML = '1';
// 		} else {
// 			out.innerHTML = '0';
// 		}
// 	}
// };