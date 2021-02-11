'use strict';

const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let storageTaskList = [];

// Восстановление задач из стораджа после повторной загрузки страницы
window.addEventListener('load', () => {
  if (localStorage.getItem('TODOlist') !== null) {  
    let storageArr = JSON.parse(localStorage.getItem('TODOlist'));
    for (let item of storageArr) {
      createTask(item);
    }
    // Навешиваю повторно обработчики на задачи, подгруженные из стораджа
    for (let task of tasksList.children) {
      task.addEventListener('click', closeTask);
    }
  }
});

//??? Если я уберу атрибут required, то я смогу с лёгкостью добавлять пустые строки (поэтому я и написал, что не уверен, что моя проверка без required работает)
taskInput.addEventListener('keydown', (event) => {

  if (event.key === 'Enter') { // if (event.code === 'Enter' || event.code === 'NumpadEnter')
    if (event.currentTarget.checkValidity()) {
      console.log('всё ок');
      console.log(event.key)
      addTask();
    }
  }
});

addButton.addEventListener('click', () => {
  if (taskInput.checkValidity()) {
    addTask();
  }
});

function addTask() {
  createTask(taskInput.value);
  storageTaskList.push(taskInput.value);
  localStorage.setItem('TODOlist', JSON.stringify(storageTaskList)); //Запись Storage
  taskInput.value = '';

  for (let task of tasksList.children) {
    task.addEventListener('click', closeTask);
  }
}

function closeTask(event) { 
  let storageArr = JSON.parse(localStorage.getItem('TODOlist'));    
  let closedTask = this.querySelector('.task__title').textContent.trim();
  let removedIndex = storageArr.findIndex(item => item === closedTask);  
  
  storageArr.splice(removedIndex, 1); 
  if (storageArr.length > 0) {
    localStorage.setItem('TODOlist', JSON.stringify(storageArr));
  } else {
    localStorage.removeItem('TODOlist');
  }
  this.remove();
}

function createTask(value) {
  let task = document.createElement('div');
  tasksList.appendChild(task);
  task.innerHTML = `    
    <div class="task__title">
      ${value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;
  task.classList.add('task');
}