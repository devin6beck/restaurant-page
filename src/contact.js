const ContactPage = (function() {
  function generate() {
    const main = document.createElement('main');
    main.classList.add('current-page');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact';

    main.appendChild(h2);

    return main;
  }
  return {generate};
})();

export default ContactPage;