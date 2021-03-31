'use strict';
/*
 ! Lessons:
 + Array
*/

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');

// let a = [4, 5, 6];
// let b = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
//
// console.log(b);

// let str = '';
// for (let i = 0; i < b.length; i++) {
// 	// console.log(b[i]);
// 	for (let k =0; k<b[i].length;k++) {
// 		console.log(b[i][k]);
// 		str += b[i][k] + ' ';
// 	}
// 	str += '<br>';
// }
// out.innerHTML = str;

// let str = '';
// for (let i = 0; i < b.length; i++) {
// 	for (let k = 0; k < b[i].length; k++) {
// 		if (b[i][k] > 4) {
// 			str += b[i][k] + ' ';
// 		}
// 	}
// 	str += '<br>';
// }
// out.innerHTML = str;

// let c = [1, 0, 0, 0, 0];
// let k = 0;
//
// btn.onclick = () => {
// 	if (k + 1 < 5) {
// 		c[k] = 0;
// 		c[k + 1] = 1;
// 		k++;
// 	}
// 	out.innerHTML = c;
// };

/*
 ! Home task
*/

// *	Task 1

// const a1 = [12, [45, 87], [55, 13]];
//
// function f1() {
// 	let str = a1[2][0];
// 	return out.innerHTML = str;
// }
//
// btn.onclick = f1;

// *	Task 2

// const a2 = [[12, 'hi'], [45, 87], [55, 13]];
//
// function f2() {
// 	let str = a2[0][1];
// 	return out.innerHTML = str;
// }
//
// btn.onclick = f2;

// *	Task 3

// const a3 = [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];
//
// function f3() {
// 	let str = a3[2][1][1];
// 	return out.innerHTML = str;
// }
// btn.onclick = f3;

// *	Task 4

// const a4 = [[1, 2, 3], 'go', [3, 4, 5], [6, [7, 'my']]];
//
// function f4() {
// 	let str = a4[1];
//
// 	return out.innerHTML = str;
// }
//
// btn.onclick = f4;

// *	Task 5

// const a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
//
// function f5() {
// 	let str = '';
//
// 	let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
// 	for (let i = 0; i < a5.length; i++) {
// 		if (a5[i][0] % 2 === 0) {
// 			str += a5[i][0] + ' ';
// 		} else if (a5[i][1] % 2 === 0) {
// 			str += a5[i][1] + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f5;

// *	Task 6

// const a6 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
//
// function f6() {
// 	let str = '';
//
// 	let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
// 	for (let i = 0; i < a5.length; i++) {
// 		if (a5[i][0] % 2 !== 0) {
// 			str += a5[i][0] + ' ';
// 		} else if (a5[i][1] % 2 !== 0) {
// 			str += a5[i][1] + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f6;

// *	Task 7

// const a7 = [
// 	[1, 2, 3, 9],
// 	[3, 4, 7],
// 	[5, 6, 8, 32],
// 	[21, 34, 43],
// 	[44, 56]
// ];
//
// function f7() {
// 	let str = '';
//
// 	for (let i = 0; i < a7.length; i++) {
// 		for (let k = 0; k < a7[i].length; k++) {
// 			if (a7[i][k] % 2 ===0) {
// 				str +=a7[i][k] + ' ';
// 			}
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f7;

// *	Task 8

// const a8 = [
// 	[1, 2, 3, 9],
// 	[3, 4, 7],
// 	[5, 6, 8, 32],
// 	[21, 34, 43],
// 	[44, 56]
// ];
//
// function f8() {
// 	let str = '';
//
// 	for (let i = 0; i < a8.length; i++) {
// 		for (let k = 0; k < a8[i].length; k++) {
// 			if (a8[i][k] % 2 !== 0) {
// 				str += a8[i][k] + ' ';
// 			}
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f8;

// *	Task 9

// const a9 = [
// 	[-2, 7, -3],
// 	[3, 4, -7],
// 	[-5, 6, -8, 32],
// 	[21, -34, -43],
// 	[44, -56]
// ];
//
// function f9() {
// 	let str = '';
//
// 	for (let i = 0; i < a9.length; i++) {
// 		for (let k = 0; k < a9[i].length; k++) {
// 			if (a9[i][k] > 0) {
// 				str += a9[i][k] + ' ';
// 			}
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f9;

// *	Task 10

// const a10 = [
// 	[-2, '7', -3],
// 	[3, 4, -7],
// 	[-5, 6, -8, 32, 'a'],
// 	['st', 21, -34, -43],
// 	[44, -56, 'task']
// ];
//
// function f10() {
// 	let str = '';
//
// 	for (let i = 0; i < a10.length; i++) {
// 		for (let k = 0; k < a10[i].length; k++) {
// 			if (typeof (a10[i][k]) === 'string') {
// 				str += a10[i][k] + ' ';
// 			}
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f10;

