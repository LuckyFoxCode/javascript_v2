'use strict';

const out = document.querySelector('.out'),
      btn = document.querySelector('.btn');

function f1() {
  out.style.width = '200px';
  out.style.height = '40px';
}

btn.addEventListener('click', () => {
  out.classList.toggle('bg');
  if (out.classList === 'bg') {
    console.log('true');
  } else {
    console.log('false');
  }
});
