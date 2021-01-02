"use strict";
// Задача 1.
// Написать функцию генерации карточек с информацией о животных.
// Выглядеть должно, как на изображении в телеграмм

function getAnims() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}

function generateAnimsCards(animsElem) {
  let anims = getAnims();
  for (let i = 0; i < anims.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");


    let animName = document.createElement("span");
    animName.innerText = anims[i].name.toUpperCase();

    let border = document.createElement("span");
    border.innerText = " | ";

    let animAge = document.createElement("span");
    animAge.innerText = `Возраст: ${anims[i].age}`;

    let animText = document.createElement("div");
    animText.classList.add("Text");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imageDiv");

    let img = document.createElement("img");
    img.setAttribute("src", "img/f" + (i + 1) + ".jpg");

    let descr = document.createElement("div");
    descr.classList.add("info");

    let addInfo = document.createElement("h3");
    addInfo.innerText = "Дополнительная информация:";

    let animColor = document.createElement("p");
    animColor.innerText = `Цвет: ${anims[i].color}`;

    let animDocument = document.createElement("p");
    animDocument.innerText = `Документы: ${anims[i].additional_info.passport ? "Есть" : "Нет"}`;

    let animVacct = document.createElement("p");
    animVacct.innerText = `Прививки: ${anims[i].additional_info.vaccinations ? "Есть" : "Нет"}`;

    descr.append(addInfo, animColor, animDocument, animVacct);
    imgDiv.append(img);
    animText.append(imgDiv, descr);
    title.append(animName, border, animAge);
    card.append(title, animText);
    animsElem.append(card);
  }
}
generateAnimsCards(document.querySelector(".anims"));


// Задача 2.
// Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
// Функция не должна быть привязаны к конкретным значениям.
// Заголовки ячеек - названия свойств.
// Например, для articles заголавками будут: id, title, text, author;
//  для goods заголавками будут: title, price, count.
 // Массивы для тестирования:
let articles = [
     {
         id: 1,
         title: "JS",
         text: "Статья про JS",
         author: "Александр"
     },
     {
         id: 2,
         title: "PHP",
         text: "Статья про PHP",
         author: "Виталий"
     },
     {
         id: 3,
         title: "Базы Данных",
         text: "Статья про Базы Данных",
         author: "Евгения"
     },
     {
         id: 4,
         title: "HTML",
         text: "Статья про HTML",
         author: "Виталий"
     }
 ];

 let goods = [
     {
         title: "Пианино",
         price: 3000,
         count: 25
     },
     {
         title: "Гитара",
         price: 1200,
         count: 40
     },
     {
         title: "Барабаны",
         price: 2700,
         count: 12
     },
     {
         title: "Флейта",
         price: 900,
         count: 50
     },
     {
         title: "Арфа",
         price: 3400,
         count: 5
     }
 ];

 // Примеры вызова функции:
 //  generateTable(articles); // генерация таблицы со статьями
 //  generateTable(goods); // генерация таблицы с товарами

function generateTable(arr) {
  let table = document.createElement("table");
  let row = table.insertRow();
  for (let elem in arr[0]){
    let th = document.createElement("th");
    th.innerText = elem;
    th.setAttribute("th_head", elem);
    row.append(th);
  }

  for (let element of arr) {
    row = table.insertRow();
    for (let value in element) {
      let cell = row.insertCell();
      cell.innerText = element[value];
      cell.setAttribute("t_body", value);
    }
  }
  document.querySelector(".tableJS").append(table);
}
generateTable(articles);
generateTable(goods);


// Homework-10
// let thElem = document.getAttribute("th_head");
// for (let elem_s of thElem) {
//   elem.addEventListener("click", sortTable);
// }
// function sortTable() {
//   let arr = array.from(table.rows)
//   .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
//   table.tBodies[0].append(...sortedRows);
//
// }


// Задача 3. ДОПОЛНИТЕЛЬНАЯ ЗАДАЧА.
// Дан объект {
//         cat: "Кот",
//         book: "Книга",
//         car: "Машина"
//     }
//
//     Написать функцию generateField(n) по генерации игрового поля размером n x n.
//     Значение n не может быть меньше 3.
//     Для 3х ячеек поля (для выбора конкретной ячейки использовать random)
//     добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
//     Для 1й ячейки значение атрибута prise="cat",
//     для 2й ячейки значение атрибута prise="book",
//     для 3й ячейки значение атрибута prise="car"






let bigPrise = {
     cat: "Кот",
     book: "Книга",
     car: "Машина"
   };

function generateField(n) {
  if (n < 3 ) return;

  let counter = 0;
    let container = document.createElement("div");
    container.style.width = '40vw';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    let size = 40/n;
    for (let i = 0; i < n * n; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", counter);
        innerDiv.style.border = '1px solid blue';
        innerDiv.style.width = innerDiv.style.height = size + 'vw';
        counter++;
        container.append(innerDiv);
    }

    document.getElementById("game-field").append(container);

    let priseArr = Object.keys(bigPrise);
    for ( let present of priseArr) {
      document.getElementById(Math.floor(Math.random() * (n*n))+1 ).setAttribute("data-present", present);
    }
}

generateField(3);

// Задача на генерацию игрового поля (часть 2):
//
//  Пользователю дается определенное количество попыток, чтобы найти приз,
//  если ему удается найти спрятанный приз за указанное количество попыток,
//  то отобразить пользователю его приз, если не удалось, то вывести информацию об этом.
//
//  После каждой попытки отображать, сколько попыток осталось.
//  Если пользователь получил приз или закончились попытки, он не может продолжить игру (удалить обработчик

let presentContainer = document.getElementById("game-field");
presentContainer.addEventListener("click", showPresent);


document.getElementById("game-field")
let trying = 0;
function showPresent(event) {
    // console.log("Информация о событии", event);
    let clickElem = event.target;
    let presentValue = clickElem.dataset.present;
    if (presentValue) {
        clickElem.innerText = bigPrise[presentValue];
        this.removeEventListener("click", showPresent);
    } else
      if (trying < 3){
        trying ++;
        clickElem.innerText = 'попытка'+ trying;
        }
        if (trying === 3){
          clickElem.innerText = 'игра окончена';
        this.removeEventListener("click", showPresent);
        }
}