// *	Task 11

// const a11 = [
// 	[4, 5, 6],
// 	[7, 8],
// 	[9, 10, 11, 12, 13]
// ];
//
// function f11() {
// 	let str = '';
//
// 	for (let i = 0; i < a11.length; i++) {
// 		for (let k = a11[i].length -1; k >= 0; k--) {
// 			str += a11[i][k] + ' ';
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f11;

// *	Task 12

// const a12 = [
// 	[0, 1, 0, 1, 0, 1, 0, 1],
// 	[1, 0, 1, 0, 1, 0, 1, 0],
// 	[0, 1, 0, 1, 0, 1, 0, 1],
// 	[1, 0, 1, 0, 1, 0, 1, 0],
// 	[0, 1, 0, 1, 0, 1, 0, 1],
// 	[1, 0, 1, 0, 1, 0, 1, 0],
// 	[0, 1, 0, 1, 0, 1, 0, 1],
// 	[1, 0, 1, 0, 1, 0, 1, 0],
// ];
//
// function f12() {
// 	let str = '';
//
// 	for (let i = 0; i < a12.length; i++) {
// 		for (let k = 0; k< a12[i].length;k++) {
// 			if (a12[i][k] > 0) {
// 				str += a12[i][k] + ' ';
// 			}
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f12;

// *	Task 13

// const a13 = [];
//
// function f13() {
// 	let str = '';
//
// 	for (let i = 0; i < 6; i++) {
// 		if (i % 2 === 0) {
// 			for (let k = 0; k < 6; k++) {
// 				if (k % 2 === 0) {
// 					str += '1';
// 				} else if (k % 2 !== 0) {
// 					str += '0';
// 				}
// 			}
// 		} else {
// 			for (let k = 0; k < 6; k++) {
// 				if (k % 2 !== 0) {
// 					str += '1';
// 				} else if (k % 2 === 0) {
// 					str += '0';
// 				}
// 			}
// 		}
// 		str += '<br>';
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f13;

// *	Task 14

// const a14 = [
// 	[],
// 	[1, 0],
// 	[1, 0, 0, 0],
// 	[3, 4, 5, 6, 7, 8],
// 	[1, 2]
// ];
//
// function f14() {
// 	let str = '';
//
// 	for (let i = 0; i < a14.length; i++) {
// 		str += a14[i].length + ' ';
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f14;

// *	Task 15

// const a15 = [
// 	[],
// 	[1, 0],
// 	[1, 0, 0, 0],
// 	[3, 4, 5, 6, 7, 8],
// 	[1, 2]
// ];
//
// function f15() {
// 	let max = 0;
//
// 	for (let i = 0; i < a15.length; i++) {
// 		if (max < a15[i].length) {
// 			max = a15[i].length - 1;
// 		}
// 	}
// 	out.innerHTML = max;
// }
//
// btn.onclick = f15;

// *	Task 16

// const a16 = [
// 	[0,7,0,6],
// 	0,
// 	0,
// 	8
// ];
//
// console.group('Task 16 ================');
// console.log(a16[3] == 8);
// console.log(a16[0][1] == 7);
// console.log(a16[0][3] == 6);
//
// console.groupEnd();

// *	Task 17

// const a17 = [
// 	[1, 3, 6],
// 	[3, 7, 5],
// 	[],
// 	[3, 5, 8]
//
// ];
//
// console.group('Task 17 ================');
// console.log(a17[3][2] == 8);
// console.log(a17[1][1] == 7);
// console.log(a17[0][2] == 6);
//
// console.groupEnd();

// *	Task 18

// const a18 = [
// 	3,
// 	[3, 7, 5],
// 	[8,12],
// 	[3, 12, 8],
// 	[8]
//
// ];
//
// console.group('Task 18 ================');
// console.log(a18[0] == 3);
// console.log(a18[4][0] == 8);
// console.log(a18[2][1] == 12);

// *	Task 19

// const a19 = [
// 	[[0, 3]],
// 	[[2, 4, 8]],
// 	[[], [12]],
// ];
//
// console.group('Task 19 ================');
// console.log(a19[0][0][1] == 3);
// console.log(a19[1][0][2] == 8);
// console.log(a19[2][1][0] == 12);
//
// console.groupEnd();

// *	Task 20

// const a20 = [
// 	[],
// 	[[],[3,9]],
// 	[[],[],[18]],
// 	[12],
// ];
//
// console.group('Task 20 ================');
// console.log(a20[1][1][1] == 9);
// console.log(a20[2][2] == 18);
// console.log(a20[3] == 12);
//
// console.groupEnd();






