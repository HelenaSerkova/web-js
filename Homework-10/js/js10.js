'use strict';
// Необходимо изменить функцию openDescription из lesson10.js так, чтобы при нажатии на 'p'
// связанная с ним информация открывалась, а информация, связанная с остальными 'p' скрывалась.
//  Повторное нажатие на 'p' приводит к скрытию связанной с ним информации.

let titleElems = document.querySelectorAll(".article p:first-child");

for (let elem of titleElems) {

  elem.addEventListener("click", openDescription);
}

//Array.from(titleElems).forEach(elem=>{});
function openDescription() {
  // this - элемент, на который был повешен обработчик события
  // document.p.last-child.open.style.display = 'none';
  this.nextElementSibling.classList.toggle("open"); // toggle открывает или закрывает
  // может быть любой вариант получения: по айди, по классу и т.д.Лучше делать в дивах.
  for (let element of this.parentElement.parentElement.children) {
    if (element.lastElementChild !== this.nextElementSibling) {
      element.lastElementChild.classList.remove("open");
    }
  }
}

// 4.Дан чекбокс и текстовый инпут (см. файл form-events.js). Если флажок на чекбоксе установлен, то поле доступно для
// редактирования, если снят, то то поле нельзя редиктировать.
let form = document.forms.lesson;
console.log(form);

let colorRadios = form.elements.color;
console.log(colorRadios);

for (let radio of colorRadios){
  radio.addEventListener("focus",changeColor);
}
function changeColor () {
  // this - конкретная кнопка
  form.elements.checkbox_fieldset.style.background = this.value;
}
// name = lang[] / programming-lang (через - или [] ошибка )
let langArr = form.elements["lang[]"];
// у чекбоксов и радиокнопок есть атрибут checked, получить значение
// данного атрибута можно через свойство checked
for (let lang of langArr){
  if (lang.checked) console.log(lang.value);
}

let addinfo = form.elements.inform;
addinfo.addEventListener("change", addInformat);
function addInformat () {
  if (addinfo.checked){
      document.getElementById('addition').removeAttribute("disabled");
    } else {
      document.getElementById('addition').setAttribute("disabled", "true");
    }
}
