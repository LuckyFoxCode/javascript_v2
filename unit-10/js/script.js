'use strict';
/*
 ! Lessons:
 + Array
*/

/*
const btn = document.querySelector('.btn');
const out = document.querySelector('.out');

const array = ['ivan', 37, 'libra'];
const arrayEmpty = [];
const zodiak = ['Козерог', 1, 1, 19];
const man = ['Ivan', 'male', 176, 93];
const a = [1, 2, 3, 4];
let t = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = t;

console.log(array[0]);
console.log(array);
console.log(array.length);
console.log(zodiak);
console.log(man);
console.log(a);

let str = ' ';
for (let i = 0; i < a.length; i++) {
	if (a[i] % 2 === 0) {
		str += a[i] + ' ';
	}
}

out.innerHTML = str;

const b = [1,4,7,4,8,2,4,9,563,234,998,5,2434,765,4,];

let max = b[0];

for (let i = 0; i < b.length; i++) {
	if (b[i] > max) {
		max = b[i];
	}
}

console.log(max);
let sum = 0;
for (let i = 0; i < b.length; i++) {
	sum += b[i];
}
console.log(sum);
 */

/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const out = document.querySelector('.out');

// *	Task 1 && Task 2

// const arr1 = ['string', 13, true, false,];
//
// btn.onclick = () => {
// 	out.innerHTML = arr1;
// };

// *	Task 3

// const arr = [1,2,3,4,5,6,7,9,3,4,4,'a'];
//
// console.log(arr.length);

// *	Task 4

// const arr = [1,2,3,4,5,6,7,9,3,4,4,'a'];

// btn.onclick = () => {
// 	let str = '';
// 	str += `${arr[0]}, ${arr[3]}, ${arr[8]}`;
//
// 	out.innerHTML = str;
// };

// *	Task 5

// const arr = [3,6,5,8,4,8,4,2];
// let sum = '';
//
// sum += `${arr[0] + arr[2] + arr[3]}`;
// console.log(sum);

// *	Task 6

// const person = ['Serhii', 'libra', '18', '10'];
// let str = '';
// for (let i = 0; i < person.length; i++) {
// 	str += person[i] + ' ';
// }
//
// out.innerHTML = str;

// *	Task 7

// const ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
//
// btn.onclick = () => {
// 	ar7[7] = 'vietnam';
// 	ar7[6] = 'turkey';
// 	ar7[5] = 'italy';
//
// 	let str = '';
// 	for (let i = 0; i < ar7.length; i++) {
// 		str += ar7[i] + ' ';
// 	}
//
// 	out.innerHTML = str;
// };

// *	Task 8

// const arr = [5,2,7,3.14,17,1,5];
//
// let str = '';
// for (let i = 0; i < arr.length; i++) {
// 	str += arr[i] + '-';
// }
//
// out.innerHTML = `${str} <br> Длинна массива: ${arr.length}`;

// *	Task 9

// const ar9 = [100, 200, 300, 400, 700, 121];
//
// let str = '';
// str += ar9.length - 1;
//
// out.innerHTML = ar9[str];

// *	Task 10

// const ar10 = [100, 200, 300, 400, 700, 121];
//
// let one = ar10[0];
// let last = ar10.length - 1;
//
// let sum = one + ar10[last];
//
// out.innerHTML = sum;

// *	Task 11

// const ar11 = [2, 3, 4, 5, 6, 7];
//
// btn.onclick = () => {
// 	let a = ar11[2];
// 	let b = ar11[4];
//
// 	ar11[2] = b;
// 	ar11[4] = a;
// 	let str = '';
// 	for (let i = 0; i < ar11.length; i++) {
// 		str += ar11[i] + ' ';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 12

// const ar12 = ['test', 'west', 'list', 'class', 'best'];
//
// btn.onclick = () => {
// 	let one = ar12[0];
// 	ar12[0] = ar12[ar12.length - 1];
// 	ar12[ar12.length - 1] = one;
// 	console.log(ar12);
//
// 	let str = '';
// 	for (let i=0;i<ar12.length;i++) {
// 		str += ar12[i] + ' ';
// 	}
// 	out.innerHTML = str;
// };

// *	Task 13


// const ar13 = ['test', 'west', 'list', 'class', 'best'];
// let str = '';
// for (let i = 0; i < ar13.length; i++) {
// 	str += `${i} ${ar13[i]} `;
// }
// out.innerHTML = str;

// *	Task 14

// const ar14 = [1, 2, 3, 'hello', 66];
//
// let str = '';
// for (let i = ar14.length - 1; i >= 0; i--) {
// 	str += ar14[i] + ' ';
// }
// out.innerHTML = str;

// *	Task 15

// const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
//
// let str = '';
// for (let i = 0; i < ar15.length; i++) {
// 	if (ar15[i] > 0) {
// 		str += ar15[i] + ' ';
// 	}
// }
// out.innerHTML = str;

// *	Task 16

// const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let ar16_odd = [];
// let ar16_even = [];
//
// let strOne = '';
// let strTwo = '';
// for (let i = 0; i < ar16.length; i++) {
// 	if (ar16[i] % 2 === 0) {
// 		strOne += ar16[i] + ' ';
// 		ar16_even = strOne;
// 		// ar16_even = ar16[i];
// 	} else {
// 		strTwo += ar16[i] + ' ';
// 		ar16_odd = strTwo;
// 	}
// }
//
// out.innerHTML = `Четные: ${ar16_even}<br> Не четные: ${ar16_odd}`;

// *	Task 17

// const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
//
// let num = 0;
// for (let i = 0; i < ar17.length; i++) {
// 	if (ar17[i] > 3) {
// 		num++;
// 	}
// }
// out.innerHTML = num;

// *	Task 18

// const ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
//
// let max = ar18[0];
// for (let i = 0; i < ar18.length; i++) {
// 	if (ar18[i] > max) {
// 		max = ar18[i];
// 	}
// }
// out.innerHTML = max;

// *	Task 19

// const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
//
// let min = ar19[0];
// for (let i = 0; i < ar19.length; i++) {
// 	if (ar19[i] < min) {
// 		min = ar19[i];
// 	}
// }
// out.innerHTML = min;

// *	Task 20

const ar20 =  [4,5,6,7,8,9,10];

let sum = 0;
for (let i = 0; i<ar20.length; i++) {
	sum += ar20[i];
}
out.innerHTML = sum;

