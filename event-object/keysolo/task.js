'use strict';

// ??? Помогите разобраться с таймером. Интересное задание, хочется решить) 
// Я добавил новый метод setTimer() и изменил немного вёрстку. 
// Хотел сначала написать через стрелочную функцию, но у меня начались проблемы с this, переписал на функциональное выражение. 
// Но не получается отменять таймеры (они просто начинают наслаиваться друг на друга с каждым новым словом) 
// Как мне изменить существующий код или тут можно проще решить как-то?

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer')// !!! Добавил таймер в изначальный класс

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }
  
  registerEvents() {   
    //console.log(this.currentSymbol);
    // console.log(this.wordElement.children);
    // console.log(this.wordElement.children.length);
    // let comparingLetter = this.currentSymbol.textContent;
    /* let timerStart = this.wordElement.children.length;
    let timerId = setInterval(() => {
        let currentTime = timerStart--;
        console.log(currentTime);
        this.timerElement.textContent = currentTime;        
      }, 1000);
    
    setTimeout(() => clearInterval(timerId), timerStart * 1000 + 1000); */
    
    document.addEventListener('keyup', event => {
      console.log(this.currentSymbol);
      console.log(this.wordElement.children);
      console.log(this.wordElement.children.length);
      /* let timerId = setInterval(() => {
        let currentTime = timerStart--;
        console.log(currentTime);
        this.timerElement.textContent = currentTime;        
      }, 1000); */

      //console.log(this.currentSymbol.textContent);
      // console.log(event.type);
      let comparingLetter = this.currentSymbol.textContent;
      console.log(event.key);
      
      if (event.key.toLowerCase() === comparingLetter.toLowerCase()) {
        console.log('верно');
        this.success();
      } else {        
        console.log('неверно');
        this.fail();
      } 

    })
   
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  setTimer() { //???!!! Проблемы с областью видимости, когда делаю таймер. Через стрелку рекурсивный таймаут не написать, с функциональным выражением this связан.
    let timerStart = this.wordElement.children.length;
    /* let timerId = setInterval(() => {
        let currentTime = timerStart--;
        console.log(currentTime);
        this.timerElement.textContent = currentTime;        
      }, 1000);
    
    setTimeout(() => clearInterval(timerId), timerStart * 1000 + 1000);
    
    if (this.currentSymbol === null) {
      setTimeout(() => clearInterval(timerId), 0);
    }  */
    let timer = document.querySelector('.timer');
    let timerId = setTimeout(function tick() {
      let currentTime = timerStart--;      
      timer.textContent = currentTime;
      let word = document.querySelector('.word');
      let rightLetters = word.querySelectorAll('.symbol_correct');
      // console.log(document.querySelector('.word'));
      console.log(word.children.length);
      console.log(rightLetters.length);
      if (word.children.length === rightLetters.length) {
        console.log('Супер!');
        setTimeout(() => clearInterval(timerId), 0);       
      } else {
        timerId = setTimeout(tick, 1000);
        console.log('ещё секундочку!');
      } // ??? Пытаюсь отменить вызов таймаута, не идёт... И идеи кончились.      
      
    }, 1000)

    setTimeout(() => clearTimeout(timerId), timerStart * 1000 + 1500);    
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    // this.currentSymbol.classList.add('symbol_current'); //
    // this.currentSymbol.previousElementSibling.classList.remove('symbol_current'); //
    if (this.currentSymbol !== null) {
      // setTimeout(() => clearInterval(timerId), 0);//
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();      
    }    
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    // setTimeout(() => clearInterval(timerId), 0)//
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    // this.setTimer(); // !!!
    // let timerStart = this.wordElement.children.length;
    // this.timerStart;
    this.setTimer();// !!!
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));