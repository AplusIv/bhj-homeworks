'use strict';

/* Добавил атрибут required в импут планировщика. Надеюсь, это не запрещено заданием */
/*??? Всё работает, но после добавления задания, автоматически выскаквает плашка с проверкой заполнения поля (как я понимаю, потому что снова пустое поле). Не смог от этого избавиться. Это можно как-то убрать? */

const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

let storageTaskList;
//console.log(storageTaskList);

// Восстановление задач из стораджа после повторной загрузки страницы
window.addEventListener('load', () => {
  if (localStorage.getItem('TODOlist') !== null) {
    tasksList.insertAdjacentHTML("afterbegin", localStorage.getItem('TODOlist'));
    // Навешиваю повторно обработчики на задачи, подгруженные из стораджа
    for (let task of tasksList.children) {
      task.addEventListener('click', closeTask);
    }
  }  
});

// elem.insertAdjacentHTML(where, html);

//window.addEventListener('load', () => tasksList.outerHTML = localStorage.getItem('TODOlist'))

console.log(taskInput.outerHTML);

taskInput.addEventListener('keydown', (event) => {
  
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    if (event.currentTarget.checkValidity()) {
      console.log('всё ок'); // ??? Не уверен, что правильно работает. Не выводит в консоль. Работает только алерт из-за атрибута required в инпуте.
      addTask();
    }
  }
});


addButton.addEventListener('click', () => {
  if (taskInput.checkValidity()) {
    addTask();
  }
});


function addTask(event) {
  //event.preventDefault();
  
  let task = document.createElement('div');
  tasksList.appendChild(task);
  task.innerHTML = `    
    <div class="task__title">
      ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;
  task.classList.add('task');
  console.log(tasksList.outerHTML);

  storageTaskList = tasksList.innerHTML;
  localStorage.setItem('TODOlist', storageTaskList); //Запись Storage
  taskInput.value = '';

  task.addEventListener('click', closeTask);
}

function closeTask() {
  this.remove();
  let changedStorageTaskList = localStorage.getItem('TODOlist').replace(this.outerHTML, ''); // удаляю часть из значения ключа и перезаписываю Storage
  localStorage.setItem('TODOlist', changedStorageTaskList);
}