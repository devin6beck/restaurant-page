import Home from "./home";

function createHeader() {
  
  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.classList.add('h1');
  title.textContent = 'Chama Canteen';

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logo = document.createElement('img');
  logo.src = './images/zia-red.png';
  logo.alt = 'zia symbol';
  logo.classList.add('logo');
  logoContainer.appendChild(logo);
  
  const nav = document.createElement('nav');
  nav.classList.add('tabs');

  const homeTab = document.createElement('a');
  homeTab.textContent = 'Home';
  homeTab.classList.add('home');
  homeTab.classList.add('tab');

  const menuTab = document.createElement('a');
  menuTab.textContent = 'Menu';
  menuTab.classList.add('menu');
  menuTab.classList.add('tab');

  const contactTab = document.createElement('a');
  contactTab.textContent = 'Contact';
  contactTab.classList.add('contact');
  contactTab.classList.add('tab');

  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);


  header.appendChild(title);
  header.appendChild(logoContainer);
  header.appendChild(nav);

  return header;

}

function createSpacer() {
  const spacer = document.createElement('div');
  spacer.classList.add('spacer');

  return spacer;
}

function createImageContainer() {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('food-images');
  imageContainer.classList.add('current-page');

  const foodSpreadImage = document.createElement('img');
  foodSpreadImage.src = './images/gourmet-food-spread.jpg';
  foodSpreadImage.alt = 'gourmet food spread';

  const wineSpreadImage = document.createElement('img');
  foodSpreadImage.src = './images/gourmet-wine-spread-jonathan-borba.jpg';
  foodSpreadImage.alt = 'gourmet food spread';

  const steakImage = document.createElement('img');
  foodSpreadImage.src = './images/steak-justus-menke.jpg';
  foodSpreadImage.alt = 'gourmet steak';

  const dessertImage = document.createElement('img');
  foodSpreadImage.src = './images/dessert- anna-tukhfatullina.jpg';
  foodSpreadImage.alt = 'gourmet dessert';

  imageContainer.appendChild(foodSpreadImage);
  imageContainer.appendChild(wineSpreadImage);
  imageContainer.appendChild(steakImage);
  imageContainer.appendChild(dessertImage);

  return imageContainer;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const span = document.createElement('span');
  span.textContent = 'Made by ';

  const github = document.createElement('a');
  github.href = 'https://github.com/devin6beck';
  github.textContent = 'Devin Beck';

  span.appendChild(github);
  footer.appendChild(span);

  return footer;
}

function initialPage() {
  const body = document.querySelector('body')
  const header = createHeader();
  const homepage = Home.generate();
  const footer = createFooter();

  body.appendChild(header);
  body.appendChild(createSpacer());
  body.appendChild(homepage);
  body.appendChild(footer);



}

export default initialPage;