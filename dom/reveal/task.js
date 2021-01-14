'use strict';
/* For of рекомендовали не использовать для установки обработчиков событий, а как иначе тогда писать код? Нпр, для подключения одинаковых обработчиков для коллекции элементов, серии кнопок и в том же духе.
*/


function isInViewport() {
  const revealedElements = document.querySelectorAll('.reveal');
  const viewportHeight = window.innerHeight;
  //console.log(window.innerHeight);

  for (let revealedElement of revealedElements) {
    const elementTop = revealedElement.getBoundingClientRect().top;
    const elementBottom = revealedElement.getBoundingClientRect().bottom;

    if (elementTop < viewportHeight && elementBottom > 0) {
    revealedElement.classList.toggle('reveal_active', true)
    } else {
    revealedElement.classList.toggle('reveal_active', false)
    }
    console.log(revealedElement.outerHTML);  
  
    console.log(revealedElement.getBoundingClientRect().top);
    console.log(revealedElement.getBoundingClientRect().bottom);
  }
}

window.addEventListener("scroll", isInViewport);
