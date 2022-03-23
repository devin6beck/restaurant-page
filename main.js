/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    p1.textContent = 'Give us a call or schedule your trip online today!\
                      010-010-0123';

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


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
  const homepage = _home__WEBPACK_IMPORTED_MODULE_0__["default"].generate();
  const footer = createFooter();

  body.appendChild(header);
  body.appendChild(createSpacer());
  body.appendChild(homepage);
  body.appendChild(footer);



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    image3.alt = 'gourmet dessert cake';
  
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
    p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
                      Curabitur vestibulum hendrerit ligula vitae ultricies.\
                      Aenean imperdiet ipsum et ornare mollis. Fusce sit amet\
                      nibh enim. Nullam sed dolor at massa placerat malesuada\
                      in at dui. Nam ultrices efficitur orci vel rhoncus. Mauris\
                      vitae aliquet nisi, et facilisis mauris.';

    const p2 = document.createElement('p');
    p2.textContent = 'Delicious food, amazing wine, and a beautiful view by the river.';

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
    const menuPage = document.createElement('div');
    menuPage.classList.add('current-page');
    const main = createMain();
    const imagesDiv = createImagesDiv();
    menuPage.appendChild(imagesDiv);
    menuPage.append(createSpacer());
    menuPage.appendChild(main);
    menuPage.append(createSpacer());

    return menuPage;

  }
  return {generate};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ "./src/initial.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_initial__WEBPACK_IMPORTED_MODULE_0__["default"])();

window.onload = function() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.addEventListener('click', tabClickHandler));

  function tabClickHandler(e) {
    console.log(`clicked ${e.target.className}`)
    switch (e.target.className) {
      case "home tab": renderPage(_home__WEBPACK_IMPORTED_MODULE_1__["default"].generate()); break;
      case 'menu tab': renderPage(_menu__WEBPACK_IMPORTED_MODULE_2__["default"].generate()); break;
      case 'contact tab': renderPage(_contact__WEBPACK_IMPORTED_MODULE_3__["default"].generate());
    }
  }
}

