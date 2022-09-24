'use strict';

const basketCounterEl = document.querySelector('.five');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketEl = document.querySelector('.basket');

document.querySelector('.header-basket').addEventListener('click', () => {
    basketEl.classList.toggle('hidden');
});

const basket = {};

document.querySelector('.products-list').addEventListener('click', event => {
    if (!event.target.closest('.products-item-btn')) {
        return;
    }
    const productsItem = event.target.closest('.products-item');
    const id = +productsItem.dataset.id;
    const name = productsItem.dataset.name;
    const price = +productsItem.dataset.price;
    console.log(id, name, price);
    addToCart(id, name, price);
});

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = { id, name, price, count: 0 };
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBaskeCount().toString();
}

function getTotalBaskeCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}
