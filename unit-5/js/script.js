'use strict';
/*
 ! Lessons:
 + for
 + while
 + do while
*/
/*
const out = document.querySelectorAll('.out');
const outOne = document.querySelector('.out-one');
const btn = document.querySelector('.btn');
console.log(out);

for (let i = 0; i < out.length; i++) {
	out[i].style.background = 'darkred';
	out[i].style.color = 'white';
	out[i].style.paddingLeft = '10px';
	out[i].onclick = one;
}

function one() {
	console.log('work!!');
}

let b = document.getElementsByClassName('out');
console.log(b);

btn.onclick = () => {
	let r = document.querySelectorAll('input[type="radio"]');

	for (let i = 0; i < r.length; i++) {
		if (r[i].checked) {
			console.log(r[i].value);
		}
	}
};

let a = '';
for (let i = 0; i < 10; i++) {
	a += i + ' ';
	console.log(a);
}
outOne.innerHTML = a;
*/
/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const div = document.querySelectorAll('div');
const inputTxt = document.querySelector('.in-txt');
const inputTxt2 = document.querySelector('.in-txt2');
const out = document.querySelector('.out');

// *	Task 1

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = 1; i <= 50; i++) {
// 		str += i + ' ';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 2

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = 2; i <= 122; i= i + 2) {
// 		str += i + ' ';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 3

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = 25; i >= 7; i--) {
// 		str += i + ' ';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 4

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = 77; i >= 35; i-=3) {
// 		str += i + '_';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 5

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = 1; i <= 17; i++) {
// 		if (i % 2 === 0) {
// 			str += i + '_**';
// 		} else {
// 			str += i + '_*';
// 		}
// 	}
// 	out.innerHTML = str;
// };

// *	Task 6

// btn.onclick = () => {
// 	let str = '';
// 	let inputValue = inputTxt.value;
// 	for (let i = 1; i <= inputValue; i++) {
// 		str += `****** <br>`;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 7

// btn.onclick = () => {
// 	let str = '';
// 	let inValue = inputTxt.value;
// 	for (let i = inValue; i >= 0; i--) {
// 		str += i + ' ';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 8

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = inputTxt.value; i <= inputTxt2.value; i++) {
// 		str += i + ' ';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 9

// btn.onclick = () => {
// 	let str = '';
// 	let inpOne = +inputTxt.value;
// 	let inpTwo = +inputTxt2.value;
//
// 	if (inpOne > inpTwo) {
// 		for (let i = inpTwo; i <= inpOne; i++) {
// 			str += i + ' ';
// 		}
// 	} else {
// 		for (let i = inpOne; i <= inpTwo; i++) {
// 			str += i + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// };

// *	Task 10

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = 1950; i <= 2000; i++) {
// 		if (i % 2 === 0) {
// 			str += i + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// };

// *	Task 11

// btn.onclick = () => {
// 	let str = '';
// 	for (let i = 0; i < div.length; i++) {
//
// 		str += div[i].innerHTML + ' ';
// 	}
// 	out.innerHTML = str;
//
// };

// *	Task 12

// btn.onclick = () => {
// 	for (let i = 0; i < div.length; i++) {
// 		div[i].style.background = 'orange';
// 	}
// };

// *	Task 13

// btn.onclick =() => {
// 	let str = '';
// 	let inp = document.querySelectorAll('input[type="text"]');
// 	console.log(inp);
// 	for (let i = 0; i < inp.length; i++) {
// 		inp[i].value = i + 1;
// 	}
// };

// *	Task 14

// btn.onclick = () => {
// 	let str = '';
// 	let check = document.querySelectorAll('input[type="checkbox"]');
// 	for (let i = 0; i < check.length; i++) {
// 		if (check[i].checked) {
// 			str += check[i].value + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// };

// *	Task 15

// btn.onclick = () => {
// 	let str = '';
// 	let count = 0;
// 	for (let i = 10, j = 0; i >= 0; i--, j++) {
// 		str += i + ' ' + j + ' ';
// 	}
// 	out.innerHTML = str;
// };