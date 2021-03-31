'use strict';
/*
 ! Lessons:
 + Set
*/

/*
const out = document.querySelector('.out');
const btn = document.querySelector('.btn');

const a = new Set();
a.add(5);
a.add(13);
a.add('set');
a.add('5');
a.delete('hello');

console.log(a);
console.log(a[0]);
console.log(a.size);
console.log(a.has('2'));
console.log(a.has(5));

console.log('for of ');
for (let item of a) {
	console.log(item);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 2, 5, 7, 3, 2];

let b = new Set(array);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);
 */

/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const inOne = document.querySelector('.in-one');
const inTwo = document.querySelector('.in-two');
const out = document.querySelector('.out');

// *	Task 1

// const s1 = new Set();
//
// s1.add('h');
// s1.add('b');
// s1.add('o');
// s1.add('h');
//
// console.log(s1);

// *	Task 2

// const s2 = new Set();
//
// function f2() {
// 	let val = inOne.value;
//
// 	s2.add(val);
// 	console.log(s2);
// 	inOne.value = '';
// }
//
// btn.onclick = f2;

// *	Task 3

// const s3 = new Set(['one', 'two', 'four']);
//
// function f3() {
// 	let val = inOne.value;
//
// 	s3.delete(val);
// 	console.log(s3);
// 	inOne.value = '';
// }
//
// btn.onclick = f3;

// *	Task 4

// const s4 = new Set(['a', 'b', 'c', 'z']);
//
// function f4() {
// 	let str = '';
// 	let val = inOne.value;
//
// 	console.log(s4.has(val));
// 	if (s4.has(val) === true) {
// 		str += 'true';
// 		inOne.value = '';
// 	} else {
// 		str += 'false';
// 		inOne.value = '';
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f4;

// *	Task 5

// const s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);
//
// function f5() {
// 	out.innerHTML = s5.size;
// }
//
// btn.onclick = f5;

// *	Task 6

// let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4,
// 5, 24, 5, 3, 22, 56];
//
// function f6() {
// 	let s6 = new Set();
// 	let str = '';
//
// 	for (let i = 0; i < a6.length; i++) {
// 		s6.add(a6[i]);
// 	}
// 	for (let item of s6) {
// 		str += item + ' ';
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f6;

// *	Task 7

// function f7() {
// 	let val = inTwo.value.split('');
// 	const s7 = new Set(val);
// 	let str = '';
//
// 	if (val.length > 6 && s7.size === val.length) {
// 		str += '1';
// 	} else {
// 		str += '0';
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f7;

// *	Task 8

// const s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335,
// 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
// const arr8 = [];
//
// function f8() {
// 	for (let item of s8) {
// 		if (item > 5) {
// 			arr8.push(item);
// 		}
// 	}
// 	console.log(arr8);
// }
//
// btn.onclick = f8;

// *	Task 9

// function f9(arr, block) {
// 	let str = '';
//
// 	for (let item of arr) {
// 		str += item + ' ';
// 	}
// 	block.innerHTML = str;
// }
//
// btn.onclick = () => {
// 	const arr9 = new Set([9, 8, 7, 6, 5]);
// 	f9(arr9, out);
// };

// *	Task 10

// function f10(arr, block) {
// 	let str = '';
//
// 	for (let item of arr) {
// 		str += item + ' ';
// 	}
// 	block.innerHTML = str;
// }
//
// btn.onclick = () => {
// 	const arr10 = new Set(['4', '5', '6']);
// 	f10(arr10, out);
// };

// *	Task 11

// const f11 = () => {
// 	let s = new Set();
// 	s.add([1,2]);
// 	s.add([1]);
// 	s.add([1]);
// 	s.add([1]);
// 	console.log(s);
// };
//
// btn.onclick = f11;

// *	Task 12

// const str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy' +
// 	' firesides but also of orphaned and starving children';
// let arrEmpty = [];
//
// function f12() {
// 	let arr = str12.split(' ');
// 	for (let i in arr) {
// 		arrEmpty.push(arr[i][0]);
// 	}
// 	console.log(arrEmpty);
// 	out.innerHTML = arrEmpty;
// }
//
// btn.onclick = f12;

// *	Task 13

// const str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy' +
// 	' firesides but also of orphaned and starving children';
//
// function f13() {
// 	let arr = str13.split('');
// 	let str = {};
// 	for (let i = 0; i < arr.length; i++) {
// 		let a = arr[i];
// 		if (str[a] !== undefined) {
// 			str[a]++;
// 		} else {
// 			str[a] = 0;
// 		}
// 	}
// 	for (let key in str) {
// 		console.log(`${key}: ${str[key]}`);
// 	}
// }
//
// btn.onclick = f13;

























