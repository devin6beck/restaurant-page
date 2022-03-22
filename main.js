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
    return imagesDiv
  }

  function createMain() {
    const main = document.createElement('main');
    main.classList.add('main')

    const h2 = document.createElement('h2');
    h2.textContent = 'Description';

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
    const homePage = document.createElement('div');
    homePage.classList.add('current-page');
    const main = createMain();
    const imagesDiv = createImagesDiv();
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    homePage.appendChild(imagesDiv);
    homePage.append(spacer);
    homePage.appendChild(main);

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
  body.appendChild(createSpacer());
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
  function generate() {
    const main = document.createElement('main');
    main.classList.add('current-page');

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';

    main.appendChild(h2);

    return main;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDZjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ2hFRzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBYTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUN4SDFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFFBQVE7Ozs7OztVQ2Z2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ047QUFDQTtBQUNNOztBQUVoQyxvREFBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0Esa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQsa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQscUNBQXFDLHlEQUFnQjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnRhY3RQYWdlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYWdlJyk7XG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9XG4gIHJldHVybiB7Z2VuZXJhdGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiY29uc3QgSG9tZXBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUltYWdlc0RpdigpIHtcbiAgICBjb25zdCBpbWFnZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcbiAgXG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UxLnNyYyA9ICdpbWFnZXMvZ291cm1ldC1mb29kLXNwcmVhZC5qcGcnO1xuICAgIGltYWdlMS5hbHQgPSAnZ291cm1ldCBmb29kIHNwcmVhZCc7XG4gIFxuICAgIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMi5zcmMgPSAnaW1hZ2VzL2dvdXJtZXQtd2luZS1zcHJlYWQtam9uYXRoYW4tYm9yYmEuanBnJztcbiAgICBpbWFnZTIuYWx0ID0gJ2dvdXJtZXQgZm9vZCBzcHJlYWQgd2l0aCB3aW5lJztcbiAgXG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UzLnNyYyA9ICdpbWFnZXMvc3RlYWstanVzdHVzLW1lbmtlLmpwZyc7XG4gICAgaW1hZ2UzLmFsdCA9ICdnb3VybWV0IHN0ZWFrJztcbiAgXG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2U0LnNyYyA9ICdpbWFnZXMvZGVzc2VydC0gYW5uYS10dWtoZmF0dWxsaW5hLmpwZyc7XG4gICAgaW1hZ2U0LmFsdCA9ICdnb3VybWV0IGRlc3NlcnQnO1xuICBcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgICByZXR1cm4gaW1hZ2VzRGl2XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdFbmpveSBhIDMgZGF5IHJpdmVyIGFkdmVudHVyZSB3aXRoIGdvdXJtZXQgZm9vZC4nO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGd1aWRlcyBoYW5kbGUgdGhlIGxhYm9yIGFuZCBvdXIgZ291cm1ldCBjaGVmIHByZXBhcmVzIGJvbWIgZm9vZC4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluKCk7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gY3JlYXRlSW1hZ2VzRGl2KCk7XG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlcicpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGltYWdlc0Rpdik7XG4gICAgaG9tZVBhZ2UuYXBwZW5kKHNwYWNlcik7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICByZXR1cm4gaG9tZVBhZ2U7XG5cbiAgfVxuICByZXR1cm4ge2dlbmVyYXRlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyIsImltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0NoYW1hIENhbnRlZW4nO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9nby5zcmMgPSAnLi9pbWFnZXMvemlhLXJlZC5wbmcnO1xuICBsb2dvLmFsdCA9ICd6aWEgc3ltYm9sJztcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIFxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcblxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBob21lVGFiLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICByZXR1cm4gaGVhZGVyO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYWNlcigpIHtcbiAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNwYWNlci5jbGFzc0xpc3QuYWRkKCdzcGFjZXInKTtcblxuICByZXR1cm4gc3BhY2VyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYWdlJyk7XG5cbiAgY29uc3QgZm9vZFNwcmVhZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZvb2RTcHJlYWRJbWFnZS5zcmMgPSAnLi9pbWFnZXMvZ291cm1ldC1mb29kLXNwcmVhZC5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgZm9vZCBzcHJlYWQnO1xuXG4gIGNvbnN0IHdpbmVTcHJlYWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2dvdXJtZXQtd2luZS1zcHJlYWQtam9uYXRoYW4tYm9yYmEuanBnJztcbiAgZm9vZFNwcmVhZEltYWdlLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkJztcblxuICBjb25zdCBzdGVha0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZvb2RTcHJlYWRJbWFnZS5zcmMgPSAnLi9pbWFnZXMvc3RlYWstanVzdHVzLW1lbmtlLmpwZyc7XG4gIGZvb2RTcHJlYWRJbWFnZS5hbHQgPSAnZ291cm1ldCBzdGVhayc7XG5cbiAgY29uc3QgZGVzc2VydEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZvb2RTcHJlYWRJbWFnZS5zcmMgPSAnLi9pbWFnZXMvZGVzc2VydC0gYW5uYS10dWtoZmF0dWxsaW5hLmpwZyc7XG4gIGZvb2RTcHJlYWRJbWFnZS5hbHQgPSAnZ291cm1ldCBkZXNzZXJ0JztcblxuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kU3ByZWFkSW1hZ2UpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5lU3ByZWFkSW1hZ2UpO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVha0ltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydEltYWdlKTtcblxuICByZXR1cm4gaW1hZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gJ01hZGUgYnkgJztcblxuICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZXZpbjZiZWNrJztcbiAgZ2l0aHViLnRleHRDb250ZW50ID0gJ0RldmluIEJlY2snO1xuXG4gIHNwYW4uYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBob21lcGFnZSA9IEhvbWUuZ2VuZXJhdGUoKTtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVNwYWNlcigpKTtcbiAgYm9keS5hcHBlbmRDaGlsZChob21lcGFnZSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhY2VyKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlOyIsImNvbnN0IE1lbnVQYWdlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYWdlJyk7XG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9XG4gIHJldHVybiB7Z2VuZXJhdGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbCBmcm9tICcuL2luaXRpYWwnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuXG5pbml0aWFsKCk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJDbGlja0hhbmRsZXIpKTtcblxuICBmdW5jdGlvbiB0YWJDbGlja0hhbmRsZXIoZSkge1xuICAgIGNvbnNvbGUubG9nKGBjbGlja2VkICR7ZS50YXJnZXQuY2xhc3NOYW1lfWApXG4gICAgc3dpdGNoIChlLnRhcmdldC5jbGFzc05hbWUpIHtcbiAgICAgIGNhc2UgXCJob21lIHRhYlwiOiByZW5kZXJQYWdlKGhvbWUuZ2VuZXJhdGUoKSk7IGJyZWFrO1xuICAgICAgY2FzZSAnbWVudSB0YWInOiByZW5kZXJQYWdlKG1lbnUuZ2VuZXJhdGUoKSk7IGJyZWFrO1xuICAgICAgY2FzZSAnY29udGFjdCB0YWInOiByZW5kZXJQYWdlKGNvbnRhY3QuZ2VuZXJhdGUoKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UobmV3UGFnZSkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXBhZ2UnKTtcbiAgcHJldmlvdXNQYWdlLnJlbW92ZSgpO1xuXG4gIGZvb3Rlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbmV3UGFnZSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9