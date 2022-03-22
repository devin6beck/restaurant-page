const ContactPage = (function() {
  function createImagesDiv() {
    const imagesDiv = document.createElement('div');
    imagesDiv.classList.add('food-images');
  
    const image1 = document.createElement('img');
    image1.src = 'images/sup.jpeg';
    image1.alt = 'woman on a stand up paddle board';
  
    const image2 = document.createElement('img');
    image2.src = 'images/food.jpg';
    image2.alt = 'gourmet food plate with wine';
  
    const image3 = document.createElement('img');
    image3.src = './images/dessert2.jpg';
    image3.alt = 'gourmet cake spread';
  
    const image4 = document.createElement('img');
    image4.src = 'images/luke.jpg';
    image4.alt = 'guide holding drinks';
  
    imagesDiv.appendChild(image1);
    imagesDiv.appendChild(image2);
    imagesDiv.appendChild(image3);
    imagesDiv.appendChild(image4);
    return imagesDiv
  }

  function createMain() {
    const main = document.createElement('main');
    main.classList.add('main')

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';

    const p1 = document.createElement('p');
    p1.textContent = 'Give us a call or schedule your trip online today!';

    const p2 = document.createElement('p');
    p2.textContent = 'The guides handle the labor and our gourmet chef prepares bomb food.';

    main.appendChild(h2);
    main.appendChild(p1);
    main.appendChild(p2);
    return main;
  }

function createSpacer() {
  const spacer = document.createElement('div');
  spacer.classList.add('spacer');

  return spacer;
}

  function generate() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('current-page');
    const main = createMain();
    const imagesDiv = createImagesDiv();
    contactPage.appendChild(imagesDiv);
    contactPage.append(createSpacer());
    contactPage.appendChild(main);
    contactPage.append(createSpacer());

    return contactPage;

  }
  return {generate};
})();

export default ContactPage;