"use strict";

/*
  Практическое задание
  3. * Некая сеть фастфуда предлагает несколько видов гамбургеров:
    a. Маленький (50 рублей, 20 калорий).
    b. Большой (100 рублей, 40 калорий).
    Гамбургер может быть с одним из нескольких видов начинок (обязательно):
      a. С сыром (+10 рублей, +20 калорий).
      b. С салатом (+20 рублей, +5 калорий)
      c. С картофелем (+15 рублей, +10 калорий).
    
  Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
  и полить  майонезом (+20 рублей, +5 калорий).
  Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
  Можно использовать примерную архитектуру класса со следующей страницы, 
  но можно использовать и свою
*/

class BurgerBoom {
  constructor() {
    this.size = [];
    this.stuffing = [];
    this.toppings = [];
  }
  addSelectedSize() {
    elOrderPage.querySelectorAll(".sizeBurger input").forEach((item) => {
      if (item.checked) {
        switch (item.value) {
          case "Big burger":
            this.size.push({
              name: item.value,
              price: 100,
              calories: 40,
            });
            break;
          case "Small burger":
            this.size.push({
              name: item.value,
              price: 50,
              calories: 20,
            });
            break;
          default:
            break;
        }
      }
    });
  }
  addSelectedStuffing() {
    elOrderPage.querySelectorAll(".stuffingBurger input").forEach((item) => {
      if (item.checked) {
        switch (item.value) {
          case "Cheese":
            this.stuffing.push({
              name: item.value,
              price: 10,
              calories: 20,
            });
            break;
          case "Salad":
            this.stuffing.push({
              name: item.value,
              price: 20,
              calories: 5,
            });
            break;
          case "Potato":
            this.stuffing.push({
              name: item.value,
              price: 15,
              calories: 10,
            });
            break;
          default:
            break;
        }
      }
    });
  }
  addSelectedToppings() {
    elOrderPage.querySelectorAll(".condimentsBurger input").forEach((item) => {
      if (item.checked) {
        switch (item.name) {
          case "mayonnaise":
            this.toppings.push({
              name: item.name,
              price: 20,
              calories: 5,
            });
            break;
          case "spices":
            this.toppings.push({
              name: item.name,
              price: 15,
              calories: 0,
            });
            break;
          default:
            break;
        }
      }
    });
  }

  getSize() {
    this.addSelectedSize();
    return this.size;
  }
  getStuffing() {
    this.addSelectedStuffing();
    return this.stuffing;
  }
  getToppings() {
    this.addSelectedToppings();
    return this.toppings;
  }
  calculatePrice() {
    this.size = [];
    this.stuffing = [];
    this.toppings = [];
    let price = 0;
    this.getSize().forEach((item) => {
      price += item.price;
    });
    this.getStuffing().forEach((item) => {
      price += item.price;
    });
    this.getToppings().forEach((item) => {
      price += item.price;
    });
    return price;
  }
  calculateCalories() {
    this.size = [];
    this.stuffing = [];
    this.toppings = [];
    let calories = 0;
    this.getSize().forEach((item) => {
      calories += item.calories;
    });

    this.getStuffing().forEach((item) => {
      calories += item.calories;
    });
    this.getToppings().forEach((item) => {
      calories += item.calories;
    });
    return calories;
  }
}

const elMainPage = document.querySelector(".mainPage");
const elOrderPage = document.querySelector(".orderPage");
const elFinishPage = document.querySelector(".finishPage");
const elNameBurger = document.querySelector(".priceBurger");
const elCaloriesBurger = document.querySelector(".caloriesBurger");

document.querySelector(".btnToMainPage").addEventListener("click", () => {
  elMainPage.hidden = false;
  elOrderPage.hidden = true;
  elFinishPage.hidden = true;
});
document.querySelector(".btnToOrderPage").addEventListener("click", () => {
  elOrderPage.hidden = false;
  elMainPage.hidden = true;
  elFinishPage.hidden = true;
});
document.querySelector(".btnToFinishPage").addEventListener("click", () => {
  elFinishPage.hidden = false;
  elOrderPage.hidden = true;
  elMainPage.hidden = true;

  const burgerBoom = new BurgerBoom();
  const price = burgerBoom.calculatePrice();
  const calories = burgerBoom.calculateCalories();

  elNameBurger.textContent = `${price}\u20bd.`;
  elCaloriesBurger.textContent = calories;
});
document.querySelector(".finish-btn").addEventListener("click", () => {
  elMainPage.hidden = false;
  elOrderPage.hidden = true;
  elFinishPage.hidden = true;
});
