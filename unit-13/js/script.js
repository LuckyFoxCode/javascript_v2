'use strict';
/*
 ! Lessons:
 + Object
*/

/*
const out = document.querySelector('.out');

const a = {
	a: 5,
	b: 'hello',
	z2: 'hi',
};

console.log(a);
console.log(a.z2);

let str = '';
for (let key in a) {
	str += key + ': ' + a[key] + '<br>';
}

out.innerHTML = str;
 */

/*
 ! Home task
*/

const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
let inOne = document.querySelector('.in-one');
let inTwo = document.querySelector('.in-two');

// *	Task 1

// const a1 = {
// 	"one" : 15,
// 	"two" : 16,
// 	"five" : 20
// };
//
// function f1() {
// 	let str = '';
//
// 	str += a1["two"];
//
// 	out.innerHTML = str;
// }
//
// btn.onclick = f1;

// *	Task 2

// const a2 = {
// 	"one" : "hello",
// 	"two" : "mahai",
// 	"five" : "hi"
// };
//
// function f2() {
// 	let str = '';
//
// 	str += a2["five"];
//
// 	out.innerHTML = str;
// }
//
// btn.onclick = f2;

// *	Task 3

// const a3 = {
// 	"one": "hello",
// 	"two": "mahai",
// 	"five": "hi",
// 	"test": 21,
// 	"odd": "hi",
// 	"mix": "mix"
// };
//
// function f3() {
// 	let str = '';
//
// 	for (let key in a3) {
// 		if (a3[key] === "hi") {
// 			str += a3[key] + ' ';
// 		}
// 	}
//
// 	out.innerHTML = str;
// }
//
// btn.onclick = f3;

// *	Task 4


// const a4 = {
// 	"one": "hello",
// 	"two": "mahai",
// 	"five": "hi",
// 	"test": 21,
// 	"odd": "hi",
// 	"mix": "mix"
// };
//
// function f4() {
// 	let str = '';
//
// 	for (let key in a4) {
// 		str += `${key} ${a4[key]} <br>`;
// 	}
//
// 	out.innerHTML = str;
// }
//
// btn.onclick = f4;

// *	Task 5

// function f5(arr, block) {
// 	let str = '';
//
// 	for (let key in arr) {
// 		str += `${key}: ${arr[key]} <br>`;
// 	}
// 	block.innerHTML = str;
// }
//
// btn.onclick = () => {
// 	const a5 = {
// 		"one": 1,
// 		"two": 2
// 	};
//
// 	f5(a5, out);
// };

// *	Task 6

// const a6 = {
// 	"b": 17,
// 	"e": 22
// };
//
// function f6() {
// 	let str = '';
// 	let valOne = inOne.value;
// 	let valTwo = inTwo.value;
//
// 	a6[valOne] = valTwo;
//
// 	for (let key in a6) {
// 		str += `${key}: ${a6[key]} <br>`;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f6;

// *	Task 7

// const a7 = {
// 	"b": 17,
// 	"e": 22
// };
//
// function f7() {
// 	let str = '';
// 	let val = inOne.value;
//
// 	for (let key in a7) {
// 		if (key === val) {
// 			str = '1';
// 		} else {
// 			str = '0';
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f7;

// *	Task 8

// const a8 = {
// 	"b": 17,
// 	"e": 22
// };
//
// function f8() {
// 	let str = '';
// 	let val = inOne.value;
//
// 	for (let key in a8) {
// 		if (key === val) {
// 			str = val;
// 		} else {
// 			str = 0;
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f8;

// *	Task 9

// const a9 = {
// 	"b": 17,
// 	"e": 22,
// 	"j": 17,
// 	"k": 22,
// 	"d": 54
// };
//
// function f9() {
// 	let str = '';
// 	let val = +inOne.value;
//
// 	for (let key in a9) {
// 		if (a9[key] === val) {
// 			str += key + ' ';
// 		} else {
// 			str += '';
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f9;

// *	Task 10

// const a10 = {
// 	"k": 22,
// 	"d": 54,
// 	"m": 22,
// };
//
// function f10(arr, out) {
//
// 	for (let key in arr) {
// 		if (arr[key] === out) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }
//
// btn.onclick = () => {
// 	out.innerHTML = f10(a10, 22);
// };

