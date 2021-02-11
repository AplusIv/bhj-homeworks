// ??? Почему-то не записываются куки. Я писал код изначально в Репле с рабочего компьютера - всё работало. 
// Запускаю тот же самый код из папки - никакие куки не сохраняютя. Вообще не понимаю в чём проблема. М.б., нужно было задавать дополнительные атрибуты кукам?
// Но всё равно, это непонятно, почему из Репла запускается.

'use strict';

const modalCloser = document.querySelector('div.modal__close');

if (getCookieThird('modalClassStatus') !== undefined) {
  document.getElementById('subscribe-modal').className = getCookieThird('modalClassStatus');
} else {
  document.getElementById('subscribe-modal').className = 'modal modal_active';
}

modalCloser.onclick = () => {
  modalCloser.closest('div.modal').className = 'modal';
  document.cookie = 'modalClassStatus=modal';
  //??? Что нужно сохранять в куках? Какую информацию? Допустим, я сохранил нужное значение класса. Или нужно было просто установить, грубо говоря, куку-чекбокс (есть в куках нужное значение => поменять вручную класс на элементе, нет - ничего не делать)
} 

// 3 варианта достать нужную куку

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  console.log(parts);
  if (parts.length === 2) {
    return decodeURIComponent(parts
      .pop()
      .split(";")
      .shift()
    )
  }
}

// возвращает cookie если есть или undefined
function getCookieSecond(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getCookieThird(name) {
  const match = document.cookie.match(new RegExp(name+'=([^;$]+)'));
  console.log(match);
  return match ? decodeURIComponent(match[1]) : undefined;
}
