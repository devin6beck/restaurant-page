const MenuPage = (function() {
  function generate() {
    const main = document.createElement('main');
    main.classList.add('current-page');

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';

    return menu;
  }
  return {generate};
})();

export default Homepage;