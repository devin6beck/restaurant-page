import initial from './initial';
import home from './home';

initial();

window.onload = function() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.addEventListener('click', tabClickHandler));

  function tabClickHandler(e) {
    console.log(`clicked ${e.target}`)
  }
}