// *	Task 11

// const a11 = {
// 	"b": 17,
// 	"e": 22,
// 	"j": 17,
// 	"k": 22,
// 	"d": 54
// };
//
// function f11() {
// 	let str = '';
// 	let val = inOne.value;
//
// 	for (let key in a11) {
// 		if (key === val) {
// 			delete a11[key];
// 			console.log(a11);
// 		}
// 		str += `${key}: ${a11[key]} <br>`;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f11;

// *	Task 12

// const a12 = {
// 	"b": 17,
// 	"e": 22,
// 	"j": 17,
// 	"k": 22,
// 	"d": 17,
// };
//
// function f12() {
// 	let str = '';
// 	let val = +inOne.value;
//
// 	for (let key in a12) {
// 		if (a12[key] === val) {
// 			delete a12[key];
// 		}
// 	}
//
// 	for (let key in a12) {
// 		str += `${key}: ${a12[key]} <br>`;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f12;

// *	Task 13

// const a13 = {
// 	'prim': 'hello',
// 	'one': 4,
// 	'testt': 'vodoley',
// 	'ivan': 6
// };
//
// function f13() {
// 	let sum = 0;
//
// 	for (let key in a13) {
// 		if (typeof(a13[key]) === "number") {
// 			sum += a13[key];
// 		}
// 	}
// 	out.innerHTML = sum;
// }
//
// btn.onclick = f13;

// *	Task 14

// const a14 = {
// 	'prim': [1, 2, 23],
// 	'one': [3, 4, 5],
// 	'testt': [6, 7, 8],
// 	'ivan': [9, 10]
// };
//
// function f14() {
// 	let str = '';
//
// 	for (let key in a14) {
// 		str += `${a14[key][0]} `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f14;

// *	Task 15

// const a15 = {
// 	'prim': [1, 2, 23],
// 	'one': [3, 5],
// 	'testt': [6, 7, 8],
// 	'ivan': [9, 10]
// };
//
// function f15() {
// 	let str ='';
//
// 	for (let key in a15) {
// 		str += `${a15[key]} <br> `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f15;

// *	Task 16

// const a16 = {
// 	"iis8sj": {
// 		"name": "Ivan",
// 		"age": 27,
// 	},
// 	"iiss7j": {
// 		"name": "Petr",
// 		"age": 26,
// 	},
// 	"s3s8sj": {
// 		"name": "Serg",
// 		"age": 47,
// 	},
// };
//
// function f16() {
// 	let str ='';
//
// 	for (let key in a16) {
// 		str += `${a16[key]["name"]} `;
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f16;

// *	Task 17

// const a17 = {
// 	"iis8sj": {
// 		"name": "Ivan",
// 		"age": 27,
// 	},
// 	"iiss7j": {
// 		"name": "Petr",
// 		"age": 26,
// 	},
// 	"s3s8sj": {
// 		"name": "Serg",
// 		"age": 47,
// 	},
// };
//
// function f17() {
// 	let str = '';
//
// 	for (let key in a17) {
// 		if (a17[key]["age"] > 30) {
// 			str += `${a17[key]["name"]} `;
// 			console.log(str);
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f17;

// *	Task 18

// const a18 = {
// 	"red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
// 	"blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
// 	"green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
// };
//
// function f18() {
// 	let str ='';
// 	let station = inOne.value;
//
// 	for (let key in a18) {
// 		if (key === station) {
// 			str += `${a18[key]}`;
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f18;

// *	Task 19

// const a19 = {
// 	"red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
// 	"blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
// 	"green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
// };
//
// function f19() {
// 	let str = '';
// 	let val = inOne.value.toLowerCase();
//
// 	for (let key in a19) {
// 		if (key === val) {
// 			str = val;
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f19;

// *	Task 20

// const a20 = {
// 	"red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
// 	"blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
// 	"green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
// };
//
// function f20() {
// 	let str = '';
//
// 	for (let key in a20) {
// 		for (let a in a20[key]) {
// 			if (a20[key][a][1] === 2) {
// 				str += key + ' ' ;
// 			}
// 		}
// 	}
// 	out.innerHTML = str;
// }
//
// btn.onclick = f20;























