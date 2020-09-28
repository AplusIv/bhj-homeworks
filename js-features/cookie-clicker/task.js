'use strict';

let cookie = document.getElementById('cookie');

let counter = document.getElementById('clicker__counter');

function countClicks() {
  counter.textContent++;
  if (counter.textContent % 2 > 0) {
    this.width = 300;
  } else {
    this.width = 200;
  }
}
cookie.onclick = countClicks;
// ??? Если быстро кликать мышкой не срабатывает изменение размеров. Если медленно - всё ок. Почему так?

// ??? Не совсем понимаю, что нужно делать в дополнительной задаче, где нужно замерять скорость клика.Как замерять время, которое прошло после клика? Оно ведь произвольное.
