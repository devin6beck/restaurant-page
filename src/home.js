const Homepage = (function() {
  function generate() {
    const main = document.createElement('main');
    main.classList.add('current-page');

    const h2 = document.createElement('h2');
    h2.textContent = 'Description';

    const p1 = document.createElement('p');
    p1.textContent = 'Enjoy a 3 day river adventure with gourmet food.';

    const p2 = document.createElement('p');
    p2.textContent = 'The guides handle the labor and our gourmet chef prepares bomb food';

    const imagesDiv = document.createElement('div');
    imagesDiv.classList.add('food-images');

    const image1 = document.createElement('img');
    image1.src = 'images/gourmet-food-spread.jpg';
    image1.alt = 'gourmet food spread';

    const image2 = document.createElement('img');
    image2.src = 'images/gourmet-wine-spread-jonathan-borba.jpg';
    image2.alt = 'gourmet food spread with wine';

    const image3 = document.createElement('img');
    image3.src = 'images/steak-justus-menke.jpg';
    image3.alt = 'gourmet steak';

    const image4 = document.createElement('img');
    image4.src = 'images/dessert- anna-tukhfatullina.jpg';
    image4.alt = 'gourmet dessert';

    imagesDiv.appendChild(image1);
    imagesDiv.appendChild(image2);
    imagesDiv.appendChild(image3);
    imagesDiv.appendChild(image4);
    main.appendChild(h2);
    main.appendChild(p1);
    main.appendChild(p2);
    main.appendChild(imagesDiv);
    return main;
  }
  return {generate};
})();

export default Homepage;