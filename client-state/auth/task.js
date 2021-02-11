'use strict';

document.getElementById('signin').classList.toggle('signin_active');

window.addEventListener('load', () => {// чтобы оставаться авторизованным
  if (localStorage.getItem('UserID') !== null) {
    showWelcome();
    document.querySelector('.deauthorization').classList.toggle('deauthorization_active');
  } else {
    return;
  }
});

const signinBtn = document.getElementById('signin__btn');
const deauthBtn = document.getElementById('deauthorization__btn');

signinBtn.addEventListener('click', sendForm);

deauthBtn.addEventListener('click', logout)

function sendForm(event) {
  event.preventDefault();

  const formData = new FormData(document.getElementById('signin__form'));

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  //xhr.setRequestHeader('Content-type', 'multipart/form-data');
  //??? Почему здесь не нужен этот заголовок? Я думал, он нужен для кодирования данных формдаты. Изначально направлял запросы с ним, но всё время возвращалась false в запросе. Убрал заголовок - всё заработало. Неочевидный для меня момент. Не могли бы прокомментировать?

  xhr.responseType = 'json';

  //xhr.withCredentials = true;
  // ??? Не могли бы вы разъяснить в каких случаях нужно использовать это свойство? Я никак не могу разобраться. Почему в нашем примере это свойство не используется? Ведь если я отправляю пост запрос на другой домен netology-slow-rest.herokuapp.com, почему это не кросс-доменный запрос? Или я совсем не так рассуждаю? Приведите, пжлст, пример, где это нужно и что понимать под кросс-доменным.
  
  xhr.addEventListener('readystatechange', function checkAuth() {
    if (this.readyState === 4) {
      console.log(this.response);
      if (this.response.success === true) {
        localStorage.setItem('UserID', this.response['user_id']);
        
        //document.getElementById('signin').classList.toggle('signin_active');

        showWelcome();
        //document.getElementById('welcome').classList.add('welcome_active');
        //document.getElementById('welcome').querySelector('span').textContent = localStorage.getItem('UserID');
        document.querySelector('.deauthorization').classList.toggle('deauthorization_active');
      } else {
        alert('Неверный логин/пароль');
      }
    }

    document.getElementById('signin__form').login.value = '';
    document.getElementById('signin__form').password.value = '';
  });

  xhr.send(formData);
};

function showWelcome() {
  document.getElementById('signin').classList.toggle('signin_active');

  document.getElementById('welcome').classList.add('welcome_active');
  document.getElementById('welcome').querySelector('span').textContent = localStorage.getItem('UserID');
}

function logout(event) {
  event.preventDefault();
  localStorage.removeItem('UserID');

  document.querySelector('.deauthorization').classList.toggle('deauthorization_active');
  document.getElementById('welcome').classList.toggle('welcome_active');
  document.getElementById('signin').classList.toggle('signin_active');
}