function renderPage(newPage) {
  const footer = document.querySelector('.footer');
  const previousPage = document.querySelector('.current-page');
  previousPage.remove();

  footer.insertAdjacentElement('beforebegin', newPage);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDdkUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNsRkc7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQWE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3ZIMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7O1VDNUV2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ047QUFDQTtBQUNNOztBQUVoQyxvREFBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0Esa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQsa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQscUNBQXFDLHlEQUFnQjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnRhY3RQYWdlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjcmVhdGVJbWFnZXNEaXYoKSB7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VzRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2VzJyk7XG4gIFxuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMS5zcmMgPSAnaW1hZ2VzL3N1cC5qcGVnJztcbiAgICBpbWFnZTEuYWx0ID0gJ3dvbWFuIG9uIGEgc3RhbmQgdXAgcGFkZGxlIGJvYXJkJztcbiAgXG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLnNyYyA9ICdpbWFnZXMvZm9vZC5qcGcnO1xuICAgIGltYWdlMi5hbHQgPSAnZ291cm1ldCBmb29kIHBsYXRlIHdpdGggd2luZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5zcmMgPSAnLi9pbWFnZXMvZGVzc2VydDIuanBnJztcbiAgICBpbWFnZTMuYWx0ID0gJ2dvdXJtZXQgY2FrZSBzcHJlYWQnO1xuICBcbiAgICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTQuc3JjID0gJ2ltYWdlcy9sdWtlLmpwZyc7XG4gICAgaW1hZ2U0LmFsdCA9ICdndWlkZSBob2xkaW5nIGRyaW5rcyc7XG4gIFxuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICAgIHJldHVybiBpbWFnZXNEaXZcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnR2l2ZSB1cyBhIGNhbGwgb3Igc2NoZWR1bGUgeW91ciB0cmlwIG9ubGluZSB0b2RheSFcXFxuICAgICAgICAgICAgICAgICAgICAgIDAxMC0wMTAtMDEyMyc7XG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICdUaGUgZ3VpZGVzIGhhbmRsZSB0aGUgbGFib3IgYW5kIG91ciBnb3VybWV0IGNoZWYgcHJlcGFyZXMgYm9tYiBmb29kLic7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAyKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFjZXIoKSB7XG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcGFjZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2VyJyk7XG5cbiAgcmV0dXJuIHNwYWNlcjtcbn1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluKCk7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gY3JlYXRlSW1hZ2VzRGl2KCk7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2VzRGl2KTtcbiAgICBjb250YWN0UGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZChjcmVhdGVTcGFjZXIoKSk7XG5cbiAgICByZXR1cm4gY29udGFjdFBhZ2U7XG5cbiAgfVxuICByZXR1cm4ge2dlbmVyYXRlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlOyIsImNvbnN0IEhvbWVwYWdlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjcmVhdGVJbWFnZXNEaXYoKSB7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VzRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2VzJyk7XG4gIFxuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMS5zcmMgPSAnaW1hZ2VzL3NjZW5lLmpwZyc7XG4gICAgaW1hZ2UxLmFsdCA9ICdyaXZlcmJhbmsgd2l0aCBtb3VudGFpbiBpbiBiYWNrZ3JvdW5kJztcbiAgXG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLnNyYyA9ICdpbWFnZXMvZ291cm1ldC1mb29kLXNwcmVhZC5qcGcnO1xuICAgIGltYWdlMi5hbHQgPSAnZ291cm1ldCBmb29kIHNwcmVhZCB3aXRoIHdpbmUnO1xuICBcbiAgICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTMuc3JjID0gJ2ltYWdlcy9zdGVhay1qdXN0dXMtbWVua2UuanBnJztcbiAgICBpbWFnZTMuYWx0ID0gJ2dvdXJtZXQgc3RlYWsnO1xuICBcbiAgICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTQuc3JjID0gJ2ltYWdlcy9ib2F0cy1lZGR5LmpwZyc7XG4gICAgaW1hZ2U0LmFsdCA9ICdyYWZ0cyBuZXh0IHRvIHNob3JlJztcbiAgXG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gICAgcmV0dXJuIGltYWdlc0RpdlxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSBcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFxcXG4gICAgRG9uZWMgdmVuZW5hdGlzIGlwc3VtIHF1aXMgdmVsaXQgZmF1Y2lidXMgYWNjdW1zYW4uIERvbmVjIFxcXG4gICAgbmVjIGlwc3VtIHV0IHB1cnVzIGxhb3JlZXQgZGljdHVtLiBGdXNjZSBpZCBsZWN0dXMgdXJuYS4gXFxcbiAgICBNYWVjZW5hcyBpbiBzYXBpZW4gbWFsZXN1YWRhLCBjb21tb2RvIGR1aSBxdWlzLCBlZmZpY2l0dXJcXFxuICAgIG1pLiBGdXNjZSBhdCBwb3J0dGl0b3IgZGlhbSwgZXQgdm9sdXRwYXQgYXJjdS4gU3VzcGVuZGlzc2VcXFxuICAgIGF0IG1hc3NhIGxlby4gUGVsbGVudGVzcXVlIGluIHJ1dHJ1bSBsaWd1bGEuIFNlZCB1dCBsb3JlbVxcXG4gICAgbWFzc2EuIFNlZCBtYWxlc3VhZGEsIG1pIG5lYyBlZ2VzdGFzIHBsYWNlcmF0LCBsb3JlbSBtZXR1c1xcXG4gICAgcGVsbGVudGVzcXVlIGRvbG9yLCBldSB0ZW1wb3IgZGlhbSBlbmltIGNvbnNlcXVhdCBsZWN0dXMuXFxcbiAgICBNb3JiaSB2ZWwgbGliZXJvIGRpYW0uIEZ1c2NlIGRhcGlidXMgbW9sbGlzIG1hZ25hLCBxdWlzXFxcbiAgICB1bHRyaWNlcyB0dXJwaXMgdWx0cmljZXMgcG9zdWVyZS4gU2VkIHB1cnVzIHRvcnRvcixcXFxuICAgIHVsdHJpY2llcyB2aXRhZSBwaGFyZXRyYSBhYywgc2FnaXR0aXMgaW4gb2Rpby5cIlxuXG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICdUaGUgZ3VpZGVzIGhhbmRsZSB0aGUgbGFib3IgYW5kIG91ciBnb3VybWV0IGNoZWYgcHJlcGFyZXMgYm9tYiBmb29kLic7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAyKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFjZXIoKSB7XG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcGFjZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2VyJyk7XG5cbiAgcmV0dXJuIHNwYWNlcjtcbn1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluKCk7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gY3JlYXRlSW1hZ2VzRGl2KCk7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2VzRGl2KTtcbiAgICBob21lUGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGhvbWVQYWdlLmFwcGVuZChjcmVhdGVTcGFjZXIoKSk7XG5cbiAgICByZXR1cm4gaG9tZVBhZ2U7XG5cbiAgfVxuICByZXR1cm4ge2dlbmVyYXRlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyIsImltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0NoYW1hIENhbnRlZW4nO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9nby5zcmMgPSAnLi9pbWFnZXMvemlhLXJlZC5wbmcnO1xuICBsb2dvLmFsdCA9ICd6aWEgc3ltYm9sJztcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIFxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcblxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBob21lVGFiLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICByZXR1cm4gaGVhZGVyO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYWNlcigpIHtcbiAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNwYWNlci5jbGFzc0xpc3QuYWRkKCdzcGFjZXInKTtcblxuICByZXR1cm4gc3BhY2VyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYWdlJyk7XG5cbiAgY29uc3QgZm9vZFNwcmVhZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZvb2RTcHJlYWRJbWFnZS5zcmMgPSAnLi9pbWFnZXMvZ291cm1ldC1mb29kLXNwcmVhZC5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgZm9vZCBzcHJlYWQnO1xuXG4gIGNvbnN0IHdpbmVTcHJlYWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2dvdXJtZXQtd2luZS1zcHJlYWQtam9uYXRoYW4tYm9yYmEuanBnJztcbiAgZm9vZFNwcmVhZEltYWdlLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkJztcblxuICBjb25zdCBzdGVha0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZvb2RTcHJlYWRJbWFnZS5zcmMgPSAnLi9pbWFnZXMvc3RlYWstanVzdHVzLW1lbmtlLmpwZyc7XG4gIGZvb2RTcHJlYWRJbWFnZS5hbHQgPSAnZ291cm1ldCBzdGVhayc7XG5cbiAgY29uc3QgZGVzc2VydEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZvb2RTcHJlYWRJbWFnZS5zcmMgPSAnLi9pbWFnZXMvZGVzc2VydC0gYW5uYS10dWtoZmF0dWxsaW5hLmpwZyc7XG4gIGZvb2RTcHJlYWRJbWFnZS5hbHQgPSAnZ291cm1ldCBkZXNzZXJ0JztcblxuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kU3ByZWFkSW1hZ2UpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5lU3ByZWFkSW1hZ2UpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVha0ltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydEltYWdlKTtcblxuICByZXR1cm4gaW1hZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gJ01hZGUgYnkgJztcblxuICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZXZpbjZiZWNrJztcbiAgZ2l0aHViLnRleHRDb250ZW50ID0gJ0RldmluIEJlY2snO1xuXG4gIHNwYW4uYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBob21lcGFnZSA9IEhvbWUuZ2VuZXJhdGUoKTtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVNwYWNlcigpKTtcbiAgYm9keS5hcHBlbmRDaGlsZChob21lcGFnZSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2U7IiwiY29uc3QgTWVudVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW1hZ2VzRGl2KCkge1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlcycpO1xuICBcbiAgICBjb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTEuc3JjID0gJ2ltYWdlcy9ib2F0cy1yYXBpZHMuanBnJztcbiAgICBpbWFnZTEuYWx0ID0gJ3JhZnRzIGluIGEgcmFwaWQgb2YgdGhlIFJpbyBDaGFtYSc7XG4gIFxuICAgIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMi5zcmMgPSAnaW1hZ2VzL2dvdXJtZXQtd2luZS1zcHJlYWQtam9uYXRoYW4tYm9yYmEuanBnJztcbiAgICBpbWFnZTIuYWx0ID0gJ2dvdXJtZXQgZm9vZCBzcHJlYWQgd2l0aCB3aW5lJztcbiAgXG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UzLnNyYyA9ICcuL2ltYWdlcy9kZXNzZXJ0LSBhbm5hLXR1a2hmYXR1bGxpbmEuanBnJztcbiAgICBpbWFnZTMuYWx0ID0gJ2dvdXJtZXQgZGVzc2VydCBjYWtlJztcbiAgXG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2U0LnNyYyA9ICdpbWFnZXMvdGFibGUuanBnJztcbiAgICBpbWFnZTQuYWx0ID0gJ3Blb3BsZSBlYXRpbmcgYXQgdGFibGUnO1xuICBcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgICByZXR1cm4gaW1hZ2VzRGl2XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXFxcbiAgICAgICAgICAgICAgICAgICAgICBDdXJhYml0dXIgdmVzdGlidWx1bSBoZW5kcmVyaXQgbGlndWxhIHZpdGFlIHVsdHJpY2llcy5cXFxuICAgICAgICAgICAgICAgICAgICAgIEFlbmVhbiBpbXBlcmRpZXQgaXBzdW0gZXQgb3JuYXJlIG1vbGxpcy4gRnVzY2Ugc2l0IGFtZXRcXFxuICAgICAgICAgICAgICAgICAgICAgIG5pYmggZW5pbS4gTnVsbGFtIHNlZCBkb2xvciBhdCBtYXNzYSBwbGFjZXJhdCBtYWxlc3VhZGFcXFxuICAgICAgICAgICAgICAgICAgICAgIGluIGF0IGR1aS4gTmFtIHVsdHJpY2VzIGVmZmljaXR1ciBvcmNpIHZlbCByaG9uY3VzLiBNYXVyaXNcXFxuICAgICAgICAgICAgICAgICAgICAgIHZpdGFlIGFsaXF1ZXQgbmlzaSwgZXQgZmFjaWxpc2lzIG1hdXJpcy4nO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnRGVsaWNpb3VzIGZvb2QsIGFtYXppbmcgd2luZSwgYW5kIGEgYmVhdXRpZnVsIHZpZXcgYnkgdGhlIHJpdmVyLic7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAyKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFjZXIoKSB7XG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcGFjZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2VyJyk7XG5cbiAgcmV0dXJuIHNwYWNlcjtcbn1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluKCk7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gY3JlYXRlSW1hZ2VzRGl2KCk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2VzRGl2KTtcbiAgICBtZW51UGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIG1lbnVQYWdlLmFwcGVuZChjcmVhdGVTcGFjZXIoKSk7XG5cbiAgICByZXR1cm4gbWVudVBhZ2U7XG5cbiAgfVxuICByZXR1cm4ge2dlbmVyYXRlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWwgZnJvbSAnLi9pbml0aWFsJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuaW5pdGlhbCgpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiQ2xpY2tIYW5kbGVyKSk7XG5cbiAgZnVuY3Rpb24gdGFiQ2xpY2tIYW5kbGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCAke2UudGFyZ2V0LmNsYXNzTmFtZX1gKVxuICAgIHN3aXRjaCAoZS50YXJnZXQuY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlIFwiaG9tZSB0YWJcIjogcmVuZGVyUGFnZShob21lLmdlbmVyYXRlKCkpOyBicmVhaztcbiAgICAgIGNhc2UgJ21lbnUgdGFiJzogcmVuZGVyUGFnZShtZW51LmdlbmVyYXRlKCkpOyBicmVhaztcbiAgICAgIGNhc2UgJ2NvbnRhY3QgdGFiJzogcmVuZGVyUGFnZShjb250YWN0LmdlbmVyYXRlKCkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQYWdlKG5ld1BhZ2UpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuICBjb25zdCBwcmV2aW91c1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wYWdlJyk7XG4gIHByZXZpb3VzUGFnZS5yZW1vdmUoKTtcblxuICBmb290ZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIG5ld1BhZ2UpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==