import Home from "./home";

function createHeader() {
  

  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.textContent = 'Chama Canteen';

  header.appendChild(title);

  const nav = document.createElement('nav');
  const tabs = document.createElement('ul');
  tabs.classList.add('tabs');
  const homeTab = document.createElement('li');
  homeTab.classList.add('home');
  homeTab.classList.add('tab');
  homeTab.value = "home";
  homeTab.textContent = 'Home';
  const menuTab = document.createElement('li');
  menuTab.classList.add('menu');
  menuTab.classList.add('tab');
  menuTab.textContent = 'Menu';
  const contactTab = document.createElement('li');
  contactTab.classList.add('contact');
  contactTab.classList.add('tab');
  contactTab.textContent = 'Contact';
  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);

  nav.appendChild(tabs);

  header.appendChild(nav);
  

  return header;

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
/* 
function createRight() {
  const aside = document.createElement('aside');
  aside.classList.add('right');
  const image = document.createElement('img');
  image.src = 'images/rafts-chama.jpg';
  aside.appendChild(image);

  return aside;
}
 */
function initialPage() {
  const content = document.querySelector('.content')
  const header = createHeader();
  const homepage = Home.generate();
  const footer = createFooter();
  // const right = createRight();

  content.appendChild(header);
  content.appendChild(homepage);
  content.appendChild(footer);
  // content.appendChild(right);


}

export default initialPage;