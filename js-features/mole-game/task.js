'use strict';
let hole;
let deadStatus = document.getElementById('dead');
let lostStatus = document.getElementById('lost');

// ????? Не получается решить задачу, используя цикл. Если напрямую задаю индекс или просто создаю переменную для каждой лунки - всё работает. Как быть?
/* let getHole = index => document.getElementById(`hole${index}`);
for (index = 1; index < 10; index++) {
  getHole(index).onclick = function inspectHole() {
    if (getHole(index).className.includes('hole_has-mole')) {
      deadStatus.textContent++;
        if (deadStatus.textContent >= 10) {
          alert('Вы одолели кротов!');
          deadStatus.textContent = 0;
          lostStatus.textContent = 0;
        }
    } else {
      lostStatus.textContent++;
      if (lostStatus.textContent >= 5) {
        alert('Кроты оказались сильнее!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
    }
  }
}
*/



// let getHole = index => document.getElementById(`hole${index}`);
/*let getHole = index => {
  for (index = 1; index < 10; index++) {
    return document.getElementById(`hole${index}`);
  }
  //return document.getElementById(`hole${index}`);
}
*/
/* let getHole;
for (index = 1; index < 10; index++) {
  getHole = index => document.getElementById(`hole${index}`);
}

hole = getHole(index);
*/
//hole = document.getElementById(`hole1`)

//hole.onclick = getHole(index);

/* if (hole.onclick().className.includes('hole_has-mole')) {
  deadStatus++;
} else {
  lostStatus++;
}
*/

let hole1 = document.getElementById(`hole1`);
let hole2 = document.getElementById(`hole2`);
let hole3 = document.getElementById(`hole3`);
let hole4 = document.getElementById(`hole4`);
let hole5 = document.getElementById(`hole5`);
let hole6 = document.getElementById(`hole6`);
let hole7 = document.getElementById(`hole7`);
let hole8 = document.getElementById(`hole8`);
let hole9 = document.getElementById(`hole9`);

hole1.onclick = function inspectHole() {
  if (hole1.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole2.onclick = function inspectHole() {
  if (hole2.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole3.onclick = function inspectHole() {
  if (hole3.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole4.onclick = function inspectHole() {
  if (hole4.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole5.onclick = function inspectHole() {
  if (hole5.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole6.onclick = function inspectHole() {
  if (hole6.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole7.onclick = function inspectHole() {
  if (hole7.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole8.onclick = function inspectHole() {
  if (hole8.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}

hole9.onclick = function inspectHole() {
  if (hole9.className.includes('hole_has-mole')) {
    deadStatus.textContent++;
      if (deadStatus.textContent >= 10) {
        alert('Вы одолели кротов!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
  } else {
    lostStatus.textContent++;
    if (lostStatus.textContent >= 5) {
      alert('Кроты оказались сильнее!');
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
    }
  }
}
