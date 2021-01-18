'use strict';

// ??? С дополнительным занятием непонятно совсем. Не разобрался с рекурсией. Не могли бы направить в ключевых моментах, как нужно действовать

const interestsMain = document.querySelector('.interests_main > ul');

interestsMain.addEventListener('change', checkInputs);

function checkInputs(event) {
  console.log(event.target.outerHTML)
  let innerInputs = event.target.closest('li.interest').querySelectorAll('ul input.interest__check');

    if(event.target.checked === true) {    
    for (let input of innerInputs) {
      input.checked = true;
    }
  } else {
    for (let input of innerInputs) {
      input.checked = false;
    }
  }  
};


/*
'use strict';

const interestsMain = document.querySelector('.interests_main > ul');

interestsMain.addEventListener('change', checkInputs);

function checkInputs(event) {
  console.log(event.target.outerHTML)
  let innerInputs = event.target.closest('li.interest').querySelectorAll('ul input.interest__check');

  let parentElement = event.target.closest('ul.interests_active').closest('li.interest').querySelector('input');

  const selectedInterests = document.querySelectorAll( '.interest:checked' );
  //let children;

  

  if(event.target.checked === true) {    
    let a = parentElement;
    parentElement.indeterminate = true;
    repeatIndeterminate(a);
    for (let input of innerInputs) {
      input.checked = true;
    }
  } else {
    if (parentElement !== null) {
      parentElement.indeterminate = false;
    }
    for (let input of innerInputs) {
      input.checked = false;
    }
  }  
};

function repeatIndeterminate(element) {
    if (element.closest('ul.interests_active') !== null) {
      element.closest('ul.interests_active').closest('li.interest').querySelector('input');
    } else return;
  }

*/