'use strict';
/*
 ! Lessons:
 + DOM
*/

/*
const p = document.querySelector('.one');
const btn = document.querySelector('.btn');

const gas = document.querySelectorAll('.gas');


p.style.color = 'crimson';
p.style.fontWeight = 'bold';

p.classList.add('orange');
p.classList.remove('orange');

btn.onclick = () => {
	p.classList.toggle('orange');
};

// + Атрибуты data

console.log(p.getAttribute('data'));

p.setAttribute('data-num', 6);

for (let i = 0; i < gas.length; i++) {
	gas[i].onclick = function () {
		let gallons = document.querySelector('.gallons').value;
		let amount = this.getAttribute('data');
		console.log(gallons * amount);
	};
}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('orange');
a.onclick = function () {
	console.log('hello a');
};

document.querySelector('.test').appendChild(a);

console.log(a);
 */

/*
 ! Home task
*/

const btn = document.querySelector('.btn');
const out = document.querySelector('.out');

// *	Task 1

// btn.onclick = () => {
// 	out.style.width = '200px';
// 	out.style.height = '40px';
// };

// *	Task 2

// btn.onclick = () => {
// 	out.classList.add('bg-2');
// };

// *	Task 3

// btn.onclick = () => {
// 	out.classList.remove('bg-2');
// };

// *	Task 4

// btn.onclick = () => {
// 	out.classList.toggle('bg-2');
// };

// *	Task 5

// btn.onclick = () => {
// 	let p = document.querySelector('p');
//
// 	if (p.classList.value === 'bg-4' ) {
// 		out.innerHTML = 'true';
// 	} else {
// 		out.innerHTML = 'false';
// 	}
// };

// *	Task 6

// btn.onclick = () => {
// 	let p = document.querySelectorAll('.bg-4');
// 	let str = '';
//
// 	for (let i = 0; i < p.length; i++) {
// 	str += i;
// 	}
//
// 	out.innerHTML = str.length;
// };

// *	Task 7

// btn.onclick = () => {
// 	let p = document.querySelectorAll('.bg-4');
//
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].classList.add('orange');
// 	}
// };

// *	Task 8

// btn.onclick = () => {
// 	let p = document.querySelectorAll('.bg-4');
//
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].classList.toggle('orange');
// 	}
// };

// *	Task 9

// let p = document.querySelectorAll('.bg-4');
//
// for (let i = 0; i < p.length; i++) {
// 	p[i].onclick = () => {
// 		p[i].classList.add('orange');
// 	};
// }

// *	Task 10

// let p = document.querySelectorAll('.bg-4');
//
// for (let i = 0; i < p.length; i++) {
// 	p[i].onclick = () => {
// 		p[i].classList.toggle('orange');
// 	};
// }

// *	Task 11

// btn.onclick = () => {
// 	let div = document.createElement('div');
// 	div.innerHTML = '25';
//
// 	out.appendChild(div);
// };

// *	Task 12

// btn.onclick = () => {
// 	let div = document.createElement('div');
// 	div.innerHTML = '13';
// 	div.classList.add('orange');
//
// 	out.appendChild(div);
// };

// *	Task 13

// btn.onclick = () => {
// 	const div = document.createElement('div');
// 	div.innerHTML = 'Push me...';
// 	div.classList.add('orange');
// 	div.style.cursor = 'pointer';
// 	div.onclick = () => {
// 		console.log('Some text...');
// 	};
// 	out.appendChild(div);
// };

// *	Task 14

// btn.onclick = () => {
// 	const div = document.createElement('div');
// 	div.innerHTML = '14';
// 	div.classList.add('orange');
//
// 	out.prepend(div);
// };

// *	Task 15

// btn.onclick = () => {
// 	const div = document.createElement('div');
// 	div.innerHTML = '15';
// 	div.classList.add('orange');
//
// 	out.before(div);
// };

// *	Task 16

// btn.onclick = () => {
// 	const div = document.createElement('div');
// 	div.innerHTML = '16';
// 	div.classList.add('orange');
//
// 	out.after(div);
// };

// *	Task 17

// btn.onclick = () => {
// 	const div = document.createElement('div');
// 	div.innerHTML = '17';
// 	div.classList.add('orange');
//
// 	out.replaceWith(div);
// };

// *	Task 18

// btn.onclick = () => {
// 	let p = document.querySelector('p');
// 	p = p.getAttribute('data');
//
// 	out.innerHTML = p;
// };

// *	Task 19

// btn.onclick = () => {
// 	const p = document.querySelectorAll('p[data]');
// 	let str = '';
//
// 	for (let i = 0; i < p.length; i++) {
// 		// console.log(p[i].getAttribute('data'));
// 		str += `${p[i].getAttribute('data')} `;
// 	}
// 	out.innerHTML = str;
// };

// *	Task 20

// btn.onclick = () => {
// 	out.setAttribute('title', 'go');
// };
















