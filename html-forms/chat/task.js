'use strict';

/* Подскажитете, пожалуйста, по дополнительным заданиям. Как это реализовать? С прокруткой вообще не знаю, как подступиться) 

Задание с первым сообщением от бота при простое решил частично. У меня постоянно выдается это сообщение (я не знаю, как вызвать clearTimout при успешном событии клавиатуры. Также пробовал вызвать clearTimout, если контейнер с сообщениями непустой, но тоже почему-то не работает.) Также я уменьшил интервал времени на первое сообщение до 5 секунд.
З.Ы. В итоге решил через непустой контейнер с сообщениями:) Хотя мне кажется, что это не самое универсальное решение (там мог бы быть изначальный текст произвольного размера)
*/

const chat = document.querySelector('.chat-widget');

const chatWidjetInput = document.getElementById('chat-widget__input');

const messages = document.getElementById('chat-widget__messages');
//console.log(messages.innerHTML);

// Массив ответов бота
const botTextArray = [
  "Что разум человека может постигнуть и во что он может поверить, того он способен достичь.", 
  "Стремитесь не к успеху, а к ценностям, которые он дает.", 
  "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.", 
  "Надо любить жизнь больше, чем смысл жизни.", 
  "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.", 
  "Победа - это еще не все, все - это постоянное желание побеждать", 
  "Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы.", 
  "Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно.", 
  "Некоторые вещи могут завладеть вашим вниманием, но сосредоточьтесь лучше на тех, что завладевают вашим сердцем.", 
  "Научитесь говорить “Я не знаю”, и это уже будет прогресс.", 
  "Когда мне было 5 лет, мама всегда говорила, что главное в жизни – счастье. Когда я пошел в школу, на вопрос, кем я хочу быть, когда вырасту, я ответил “счастливым человеком”. Мне тогда сказали, что я не понимаю вопроса, а я ответил, что это они не понимают жизни.", 
  "Упади семь раз и восемь раз поднимись.",
];

// chat.addEventListener('click', (e) => e.currentTarget.classList.add('chat-widget_active'));

chat.addEventListener('click', activateChat);

function activateChat(e) {
  e.currentTarget.classList.add('chat-widget_active');

 /* ??? Как можно поймать другое событие (было отправлено сообщение в чат)? Хочу зафиксировать событие 'keydown' при отправленном сообщении, чтобы при его выступлении вызвать clearTimout. */ 
  const timerId = setTimeout(() => {
    let time = new Date();
    let hours = String(time.getHours());
    if (hours.length === 1) {
      hours = 0 + hours;// ??? Как-то по-другому можно приводить к двузначному формату часыи секунды?
    }
    let minutes = String(time.getMinutes());
    if (minutes.length === 1) {
      minutes = 0 + minutes;
    }    
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${hours + ":" + minutes}</div>
    <div class="message__text">Напишите нам, мы онлайн!</div>
  </div>`;

  }, 5000);
  
  // Если контейнер с сообщениями будет непустой до истечения срока ожидания на первое сообщение от бота - запустить clearTimeout(timerId).
  const noShow = setTimeout(() => {
    if (messages.textContent.length > 0) {
      clearTimeout(timerId);
    }
  }, 4500)

  console.log(messages.textContent);
  console.log(messages.textContent.length);

  chat.removeEventListener('click', activateChat); // Чтобы убрать считывание click. Если нажимаю курсор на чат или поле ввода, у меня по новой активизируется setTimout.
  
  /* clearTimeout(timerId);
  const noShow = setTimeout(() => {
    if (chatWidjetInput.event.type === 'keydown') {
      clearTimeout(timerId);
    }
  }, 4000)
  */
}

chatWidjetInput.addEventListener('keydown', sendMessage);
/* Изначально думал решить через событие input, но как тогда ловить нажатие Enter? */

function sendMessage(event) {
  let time;
  if (this.value !== '') {
    // Условие, чтобы нельзя было отправить пустую строку
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
    time = new Date();
    let hours = String(time.getHours());
    if (hours.length === 1) {
      hours = 0 + hours;
    }
    let minutes = String(time.getMinutes());
    if (minutes.length === 1) {
      minutes = 0 + minutes;
    }    
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${hours + ":" + minutes}</div>
    <div class="message__text">
      ${this.value}
    </div>
  </div>
  <div class="message">
    <div class="message__time">${hours + ":" + minutes}</div>
    <div class="message__text">${botTextArray[Math.round(Math.random() * botTextArray.length)]}</div>
  </div>
`;
  this.value = '';
  } 
  console.log(messages.innerHTML);
  }   
}