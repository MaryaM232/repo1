'use strict';

const basketCountEl = document.querySelector('.five');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketEl = document.querySelector('.basket');

document.querySelector('.header-basket').addEventListener('click', () => {
    basketEl.classList.toggle('hidden');
});

const basket = {};

document.querySelector('.products-list').addEventListener('click', event => {
    if (!event.target.classList.contains('products-item-btn')) {
        return;
    }
    console.log(1230);
});