'use strict';

// ??? Честно говоря, у меня вообзе не получается это задание. Ломал голову несколько вечеров и не решил. Дайте, пжлст, совет куда двигаться)
// ??? Что за бесконечно заполняющийся набор букв выводится при направлении пост запроса? 

let xhr = new XMLHttpRequest();

const formData = new FormData(document.getElementById('form'));
console.log(formData);

console.log(document.getElementById('send'));

document.getElementById('send').addEventListener('click', function upload() {  

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

  xhr.onreadystatechange = function() {
    console.log(xhr.readyState)
  };

  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
  }

  xhr.upload.onreadystatechange = function() {
    console.log(xhr.readyState)
  }


  xhr.send(formData);
});

// отслеживаем процесс отправки
  xhr.upload.onprogress = function(event) {
    console.log(`Отправлено ${event.loaded} из ${event.total}`);
  };

  // Ждём завершения: неважно, успешного или нет
  xhr.onloadend = function() {
    if (xhr.status == 200) {
      console.log("Успех");
    } else {
      console.log("Ошибка " + this.status);
    }
  };

    xhr.onload = function() {
  alert(`Загружено: ${xhr.status} ${xhr.response}`);
  };

  xhr.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
    alert(`Ошибка соединения`);
  };

  xhr.onprogress = function(event) { // запускается периодически
    // event.loaded - количество загруженных байт
    // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
    // event.total - количество байт всего (только если lengthComputable равно true)
    alert(`Загружено ${event.loaded} из ${event.total}`);
  };

/*
document.getElementById('send').addEventListener('click', function(event) {
  event.preventDefault();

  const  xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

  //xhr.responseType = 'json';
  
  //xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  
  xhr.addEventListener('readystatechange', function() {
    //console.log(xhr.status, xhr.responseText, xhr.readyState);
    console.log(xhr.readyState);
  })
  


  

  
  xhr.upload.addEventListener('loadstart', function(e) {
    console.log(e.type);
  });

  xhr.upload.addEventListener('load', function() {
    console.log(xhr.status, xhr.responseText, xhr.readyState);
  });

  xhr.upload.addEventListener('progress', function(e) {
    console.log(e.type);
  });

  xhr.upload.addEventListener('loadend', function() {
    console.log(xhr.status, xhr.responseText, xhr.readyState);
  });

  

  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
  }

  xhr.send(formData);

  
xhr.upload.onload = function() {
    alert(`Загружено: ${xhr.status} ${xhr.response}`);
  };

  xhr.upload.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
    alert(`Ошибка соединения`);
  };

  xhr.upload.onprogress = function(event) { // запускается периодически
    // event.loaded - количество загруженных байт
    // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
    // event.total - количество байт всего (только если lengthComputable равно true)
    alert(`Загружено ${event.loaded} из ${event.total}`);
  };
  


})

*/

