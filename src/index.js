import initial from './initial';
import home from './home';
import menu from './menu';
import contact from './contact';

initial();

window.onload = function() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.addEventListener('click', tabClickHandler));

  function tabClickHandler(e) {
    console.log(`clicked ${e.target.className}`)
    switch (e.target.className) {
      case "home tab": renderPage(home.generate()); break;
      case 'menu tab': renderPage(menu.generate()); break;
      case 'contact tab': renderPage(contact.generate());
    }
  }
}

function renderPage(newPage) {
  const footer = document.querySelector('.footer');
  const previousPage = document.querySelector('.current-page');
  previousPage.remove();

  footer.insertAdjacentElement('beforebegin', newPage);
}