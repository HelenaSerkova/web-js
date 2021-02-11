"use strict";

// Вывести информацию о товаре: название, автор, количество страниц и поле вида + 0 -,
// где 0 изначальное количество.
// Нажате на + приводит к увеличению изначального количества (но не больше значения свойства count),
// нажате на - приводит к уменьшению количества (но не меньше 0).
// Если значение свойства count равно 0, кнопки + и - должны быть неактивны.
// Реализовать возможность вводить желаемое количество с клавиаруты, при этом:
//     числа превышающие значение свойства count, заменяются  значением свойства count,
//     отрицательные числа заменяются 0.

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5, count: 10},
    { author: 'Гоголь', title: 'Мертвые души', pageCount: 470, count: 0},
    { author: 'Лермонтов', title: 'Тамань', pageCount: 190, count: 6},
    { author: 'Гончаров', title: 'Обломов', pageCount: 610, count: 2},
    { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191, count: 17},
    { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50, count: 0},
    { author: 'Лермонтов', title: 'Бородино', pageCount: 2, count: 5},
];

function generateBooksCards(booksElem) {
  for (let book of books) {
    let cardOfBook = document.createElement("div");
    cardOfBook.classList.add("cardOfBook");

    let autTitle = document.createElement("div");
    autTitle.classList.add("autTitle");
    let authorName = document.createElement("p");
    authorName.innerText = book.author;
    let title = document.createElement("p");
    title.innerText = `"${book.title}"`;

    let pagesOfBook = document.createElement("div");
    pagesOfBook.classList.add("pagesOfBook");
    let pages = document.createElement("span");
    pages.innerText = `Количество страниц: ${book.pageCount}`;

    let inputDiv = document.createElement("div");
    inputDiv.classList.add("inputDiv");
    inputDiv.innerHTML = `
        <input value = "-" type="button" class="b-less">
        <input value="0" type="text" name="counter" class="number" id="counter">
        <input value=${book.count} name="counter" class="numberdis" >
        <input value = "+" type="button" class="b-more">
    `;
    
    if (!book.count) {
      inputDiv.querySelectorAll("input").forEach(input => input.disabled = true);
    }
    // countOfBook.append(count);
    pagesOfBook.append(pages);
    autTitle.append(authorName, title);
    cardOfBook.append(autTitle, pagesOfBook, /*countOfBook*/ inputDiv);
    booksElem.append(cardOfBook);

  }
}
generateBooksCards(document.getElementById("blocks"));

let blocksBooks = document.forms.blocks;

let bLess = blocksBooks.querySelectorAll(".b-less");
bLess.forEach(button => button.addEventListener("click", minus));
function minus(){
  let countBook = this.nextElementSibling;
  if (countBook.value > 0) {
    countBook.value--;
  }
}
let bMore = blocksBooks.querySelectorAll(".b-more");
bMore.forEach(button => button.addEventListener("click", plus));
function plus(){
  let countBook = this.previousElementSibling.previousElementSibling;
  if (countBook.value < parseInt(this.previousElementSibling.value)) {
    countBook.value++;
    // console.log(this.previousElementSibling.value);
  }
}
let numbers = blocksBooks.elements.counter;
// console.log(numbers);
numbers.forEach(number => number.addEventListener ("change", changes));
// console.log(numbers);
function changes (){
  console.log("uiu");
  if (this.value > this.nextElementSibling.value || this.value < 0) {
    this.value = this.nextElementSibling.value;
  }
}
