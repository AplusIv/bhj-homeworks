'use strict';

const products = document.querySelectorAll('.product');
console.log(products);

const cartProducts = document.querySelector('.cart__products');
console.log(cartProducts);

const cart = document.querySelector('.cart');

let localCartProducts;

for (let product of products) {
  product.addEventListener('click', chooseProduct);
}

cart.addEventListener('click', removeProduct);


window.addEventListener('load', () => {
  if (localStorage.getItem('localCartProductsList') === null) {
    return;
  }
  if (localStorage.getItem('localCartProductsList').trim().length !== 0) {
    cartProducts.insertAdjacentHTML('afterbegin', localStorage.getItem('localCartProductsList'));
    for (let cartProduct of cartProducts.children) {
      cartProduct.addEventListener('click', removeProduct);
    }
    cart.classList.remove('cart__hidden');
  } else {
    cart.classList.add('cart__hidden');
  }
});


function chooseProduct(event) {
  if (event.target.classList.contains('product__quantity-control_inc')) {
    this.querySelector('.product__quantity-value').innerText++;
  }
  if (event.target.classList.contains('product__quantity-control_dec')) {
    if (this.querySelector('.product__quantity-value').innerText > 1) {
      this.querySelector('.product__quantity-value').innerText--;
    }
  }
  if (event.target.classList.contains('product__add')) {
    if (![...cartProducts.querySelectorAll('.cart__product')].find(elem => elem.dataset.id === this.dataset.id)) {
      // Если продукта не было в корзине до этого момента
      cart.classList.remove('cart__hidden');
      cartProducts.insertAdjacentHTML('beforeend', `
      <div class="cart__product" data-id=${this.dataset.id}>
        <img class="cart__product-image" src=${this.querySelector('img').src}>
        <div class="cart__product-count">${this.querySelector('.product__quantity-value').innerText}</div>
        <div class="cart__product-remove">X</div>
      </div>`);
    } else {
      let cartProduct = [...cartProducts.querySelectorAll('.cart__product')].find(elem => elem.dataset.id === this.dataset.id);
      cartProduct.querySelector('.cart__product-count').innerText = Number(cartProduct.querySelector('.cart__product-count').innerText) + Number(this.querySelector('.product__quantity-value').innerText); // Привести количество продукта к числу и прибавить к количеству в корзине

      // Анимация товаров

      //console.log(` cart top ${cartProduct.getBoundingClientRect().top}`);
      //console.log(`cart left ${cartProduct.getBoundingClientRect().left}`);

      //console.log(`this top ${this.getBoundingClientRect().top}`);
      //console.log(`this left ${this.getBoundingClientRect().left}`);

      //let dx = `${cartProduct.getBoundingClientRect().left - this.getBoundingClientRect().left}px`;
      let dx = cartProduct.getBoundingClientRect().left - this.getBoundingClientRect().left;
      console.log(`dx ${dx}`);

      //let dy = `${this.getBoundingClientRect().top - cartProduct.getBoundingClientRect().top}px`; 
      let dy = this.getBoundingClientRect().top - cartProduct.getBoundingClientRect().top;
      console.log(`dy ${dy}`);

      let animationTopCoordinate = this.getBoundingClientRect().top;
      let animationLeftCoordinate = this.getBoundingClientRect().left;


      let animatedProductImage = this.querySelector('img').cloneNode(false);
      animatedProductImage.classList.add('animated-product-image');
      this.appendChild(animatedProductImage);


      /* Рабочий вариант через сетИнтервал
      let timerId = setInterval(function animateProduct() {
        animatedProductImage.style.top = `${animationTopCoordinate - dy / 5}px`;
        console.log(animatedProductImage.style.top);      

        animationTopCoordinate = Number(animatedProductImage.style.top.replace('px', ''));
        console.log(animationTopCoordinate);

        animatedProductImage.style.left = `${animationLeftCoordinate + dx / 5}px`;
        console.log(animatedProductImage.style.left);

        animationLeftCoordinate = Number(animatedProductImage.style.left.replace('px', ''));
        console.log(animationLeftCoordinate);
      }, 10);
      
      setTimeout(() => {
        clearInterval(timerId);
        animatedProductImage.remove();
      }, 50);
      */

      // Вариант через рекурсивный сетТаймаут 
      let timerId = setTimeout(function animateProduct() {
        animatedProductImage.style.top = `${animationTopCoordinate - dy / 5}px`;
        console.log(animatedProductImage.style.top);

        animationTopCoordinate = Number(animatedProductImage.style.top.replace('px', ''));
        console.log(animationTopCoordinate);

        animatedProductImage.style.left = `${animationLeftCoordinate + dx / 5}px`;
        console.log(animatedProductImage.style.left);

        animationLeftCoordinate = Number(animatedProductImage.style.left.replace('px', ''));
        console.log(animationLeftCoordinate);

        timerId = setTimeout(animateProduct, 10);
      }, 10);

      setTimeout(() => {
        clearTimeout(timerId);
        animatedProductImage.remove();
      }, 50);
    }

    localCartProducts = cartProducts.innerHTML;
    //console.log(localCartProducts);
    localStorage.setItem('localCartProductsList', localCartProducts);
  }
}

function removeProduct(event) {
  if (event.target.classList.contains('cart__product-remove')) {
    event.target.parentElement.remove();
    let changedLocalCartProducts = localStorage.getItem('localCartProductsList').replace(event.target.parentElement.outerHTML, ''); // удаляю и перезаписываю Storage
    localStorage.setItem('localCartProductsList', changedLocalCartProducts);
    if (cartProducts.children.length === 0) {
      this.classList.add('cart__hidden');
    }
  }
}