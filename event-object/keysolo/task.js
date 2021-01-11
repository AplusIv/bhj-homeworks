'use strict';

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }
  
  registerEvents() {
    // ??? Помогите, пжлст, с этим заданием. Я уже отчаился с ним разобраться. В каком направлении двигаться? Нам, честно говоря, совсем мало рассказывали про события клавиатуры.
    // Да и в целом код здесь непростой (для меня, по крайней мере).
    
    //??? Не могу сослаться из обработчика на нужный метод. this другой. Как быть? 
    
    console.log(this.currentSymbol);
    const comparingLetter = this.currentSymbol.textContent;
    //let next = this.success();
    //this.success();
    document.addEventListener('keyup', function(event) {
      //console.log(this.currentSymbol);
      //console.log(this.currentSymbol.textContent);
      console.log(event.type);
      console.log(event.key);
      console.log(event.code);
      
      
      /* if (event.code === a) {
        console.log('верно');
      } else {
        console.log('неверно');
      }
      */
   
      if (event.key === comparingLetter) {
        console.log('верно');
        let a = this.success.bind(this);
        a();
      } else {
        console.log('неверно');
        this.fail();
      }
      
    })
   





    
    /*
    let arr = []; 
    console.log(this.currentSymbol.textContent);
    // document.querySelector('.text_field').addEventListener('keyup', handler);
    document.addEventListener('keyup', handler);
    // this.currentSymbol.textContent;

    if (arr[0] === this.currentSymbol.textContent) {
      this.success;
    } else {
      this.fail();
    }
    
    console.log(arr);
    */
    /*
    function handler(event) {
      console.log(event.key);
      console.log(typeof event.key);
      console.log(event.key.toLowerCase());
      // let a = event.key.toLowerCase();
      // return a;
      arr.push(event.key.toLowerCase());
      console.log(arr);
      */
      /* if (event.key.toLowerCase() === this.currentSymbol.textContent) {
        console.log("верный символ");        
      } else {
        console.log("не то");
      }
      */
      // console.log(event);
      // console.log(event.code);
      // return event.key, event, event.code;
    /*} */
    
    


    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
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
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
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

let game1 = new Game(document.getElementById('game'));

/*
let game1 = new Game(document.getElementById('game'));


console.log(game1);
console.log(game1.currentSymbol);
*/
/*
function handler(event) {
  console.log(event.key);
  console.log(event);
  console.log(event.code);
  return event.key;
}
document.addEventListener('keydown', handler)
*/
