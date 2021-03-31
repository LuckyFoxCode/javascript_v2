'use strict';
/*
 ! Lessons:
 + while
 + do while
*/
// const out = document.querySelector('.out');
//
// for (let i = 0; i < 6; i++) {
// 	console.log(i);
// }
// let k = 0;
// while (k < 5) {
// 	console.log(k);
// 	k++;
// }
//
// let sum = 0;
// let p = 0;
// while (p <= 10) {
// 	sum += p;
// 	p++;
// }
// console.log('sum = ' + sum);
//
// let j = 0;
// let str = '';
// let flag = 3;
//
// while (j < 4) {
// 	let h = 0;
// 	while (h < 4) {
// 		if (h < flag) {
// 			str += '0';
// 		} else {
// 			str += '*';
// 		}
// 		h++;
// 	}
// 	flag--;
// 	str += '<br>';
// 	j++;
// }
// out.innerHTML = str;

/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const inNum = document.querySelector('.in-num');
const inNumOne = document.querySelector('.one');
const out = document.querySelector('.out');
const div = document.querySelectorAll('div');
const input = document.querySelectorAll('input');
const checkbox = document.querySelectorAll('input[type="checkbox"]');

// *	Task 1

// btn.onclick = () => {
// 	let num = 1;
// 	let str = '';
//
// 	while (num <= 50) {
// 		str += ' ' + num;
// 		num++;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 2

// btn.onclick = () => {
// 	let num = 2;
// 	let str = '';
//
// 	while (num <= 122) {
// 		if (num % 2 === 0) {
// 			str += num + ' ';
// 		}
// 		num++;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 3

// btn.onclick = () => {
// 	let num = 25;
// 	let str = '';
//
// 	while (num >= 7) {
// 		str += num + ' ';
// 		num--;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 4

// btn.onclick = () => {
// 	let num = 77;
// 	let str = '';
//
// 	while (num >= 35) {
// 		str += `${num}_`;
// 		num = num-3;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 5

// btn.onclick = () => {
// 	let num = 1;
// 	let str = '';
//
// 	while (num <= 17) {
// 		if (num % 2 === 0) {
// 			str += `${num}_** `;
// 		} else {
// 			str += `${num}_* `;
// 		}
// 		num++;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 6

// btn.onclick = () => {
// 	let value = +inNum.value;
// 	let num = 0;
// 	let str = '';
//
// 	while (num < value) {
// 		str += '****** <br>';
// 		num++;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 7

// btn.onclick = () => {
// 	let value = +inNum.value;
// 	let num = 0;
// 	let str = '';
//
// 	while (value >= num) {
// 		str += `${value} `;
// 		value--;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 8

// btn.onclick = () => {
// 	let vOne = +inNum.value;
// 	let vTwo = +inNumOne.value;
// 	let str = '';
//
// 	while (vOne <= vTwo) {
// 		str += `${vOne} `;
// 		vOne++;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 9

// btn.onclick = () => {
// 	let vOne = +inNum.value;
// 	let vTwo = +inNumOne.value;
// 	let str = '';
//
// 	if (vOne < vTwo) {
// 		while (vOne <= vTwo) {
// 			str += `${vOne} `;
// 			vOne++;
// 		}
// 	} else {
// 		while (vTwo <= vOne) {
// 			str += `${vTwo} `;
// 			vTwo++;
// 		}
// 	}
// 	out.innerHTML = str;
// };

// *	Task 10

// btn.onclick = () => {
// 	let year = 1950;
// 	let maxYear = 2000;
// 	let str = '';
//
// 	while (year <= maxYear) {
// 		if (year % 2 === 0) {
// 			str += `${year} `;
// 		}
// 		year++;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 11

// btn.onclick = () => {
// 	let num = 0;
// 	let str = '';
// 	while (num < div.length) {
// 		str += `** ${div[num].textContent} `;
// 		num++;
// 	}
//
// 	out.innerHTML = str;
// };

// *	Task 12

// btn.onclick = () => {
// 	let num = 0;
//
// 	while (num < div.length) {
// 		div[num].style.background = 'orange';
// 		num++;
// 	}
// };

// *	Task 13

// btn.onclick = () => {
// 	let num = 0;
//
// 	while (num < input.length) {
// 		input[num].value = `${num + 1}`;
// 		num++;
// 	}
// };

// *	Task 14

// btn.onclick = () => {
// 	let num = 0;
// 	let str = '';
//
// 	while (num < checkbox.length) {
// 		if (checkbox[num].checked) {
// 			str += `${checkbox[num].value}`;
// 		}
// 		num++;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 15

btn.onclick = () => {
	let num = 10;
	let n = 0;
	let str = '';

	while (num >= 0) {
		str += `${num} ${n} `;
		num--;
		n++;
	}
	out.innerHTML = str;
};







