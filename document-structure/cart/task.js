'use strict';

const products = document.querySelectorAll('.product');
console.log(products);

const cartProducts = document.querySelector('.cart__products');
console.log(cartProducts);

const cart = document.querySelector('.cart');

let localCartProducts = [];

for (let product of products) {
  product.addEventListener('click', chooseProduct);
}

cart.addEventListener('click', removeProduct);

window.addEventListener('load', () => {
  if (localStorage.getItem('localCartProductsList') !== null) {
    cart.classList.remove('cart__hidden');    
    let storageArray = JSON.parse(localStorage.getItem('localCartProductsList'));
    for (let item of storageArray) {
      cartProducts.insertAdjacentHTML('beforeend', `
      <div class="cart__product" data-id=${item.id}>
        <img class="cart__product-image" src=${item.imgSrc}>
        <div class="cart__product-count">${item.quantity}</div>
        <div class="cart__product-remove">X</div>
      </div>`);
    };
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
      // Если продукт уже был в корзине
      let cartProduct = [...cartProducts.querySelectorAll('.cart__product')].find(elem => elem.dataset.id === this.dataset.id);
      cartProduct.querySelector('.cart__product-count').innerText = Number(cartProduct.querySelector('.cart__product-count').innerText) + Number(this.querySelector('.product__quantity-value').innerText); // Привести количество продукта к числу и прибавить к количеству в корзине
    
      // Анимация товаров

      //console.log(` cart top ${cartProduct.getBoundingClientRect().top}`);
      //console.log(`cart left ${cartProduct.getBoundingClientRect().left}`);
      //console.log(`this top ${this.getBoundingClientRect().top}`);
      //console.log(`this left ${this.getBoundingClientRect().left}`);

      let dx = cartProduct.getBoundingClientRect().left - this.getBoundingClientRect().left;
      let dy = this.getBoundingClientRect().top - cartProduct.getBoundingClientRect().top;
      let animationTopCoordinate = this.getBoundingClientRect().top; // левая сторона продукта
      let animationLeftCoordinate = this.getBoundingClientRect().left; // верхняя сторона продукта

      let animatedProductImage = this.querySelector('img').cloneNode(false);
      animatedProductImage.classList.add('animated-product-image'); // чтобы задать свойство position: absolute
      this.appendChild(animatedProductImage);

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

    let cartItems = [...cartProducts.children];
    localCartProducts = [];
    
    cartItems.forEach((item) => {      
      let localCartProduct = {
        id: item.dataset.id,
        imgSrc: item.querySelector('img').src,
        quantity: item.querySelector('.cart__product-count').textContent,
      }
      
      localCartProducts.push(localCartProduct);
      localStorage.setItem('localCartProductsList', JSON.stringify(localCartProducts));
    })  
  }
}

function removeProduct(event) {
  if (event.target.classList.contains('cart__product-remove')) {
    let storageArray = JSON.parse(localStorage.getItem('localCartProductsList'));
    // console.log(storageArray);
    let storageIndex = storageArray.findIndex(item => item.id === event.target.parentElement.dataset.id);
    
    storageArray.splice(storageIndex, 1); // меняет первоначальный массив (убирает объект под найденным индексом)
    // console.log(storageArray);

    localStorage.setItem('localCartProductsList', JSON.stringify(storageArray));

    event.target.parentElement.remove();

    if (cartProducts.children.length === 0) {
      this.classList.add('cart__hidden');
      localStorage.removeItem('localCartProductsList');
    }
  }
}