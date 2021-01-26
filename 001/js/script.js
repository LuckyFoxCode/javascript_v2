'use strict';

const btn = document.querySelector('.btn_one'),
  inputCheck = document.querySelector('#check'),
  inputPass = document.querySelector('#pass'),
  inputOne = document.querySelector('#text-one'),
  inputText = document.querySelector('#text'),
  select = document.querySelector('#select'),
  out = document.querySelector('.out'),
  outSecond = document.querySelector('.out-second'),
  form = document.querySelector('.form');

btn.addEventListener('click', () => {
  inputText.innerHTML = inputOne.value;
  out.innerHTML = inputText.value;
  console.log(inputOne.value);
});

select.addEventListener('change', () => {
  inputOne.value = select.value;
});

btn.addEventListener('click', (event) => {
  event.preventDefault();
  outSecond.innerHTML = `${inputOne.value} ${inputPass.value}`;
});
