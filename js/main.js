"use strict";

/*
  Практическое задание
  1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. 
  Продумайте, какие методы понадобятся для работы с этими сущностями.
  2. Добавьте для ProductList метод, определяющий суммарную стоимость всех 
  товаров.
*/

const elShoppingCart = document.querySelector(".shopping-cart");
const elShoppingCartEmpty = document.querySelector(".shopping-cart__empty");
const elItemsInCartTotal = document.querySelector(".itemsInCartTotal");
document.querySelector(".btn-cart").addEventListener("click", () => {
  elShoppingCart.hidden = !elShoppingCart.hidden;
});

class ProductList {
  constructor(container = ".products") {
    this.container = document.querySelector(container);
    this._goods = [];
    this._productsObjects = [];
    this.total = 0;
  }

  fetchGoods() {
    this._goods = [
      { id: 1, title: "Notebook", price: 20000 },
      { id: 2, title: "Mouse", price: 1500 },
      { id: 3, title: "Keyboard", price: 5000 },
      { id: 4, title: "Gamepad", price: 4500 },
    ];
  }

  calculateTotalAmount() {
    this._goods.forEach((good) => {
      return (this.total += good.price);
    });
  }

  render() {
    for (const product of this._goods) {
      const productObject = new ProductItem(product);
      this._productsObjects.push(productObject);
      this.container.insertAdjacentHTML(
        "beforeend",
        productObject.getHTMLString()
      );
    }
  }
}

class ProductItem {
  constructor(product, img = "https://via.placeholder.com/200x150") {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price} \u20bd</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`;
  }
}

class ShoppingCartProductList {
  constructor(container = ".tableShoppingCart") {
    this.container = document.querySelector(container);
    this._productsObjects = [];
    this.total = 0;
  }
  addGoodToShoppingCart() {
    // While it's hardcoded here
    const data = [
      { id: 2, title: "Mouse", price: 1500 },
      { id: 3, title: "Keyboard", price: 5000 },
    ];
    this._productsObjects.push(data);
  }
  removeGoodFromShoppingCart() {
    // some code
  }
  render() {
    this._productsObjects[0].forEach((item) => {
      this.total += item.price;
      const productObject = new ShoppingCartItem(item);
      this.container.insertAdjacentHTML(
        "beforeend",
        productObject.getHTMLString()
      );
    });
    elItemsInCartTotal.textContent = `${this.total} \u20bd`;
  }
}

class ShoppingCartItem {
  constructor(product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
  }
  getHTMLString() {
    return `
      <tr>
        <td class="lineItem">${this.title}</td>
        <td class="lineItem">1</td>
        <td class="lineItem">${this.price}</td>
        <td class="lineItem">${this.price}</td>
        <td class="lineItem"><button class="btnRemove" data-id> - </button></td>
      </tr>
      `;
  }
}

const list = new ProductList();
list.fetchGoods();
list.calculateTotalAmount();
console.log(list.total); // 31000
list.render();

const listShoppingCar = new ShoppingCartProductList();
listShoppingCar.addGoodToShoppingCart();
listShoppingCar.render();
