'use strict';

const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json'; // ??? Правильно понимаю, что если казать в свойстве  responseType значение json, браузер, в таком случае, ожидает от сервера json и самостоятельно переводит ответ в обычный объект? У меня во всяком случае typeof ответа - обычный объект
xhr.send();

xhr.addEventListener('readystatechange', function getCurrencies() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    //let responseObj = xhr.response;
    console.log(typeof xhr.response);
    //console.log(xhr.response);
    console.log(this.response);
    let valuteObj = this.response.response['Valute']; // Чтобы в ответе на запрос попасть в свойство ключа Valute 
    console.log(valuteObj);
    let response = '';
    // При помощи for...in проходим через перечисляемые свойства объекта
    for (let key in valuteObj) {
      response += `
      <div class="item">
        <div class="item__code">${valuteObj[key]['CharCode']}</div>
        <div class="item__value">${valuteObj[key]['Value']}</div>
        <div class="item__currency">руб.</div>
        </div>
      `; // ??? Могу ошибаться, но, кажется, что for...in обходит свойства в произвольном порядке, а не как они пришли с сервера? Что делать, если бы это был принципиальный момент? Порядок.
    }
    console.log(response);
    

    document.getElementById('items').innerHTML = response;


    //items.innerHTML = response;
    localStorage.setItem('storage_XHR_response', response);// записываю в сторадж

    console.log(document.getElementById('items').outerHTML);

    document.getElementById('loader').classList.remove('loader_active');


    //let json = JSON.parse(xhr.response);
    //console.log(JSON.parse(xhr.responseText));
    //console.log(typeof JSON.parse(xhr.response));
  }
});

/*
window.addEventListener('load', () => {
  //document.getElementById('loader').classList.remove('loader_active');
  items.innerHTML = localStorage.getItem('storage_XHR_response');
})
*/

window.addEventListener('load', () => {
  if (localStorage.getItem('storage_XHR_response') !== null) {
    document.getElementById('loader').classList.remove('loader_active');
    items.innerHTML = localStorage.getItem('storage_XHR_response');
  }  
}) // ??? Нужно ли было для решения дополнительного задания писать повторное направление запроса, на случай если данные в сторадже уже будут считаться неактуальными? Не совсем разобрался.