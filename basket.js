'use strict';

const basketCounterEl = document.querySelector('.five');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');
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
    basketCounterEl.textContent = getTotalBasketCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductInBasket(id);
}

function getTotalBasketCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

function getTotalBasketPrice() {
    return Object.values(basket)
        .reduce((acc, product) => acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-productId="${id}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(id);
        return
    }

    basketRowEl.querySelector('.productCount').textContent = basket[id].count;
    basketRowEl.querySelector('.productTotalRow')
        .textContent = basket[id].count * basket[id].price;
}

function renderNewProductInBasket(productId) {
    const productRow = `
        <div class="basketRow" data-productId="${productId}">
            <div>${basket[productId].name}</div>
            <div>
                <span class="productCount">${basket[productId].count}</span> шт.
            </div>
            <div>$${basket[productId].price}</div>
            <div>
                $<span class="productTotalRow">${basket[productId].price * basket[productId].count}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}