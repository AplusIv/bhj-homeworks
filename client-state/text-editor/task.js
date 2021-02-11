'use strict';

const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear__btn');

window.addEventListener('load', () => {
  if (localStorage.editorText !== undefined) {
    editor.value = localStorage.editorText;
  } else {
    editor.value = '';
  }
});

editor.addEventListener('keyup', function(event) {
  localStorage.setItem('editorText', this.value);
}); //??? Лучше обрабатывать keyup или keydown в данном задании? Есть ли принципиальная разница, и в каких случаях обязательно нужно их использовать?

clearBtn.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editorText');
});