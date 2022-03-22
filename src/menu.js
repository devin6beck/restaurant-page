const MenuPage = (function() {

  function createImagesDiv() {
    const imagesDiv = document.createElement('div');
    imagesDiv.classList.add('food-images');
  
    const image1 = document.createElement('img');
    image1.src = 'images/boats-rapids.jpg';
    image1.alt = 'rafts in a rapid of the Rio Chama';
  
    const image2 = document.createElement('img');
    image2.src = 'images/gourmet-wine-spread-jonathan-borba.jpg';
    image2.alt = 'gourmet food spread with wine';
  
    const image3 = document.createElement('img');
    image3.src = './images/dessert- anna-tukhfatullina.jpg';
    image3.alt = 'gourmet steak';
  
    const image4 = document.createElement('img');
    image4.src = 'images/table.jpg';
    image4.alt = 'people eating at table';
  
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
    p1.textContent = 'Enjoy a 3 day river adventure with gourmet food.';

    const p2 = document.createElement('p');
    p2.textContent = 'The guides handle the labor and our gourmet chef prepares bomb food.';

    main.appendChild(h2);
    main.appendChild(p1);
    main.appendChild(p2);
    return main;
  }

  function generate() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('current-page');
    const main = createMain();
    const imagesDiv = createImagesDiv();
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    menuPage.appendChild(imagesDiv);
    menuPage.append(spacer);
    menuPage.appendChild(main);
    menuPage.append(spacer);

    return menuPage;

  }
  return {generate};
})();

export default MenuPage;