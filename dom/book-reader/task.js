'use strict';

/* ??? Хотел сперва обработчик прикрепить на book, но тогда у меня слишком грамоздкие условия получаются (ещё больше, чем сейчас). Так нормально? Или стоит немного переписать условия в функциях?*/

const book = document.getElementById('book');

const fontSizesControls = book.querySelectorAll('a.font-size');
const fontSizeController = book.querySelector('.book__control_font-size');

const textColorControls = book.querySelectorAll('div.book__control_color a');
const textColorController = book.querySelector('.book__control_color');

const backgroundColorControls = book.querySelectorAll('div.book__control_background a');
const backgroundColorController = book.querySelector('.book__control_background');

fontSizeController.addEventListener('click', switchFontSize);
textColorController.addEventListener('click', switchTextColor);
backgroundColorController.addEventListener('click', switchBackgroundColor);


function switchFontSize(event) {
  event.preventDefault();
  for (let item of fontSizesControls) {
    if (item.classList.contains('font-size_active')) {
      item.classList.remove('font-size_active');
    }
  }
  if (event.target.tagName == 'A') {
    event.target.classList.add('font-size_active');

    if (book.classList.contains('book_fs-small')) {
      book.classList.remove('book_fs-small');
    } else 
    if (book.classList.contains('book_fs-big')) {
      book.classList.remove('book_fs-big');
    }

    if (event.target.dataset.size === 'small') {
      book.classList.add('book_fs-small');
    } else 
    if (event.target.dataset.size === 'big') {
      book.classList.add('book_fs-big');
    }
    // console.log(book.outerHTML);     
  }
}

function switchTextColor(event) {
  event.preventDefault();
  for (let item of textColorControls) {
    if (item.classList.contains('color_active')) {
      item.classList.remove('color_active');
    }
  }
  if (event.target.tagName == 'A') {
    event.target.classList.add('color_active');
    console.log(event.target.outerHTML);

    if (book.classList.contains('book_color-black')) {
      book.classList.remove('book_color-black');
    } else if (book.classList.contains('book_color-whitesmoke')) {
      book.classList.remove('book_color-whitesmoke');
    } else if (book.classList.contains('book_color-gray')) {
      book.classList.remove('book_color-gray');
    }

    if (event.target.dataset.textColor === 'black') {
      book.classList.add('book_color-black');
    } else if (event.target.dataset.textColor === 'whitesmoke') {
      book.classList.add('book_color-whitesmoke');
    } else if (event.target.dataset.textColor === 'gray') {
      book.classList.add('book_color-gray');
    }
    // console.log(book.outerHTML);     
  }
}

function switchBackgroundColor(event) {
  event.preventDefault();
  for (let item of backgroundColorControls) {
    if (item.classList.contains('color_active')) {
      item.classList.remove('color_active');
    }
  }
  if (event.target.tagName == 'A') {
    event.target.classList.add('color_active');

    if (book.classList.contains('book_bg-black')) {
      book.classList.remove('book_bg-black');
    } else if (book.classList.contains('book_bg-white')) {
      book.classList.remove('book_bg-white');
    } else if (book.classList.contains('book_bg-gray')) {
      book.classList.remove('book_bg-gray');
    }

    if (event.target.dataset.bgColor === 'black') {
      book.classList.add('book_bg-black');
    } else if (event.target.dataset.bgColor === 'white') {
      book.classList.add('book_bg-white');
    } else if (event.target.dataset.bgColor === 'gray') {
      book.classList.add('book_bg-gray');
    }
    // console.log(book.outerHTML);     
  }
}
