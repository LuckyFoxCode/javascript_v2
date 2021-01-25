'use strict';

let one = document.querySelector('#one'),
  two = document.querySelector('#two'),
  divOne = document.querySelector('.one'),
  span = document.querySelector('span'),
  three = document.querySelector('.three'),
  four = document.querySelector('.four'),
  a = document.querySelector('.five'),
  div7 = document.querySelector('.seven'),
  six = document.querySelector('.six'),
  sixOne = document.querySelector('.sixOne'),
  z1 = 6,
  z2 = 3,
  text = document.querySelector('.text'),
  x1 = 'Hello',
  x2 = 5;

one = one.innerHTML = 'Hello world';
two = 12 * 12;
divOne = divOne.innerHTML = 'Hello world';
span = span.innerHTML = 'world';
three = three.innerHTML = '<h3>lorem lorem</h3>';
four = four.innerHTML = '<h4>Hello title</h4><p>Hello text</p>';
a = 3.1415;
div7 = div7.innerHTML = `<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-48.png" alt="">`;
six = six.innerHTML = z1 * z2;
sixOne = sixOne.innerHTML = z1 / z2;
text = text.innerHTML = x1 + x2;

console.log(two);
console.log(a);
