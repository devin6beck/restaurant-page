const Homepage = (function() {
  function createImagesDiv() {
    const imagesDiv = document.createElement('div');
    imagesDiv.classList.add('food-images');
  
    const image1 = document.createElement('img');
    image1.src = 'images/scene.jpg';
    image1.alt = 'riverbank with mountain in background';
  
    const image2 = document.createElement('img');
    image2.src = 'images/gourmet-food-spread.jpg';
    image2.alt = 'gourmet food spread with wine';
  
    const image3 = document.createElement('img');
    image3.src = 'images/steak-justus-menke.jpg';
    image3.alt = 'gourmet steak';
  
    const image4 = document.createElement('img');
    image4.src = 'images/boats-eddy.jpg';
    image4.alt = 'rafts next to shore';
  
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
    h2.textContent = 'Description';

    const p1 = document.createElement('p');
    p1.textContent = 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Donec venenatis ipsum quis velit faucibus accumsan. Donec \
    nec ipsum ut purus laoreet dictum. Fusce id lectus urna. \
    Maecenas in sapien malesuada, commodo dui quis, efficitur\
    mi. Fusce at porttitor diam, et volutpat arcu. Suspendisse\
    at massa leo. Pellentesque in rutrum ligula. Sed ut lorem\
    massa. Sed malesuada, mi nec egestas placerat, lorem metus\
    pellentesque dolor, eu tempor diam enim consequat lectus.\
    Morbi vel libero diam. Fusce dapibus mollis magna, quis\
    ultrices turpis ultrices posuere. Sed purus tortor,\
    ultricies vitae pharetra ac, sagittis in odio."


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
    const homePage = document.createElement('div');
    homePage.classList.add('current-page');
    const main = createMain();
    const imagesDiv = createImagesDiv();
    homePage.appendChild(imagesDiv);
    homePage.append(createSpacer());
    homePage.appendChild(main);
    homePage.append(createSpacer());

    return homePage;

  }
  return {generate};
})();

export default Homepage;