'use strict';

const xhr = new XMLHttpRequest();

const xhr2 = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';

xhr.send();

let choice;

xhr.addEventListener('readystatechange', function getRandomPoll() {
  if (this.readyState === this.DONE && this.status === 200) {
    console.log(this.response);
    console.log(typeof this.response);

    document.getElementById('poll__title').textContent = this.response.data.title;
    for (let answer of this.response.data.answers) {
      document.getElementById('poll__answers').innerHTML += `<button class="poll__answer">${answer}</button>`;
    }

    document.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        alert('Спасибо, ваш голос засчитан!');
        choice = event.target.textContent;
        console.log(choice);
        
        console.log(xhr.response.id);
        console.log(xhr.response.data.answers.indexOf(choice));

        //??? Из обработчика же можно направлять заросы? Как по-другому сделать я не догадался
        xhr2.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr2.responseType = 'json'; // ??? Правильно понимаю, что это самый простой и очевидный способ получить в ответе с сервера обычный объект? 
        xhr2.send(`vote=${xhr.response.id}&answer=${xhr.response.data.answers.indexOf(choice)}`);
      }
    });    
  }
});


xhr2.addEventListener('readystatechange', function showPollResults() {
  if (this.readyState === this.DONE && this.status === 200) {
    console.log(this.response);
    console.log(typeof this.response);

    let statSum = 0;
    for (let answerStat of this.response.stat) {
      // Считаю сумму ответов
      statSum += answerStat.votes;
    }
    console.log(statSum);

    document.getElementById('poll__answers').innerHTML = '';//очистить предыдущую разметку

    for (let answerStat of this.response.stat) {        
      document.getElementById('poll__answers').innerHTML += `
      <div class="poll__answer__stat">${answerStat.answer}: ${(answerStat.votes / statSum * 100).toFixed(2)}%</div>`
    }
  }
})


