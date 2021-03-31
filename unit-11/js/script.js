'use strict';
/*
 ! Lessons:
 + .pop()
 + .push()
 + .splice()
*/

/*
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'f', 'g', 'k'];

console.log(a.length);
a.push(10,4,98,4,655,45,5675);
console.log(a.length);
console.log(a);

b.pop();
console.log(b);

delete a[3];
console.log(a);

a.splice(3,3,'hello');
console.log(a);
 */

/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const out = document.querySelector('.out');
const inputText = document.querySelector('.in-text');

const d1 = [33, 'best', 66, 'best'];

function showArr(domElem, arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += arr[i] + ' ';
	}
	domElem.innerHTML = str;
}

// *	Task 1

// btn.onclick = () => {
// 	d1.push(inputText.value);
//
// 	showArr(out, d1);
// };

// *	Task 2

// btn.onclick = () => {
// 	d1.pop();
// 	showArr(out, d1);
// };

// *	Task 3

// btn.onclick = () => {
// 	d1.shift();
// 	showArr(out, d1);
// };

// *	Task 4

// btn.onclick = () => {
// 	d1.push(inputText.value);
// 	inputText.value = '';
//
// 	showArr(out, d1);
// };

// *	Task 5

// btn.onclick = () => {
// 	d1.unshift(inputText.value);
// 	inputText.value = '';
//
// 	showArr(out, d1);
// };

// *	Task 6

// const d6 = ['test', 5, 12];
//
// btn.onclick = () =>{
// 	let length = d6.length;
// 	d6[length] = inputText.value;
// 	inputText.value = '';
//
// 	showArr(out, d6);
// };

// *	Task 7

// const d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
//
// btn.onclick = () => {
// 	let length = d7.length - 1;
// 	d7.splice(length, 1);
// 	showArr(out, d7);
// };

// *	Task 8

// let d8 = [2, '4', 12, 67, 'hello'];
//
// btn.onclick = () => {
// 	let a = [];
// 	a[0] = inputText.value;
// 	let count = 1;
// 	for (let i = 0; i < d8.length; i++) {
// 		a[count] = d8[i];
// 		count++;
// 	}
// 	showArr(out, a);
// };

// *	Task 9

// const d9 = [100, 200, 300, 400, 700, 121];
//
// btn.onclick = () => {
// 	d9.splice(0, 1);
// 	showArr(out, d9);
// };

// *	Task 10


// const d10 = [3, 14, 15, 92, 6];
//
// btn.onclick = () => {
// 	d10.reverse();
// 	showArr(out, d10);
// };

// *	Task 11

// const d11 = [2, 3, 4, 5, 6, 7];
//
// btn.onclick = () => {
// 	let num = +inputText.value;
// 	out.innerHTML = d11.indexOf(num);
// };

// *	Task 12

// const d12 = [6, 62, 60, 70, 1, 5];
//
// btn.onclick = () => {
// 	let str = '-1';
// 	let num = +inputText.value;
//
// 	for (let i = 0; i < d12.length; i++) {
// 		if(num === d12[i]) {
// 			str = i;
// 		}
// 	}
//
// 	out.innerHTML = str;
// };


// *	Task 13

// const d13 = [6, 0, 22, 1, 4, 76];
// const arr = [];
//
// btn.onclick = () => {
// 	for (let i = d13.length - 1; i > -1; i--) {
// 		arr.push(d13[i]);
// 	}
//
// 	out.innerHTML = arr;
// };

// *	Task 14

// const d14 = [];
//
// btn.onclick = () => {
// 	let val = +inputText.value;
//
// 	for (let i = 1; i <= val; i++) {
// 		d14.push(1);
// 	}
// 	out.innerHTML = d14;
// 	console.log(d14);
// };

// *	Task 15

// const d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
//
// btn.onclick = () => {
// 	let val = +inputText.value;
// 	if (d15.indexOf(val) === -1) {
// 		d15.push(val);
// 	}
//
// 	out.innerHTML = d15;
// };

// *	Task 16

// let d16 = [];
// let d161 = [5, 6, 7, 8, 9];
// let d162 = [23, 24, 56, 87];
//
// d16 = d161.concat(d162);
// out.innerHTML = d16;

// *	Task 17

// let d17 = [];
// const d171 = ['a', 'b', 'c', 'd'];
// const d172 = [1, 2, 3, 4, 5];
//
// btn.onclick = () => {
// 	d17 = d171;
// 	for (let i = 0; i < d172.length; i++) {
// 		d17.push(d172[i]);
// 	}
// 	out.innerHTML = d17;
// };

// *	Task 18

// const d18 = ['b', 'c', '45', 'e', 'z', 'y'];
//
// btn.onclick = () => {
// 	let val = inputText.value;
//
// 	out.innerHTML = d18.includes(val);
// };

// *	Task 19

// const d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
//
// btn.onclick = () => {
// 	let max = 0;
// 	for (let i = 0; i < d19.length; i++) {
// 		if (max < d19[i].length) {
// 			max = d19[i].length;
// 		}
// 	}
// 	out.innerHTML = max;
// };

// *	Task 20

// const  d20 = [4,5,6,7,8,9,10]
//
// out.innerHTML = d20.join('');