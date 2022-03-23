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
    p1.textContent = 'Enjoy a 3 day river adventure with gourmet food.';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3RFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZHOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFhO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUN2SDFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7O1VDdkV2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ047QUFDQTtBQUNNOztBQUVoQyxvREFBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0Esa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQsa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQscUNBQXFDLHlEQUFnQjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnRhY3RQYWdlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjcmVhdGVJbWFnZXNEaXYoKSB7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VzRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2VzJyk7XG4gIFxuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMS5zcmMgPSAnaW1hZ2VzL3N1cC5qcGVnJztcbiAgICBpbWFnZTEuYWx0ID0gJ3dvbWFuIG9uIGEgc3RhbmQgdXAgcGFkZGxlIGJvYXJkJztcbiAgXG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLnNyYyA9ICdpbWFnZXMvZm9vZC5qcGcnO1xuICAgIGltYWdlMi5hbHQgPSAnZ291cm1ldCBmb29kIHBsYXRlIHdpdGggd2luZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5zcmMgPSAnLi9pbWFnZXMvZGVzc2VydDIuanBnJztcbiAgICBpbWFnZTMuYWx0ID0gJ2dvdXJtZXQgY2FrZSBzcHJlYWQnO1xuICBcbiAgICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTQuc3JjID0gJ2ltYWdlcy9sdWtlLmpwZyc7XG4gICAgaW1hZ2U0LmFsdCA9ICdndWlkZSBob2xkaW5nIGRyaW5rcyc7XG4gIFxuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICAgIHJldHVybiBpbWFnZXNEaXZcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnR2l2ZSB1cyBhIGNhbGwgb3Igc2NoZWR1bGUgeW91ciB0cmlwIG9ubGluZSB0b2RheSEnO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGd1aWRlcyBoYW5kbGUgdGhlIGxhYm9yIGFuZCBvdXIgZ291cm1ldCBjaGVmIHByZXBhcmVzIGJvbWIgZm9vZC4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuZnVuY3Rpb24gY3JlYXRlU3BhY2VyKCkge1xuICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlcicpO1xuXG4gIHJldHVybiBzcGFjZXI7XG59XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0UGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGNyZWF0ZUltYWdlc0RpdigpO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGltYWdlc0Rpdik7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kKGNyZWF0ZVNwYWNlcigpKTtcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250YWN0UGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RQYWdlO1xuXG4gIH1cbiAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTsiLCJjb25zdCBIb21lcGFnZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY3JlYXRlSW1hZ2VzRGl2KCkge1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlcycpO1xuICBcbiAgICBjb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTEuc3JjID0gJ2ltYWdlcy9zY2VuZS5qcGcnO1xuICAgIGltYWdlMS5hbHQgPSAncml2ZXJiYW5rIHdpdGggbW91bnRhaW4gaW4gYmFja2dyb3VuZCc7XG4gIFxuICAgIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMi5zcmMgPSAnaW1hZ2VzL2dvdXJtZXQtZm9vZC1zcHJlYWQuanBnJztcbiAgICBpbWFnZTIuYWx0ID0gJ2dvdXJtZXQgZm9vZCBzcHJlYWQgd2l0aCB3aW5lJztcbiAgXG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UzLnNyYyA9ICdpbWFnZXMvc3RlYWstanVzdHVzLW1lbmtlLmpwZyc7XG4gICAgaW1hZ2UzLmFsdCA9ICdnb3VybWV0IHN0ZWFrJztcbiAgXG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2U0LnNyYyA9ICdpbWFnZXMvYm9hdHMtZWRkeS5qcGcnO1xuICAgIGltYWdlNC5hbHQgPSAncmFmdHMgbmV4dCB0byBzaG9yZSc7XG4gIFxuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICAgIHJldHVybiBpbWFnZXNEaXZcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBcXFxuICAgIERvbmVjIHZlbmVuYXRpcyBpcHN1bSBxdWlzIHZlbGl0IGZhdWNpYnVzIGFjY3Vtc2FuLiBEb25lYyBcXFxuICAgIG5lYyBpcHN1bSB1dCBwdXJ1cyBsYW9yZWV0IGRpY3R1bS4gRnVzY2UgaWQgbGVjdHVzIHVybmEuIFxcXG4gICAgTWFlY2VuYXMgaW4gc2FwaWVuIG1hbGVzdWFkYSwgY29tbW9kbyBkdWkgcXVpcywgZWZmaWNpdHVyXFxcbiAgICBtaS4gRnVzY2UgYXQgcG9ydHRpdG9yIGRpYW0sIGV0IHZvbHV0cGF0IGFyY3UuIFN1c3BlbmRpc3NlXFxcbiAgICBhdCBtYXNzYSBsZW8uIFBlbGxlbnRlc3F1ZSBpbiBydXRydW0gbGlndWxhLiBTZWQgdXQgbG9yZW1cXFxuICAgIG1hc3NhLiBTZWQgbWFsZXN1YWRhLCBtaSBuZWMgZWdlc3RhcyBwbGFjZXJhdCwgbG9yZW0gbWV0dXNcXFxuICAgIHBlbGxlbnRlc3F1ZSBkb2xvciwgZXUgdGVtcG9yIGRpYW0gZW5pbSBjb25zZXF1YXQgbGVjdHVzLlxcXG4gICAgTW9yYmkgdmVsIGxpYmVybyBkaWFtLiBGdXNjZSBkYXBpYnVzIG1vbGxpcyBtYWduYSwgcXVpc1xcXG4gICAgdWx0cmljZXMgdHVycGlzIHVsdHJpY2VzIHBvc3VlcmUuIFNlZCBwdXJ1cyB0b3J0b3IsXFxcbiAgICB1bHRyaWNpZXMgdml0YWUgcGhhcmV0cmEgYWMsIHNhZ2l0dGlzIGluIG9kaW8uXCJcblxuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGd1aWRlcyBoYW5kbGUgdGhlIGxhYm9yIGFuZCBvdXIgZ291cm1ldCBjaGVmIHByZXBhcmVzIGJvbWIgZm9vZC4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuZnVuY3Rpb24gY3JlYXRlU3BhY2VyKCkge1xuICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlcicpO1xuXG4gIHJldHVybiBzcGFjZXI7XG59XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGNyZWF0ZUltYWdlc0RpdigpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGltYWdlc0Rpdik7XG4gICAgaG9tZVBhZ2UuYXBwZW5kKGNyZWF0ZVNwYWNlcigpKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBob21lUGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuXG4gICAgcmV0dXJuIGhvbWVQYWdlO1xuXG4gIH1cbiAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdDaGFtYSBDYW50ZWVuJztcblxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvZ28uc3JjID0gJy4vaW1hZ2VzL3ppYS1yZWQucG5nJztcbiAgbG9nby5hbHQgPSAnemlhIHN5bWJvbCc7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFjZXIoKSB7XG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcGFjZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2VyJyk7XG5cbiAgcmV0dXJuIHNwYWNlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VDb250YWluZXIoKSB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2VzJyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuXG4gIGNvbnN0IGZvb2RTcHJlYWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2dvdXJtZXQtZm9vZC1zcHJlYWQuanBnJztcbiAgZm9vZFNwcmVhZEltYWdlLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkJztcblxuICBjb25zdCB3aW5lU3ByZWFkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZm9vZFNwcmVhZEltYWdlLnNyYyA9ICcuL2ltYWdlcy9nb3VybWV0LXdpbmUtc3ByZWFkLWpvbmF0aGFuLWJvcmJhLmpwZyc7XG4gIGZvb2RTcHJlYWRJbWFnZS5hbHQgPSAnZ291cm1ldCBmb29kIHNwcmVhZCc7XG5cbiAgY29uc3Qgc3RlYWtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL3N0ZWFrLWp1c3R1cy1tZW5rZS5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgc3RlYWsnO1xuXG4gIGNvbnN0IGRlc3NlcnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2Rlc3NlcnQtIGFubmEtdHVraGZhdHVsbGluYS5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgZGVzc2VydCc7XG5cbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZFNwcmVhZEltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZVNwcmVhZEltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtJbWFnZSk7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRJbWFnZSk7XG5cbiAgcmV0dXJuIGltYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdNYWRlIGJ5ICc7XG5cbiAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vZGV2aW42YmVjayc7XG4gIGdpdGh1Yi50ZXh0Q29udGVudCA9ICdEZXZpbiBCZWNrJztcblxuICBzcGFuLmFwcGVuZENoaWxkKGdpdGh1Yik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgaG9tZXBhZ2UgPSBIb21lLmdlbmVyYXRlKCk7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTcGFjZXIoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlOyIsImNvbnN0IE1lbnVQYWdlID0gKGZ1bmN0aW9uKCkge1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUltYWdlc0RpdigpIHtcbiAgICBjb25zdCBpbWFnZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcbiAgXG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UxLnNyYyA9ICdpbWFnZXMvYm9hdHMtcmFwaWRzLmpwZyc7XG4gICAgaW1hZ2UxLmFsdCA9ICdyYWZ0cyBpbiBhIHJhcGlkIG9mIHRoZSBSaW8gQ2hhbWEnO1xuICBcbiAgICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTIuc3JjID0gJ2ltYWdlcy9nb3VybWV0LXdpbmUtc3ByZWFkLWpvbmF0aGFuLWJvcmJhLmpwZyc7XG4gICAgaW1hZ2UyLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkIHdpdGggd2luZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5zcmMgPSAnLi9pbWFnZXMvZGVzc2VydC0gYW5uYS10dWtoZmF0dWxsaW5hLmpwZyc7XG4gICAgaW1hZ2UzLmFsdCA9ICdnb3VybWV0IGRlc3NlcnQgY2FrZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlNC5zcmMgPSAnaW1hZ2VzL3RhYmxlLmpwZyc7XG4gICAgaW1hZ2U0LmFsdCA9ICdwZW9wbGUgZWF0aW5nIGF0IHRhYmxlJztcbiAgXG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gICAgcmV0dXJuIGltYWdlc0RpdlxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdFbmpveSBhIDMgZGF5IHJpdmVyIGFkdmVudHVyZSB3aXRoIGdvdXJtZXQgZm9vZC4nO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGd1aWRlcyBoYW5kbGUgdGhlIGxhYm9yIGFuZCBvdXIgZ291cm1ldCBjaGVmIHByZXBhcmVzIGJvbWIgZm9vZC4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuZnVuY3Rpb24gY3JlYXRlU3BhY2VyKCkge1xuICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlcicpO1xuXG4gIHJldHVybiBzcGFjZXI7XG59XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGNyZWF0ZUltYWdlc0RpdigpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGltYWdlc0Rpdik7XG4gICAgbWVudVBhZ2UuYXBwZW5kKGNyZWF0ZVNwYWNlcigpKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtZW51UGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuXG4gICAgcmV0dXJuIG1lbnVQYWdlO1xuXG4gIH1cbiAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsIGZyb20gJy4vaW5pdGlhbCc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmluaXRpYWwoKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYkNsaWNrSGFuZGxlcikpO1xuXG4gIGZ1bmN0aW9uIHRhYkNsaWNrSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgJHtlLnRhcmdldC5jbGFzc05hbWV9YClcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmNsYXNzTmFtZSkge1xuICAgICAgY2FzZSBcImhvbWUgdGFiXCI6IHJlbmRlclBhZ2UoaG9tZS5nZW5lcmF0ZSgpKTsgYnJlYWs7XG4gICAgICBjYXNlICdtZW51IHRhYic6IHJlbmRlclBhZ2UobWVudS5nZW5lcmF0ZSgpKTsgYnJlYWs7XG4gICAgICBjYXNlICdjb250YWN0IHRhYic6IHJlbmRlclBhZ2UoY29udGFjdC5nZW5lcmF0ZSgpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZShuZXdQYWdlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcbiAgY29uc3QgcHJldmlvdXNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcGFnZScpO1xuICBwcmV2aW91c1BhZ2UucmVtb3ZlKCk7XG5cbiAgZm9vdGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBuZXdQYWdlKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=