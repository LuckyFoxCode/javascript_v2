'use strict';
/*
 ! Lessons:
 + input
 + range
 + textarea
 + checkbox
*/

// const btn = document.querySelector('.btn');
// const btnOne = document.querySelector('.btn-one');
// const btnTxtArea = document.querySelector('.btn-two');
// const out = document.querySelector('.out');
// const inputPassword = document.querySelector('.password');
// const inputRange = document.querySelector('.range');
// const inputCheckbox = document.querySelector('#checked');
// const inputTxtArea = document.querySelector('#txtarea');
//
// btn.onclick = () => {
// 	console.log(inputPassword.value);
// 	out.innerHTML = inputPassword.value;
// };
//
// inputRange.oninput = () => {
// 	out.innerHTML = inputRange.value;
// };
//
// btnOne.onclick = () => {
// 	if (inputCheckbox.checked) {
// 		console.log(inputCheckbox.checked);
// 	} else  {
// 		console.log(inputCheckbox.checked);
// 	}
// };
//
// btnTxtArea.onclick = (event) => {
// 	event.preventDefault();
// 	let form = document.querySelector('form');
// 	console.log(form);
// 	console.log(form.elements.one.value);
// };

/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const out = document.querySelector('.out');
const inputBtn = document.querySelector('#in-btn');
const inputHid = document.querySelector('#in-hid');
const inputPas = document.querySelector('#in-pas');
const text = document.querySelector('.p-text');
const check = document.querySelector('#check');
const radio = document.querySelector('.in-radio');
const color = document.querySelector('.in-color');
const colorTwo = document.querySelector('.in-color2');
const date = document.querySelector('.in-date');
const range = document.querySelector('.in-range');
const textAr = document.querySelector('#in-text');
const inputText = document.querySelector('.in-textIn');
const select = document.querySelector('#select');
const form = document.querySelector('.form');
const formIn = document.querySelector('.form-in');
const formPas = document.querySelector('.form-pass');
const formBtn = document.querySelector('.form-btn');

// * Task 1

// btn.onclick = () => {
// 	console.log('Task 1');
// };

// * Task 2

// inputBtn.onclick = () => {
// 	console.log('Task 2');
// };

// * Task 3

// text.onclick = () => {
// 	console.log('Task 3');
// };

// * Task 4

// btn.onclick = () => {
// 	if (check.checked) {
// 		console.log(check.checked);
// 		out.innerHTML = check.checked;
// 	} else {
// 		console.log(check.checked);
// 		out.innerHTML = check.checked;
// 	}
// };

// * Task 5

// btn.onclick = () => {
// 	if (check.checked) {
// 		out.innerHTML = check.value;
// 	} else {
// 		out.innerHTML = check.checked;
// 	}
// };

// * Task 6

// btn.onclick = () => {
// 	console.log(inputHid.value);
// 	out.innerHTML = inputHid.value;
// };

// * Task 7

// btn.onclick = () => {
// 	out.innerHTML = inputPas.value;
//
// 	if (inputPas.value.length >= 6) {
// 		console.log('password length >= 6');
// 	} else {
// 		console.log('password length < 6');
// 	}
// };

// * Task 8

// btn.onclick = () => {
// 	let html = `
// 		<button class="btn-wr">btn</button>
// 		<input class="input-wr" type="text" value="Task 8" />
// 		<div class="out-wr"></div>
// 	`;
// 	out.innerHTML = html;
//
// 	const btnWr = document.querySelector('.btn-wr');
// 	const inputWr = document.querySelector('.input-wr');
// 	const outWr = document.querySelector('.out-wr');
//
// 	btnWr.onclick = () => {
// 		outWr.innerHTML = inputWr.value;
// 	};
// };

// * Task 9

// btn.onclick = () => {
// 	if (radio.checked) {
// 		out.innerHTML = radio.value;
// 	} else {
// 		out.innerHTML = '0';
// 	}
// };

// * Task 10

// btn.onclick = () => {
// 	console.log(color.value);
// 	btn.style.background = color.value;
// };

// * Task 11

// btn.onclick = () => {
// 	let c1 = color.value;
// 	colorTwo.value = c1;
// };

// * Task 12

// btn.onclick =() => {
// 	out.innerHTML = date.value;
// };

// * Task 13

// range.oninput = () => {
// 	 out.innerHTML = range.value;
// };

// * Task 14

// btn.onclick = () => {
// 	out.innerHTML = textAr.value;
// };

// * Task 15

// btn.onclick = () => {
// 	let input = inputText.value;
// 	textAr.value = input;
// };

// * Task 16

// btn.onclick = () => {
// 	out.innerHTML = select.value;
// };

// * Task 17

// select.onchange = () => {
// 	out.innerHTML = select.value;
// };

// * Task 18

// select.onchange = () => {
// 	let change = select.value;
// 	inputText.value = change;
// };

// * Task 19

// btn.onclick = (event) => {
// 	event.preventDefault();
//
// 	let inValue = formIn.value;
// 	let pasValue = formPas.value;
//
// 	out.innerHTML = `${inValue} ${pasValue}`;
// };

// * Task 20

// formBtn.onclick = (event) => {
// 	event.preventDefault();
//
// 	out.innerHTML = `${formIn.value} ${formPas.value}`;
// };