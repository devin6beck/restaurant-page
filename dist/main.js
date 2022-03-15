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
  const homepage = _home__WEBPACK_IMPORTED_MODULE_0__["default"].generate();
  const footer = createFooter();
  // const right = createRight();

  content.appendChild(header);
  content.appendChild(homepage);
  content.appendChild(footer);
  // content.appendChild(right);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDZjFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNHOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNwRjFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVELGlFQUFlLFFBQVE7Ozs7OztVQ2Z2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ047QUFDQTtBQUNNOztBQUVoQyxvREFBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0Esa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQsa0NBQWtDLHNEQUFhLEtBQUs7QUFDcEQscUNBQXFDLHlEQUFnQjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnRhY3RQYWdlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYWdlJyk7XG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9XG4gIHJldHVybiB7Z2VuZXJhdGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiY29uc3QgSG9tZXBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdFbmpveSBhIDMgZGF5IHJpdmVyIGFkdmVudHVyZSB3aXRoIGdvdXJtZXQgZm9vZC4nO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGd1aWRlcyBoYW5kbGUgdGhlIGxhYm9yIGFuZCBvdXIgZ291cm1ldCBjaGVmIHByZXBhcmVzIGJvbWIgZm9vZCc7XG5cbiAgICBjb25zdCBpbWFnZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcblxuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMS5zcmMgPSAnaW1hZ2VzL2dvdXJtZXQtZm9vZC1zcHJlYWQuanBnJztcbiAgICBpbWFnZTEuYWx0ID0gJ2dvdXJtZXQgZm9vZCBzcHJlYWQnO1xuXG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLnNyYyA9ICdpbWFnZXMvZ291cm1ldC13aW5lLXNwcmVhZC1qb25hdGhhbi1ib3JiYS5qcGcnO1xuICAgIGltYWdlMi5hbHQgPSAnZ291cm1ldCBmb29kIHNwcmVhZCB3aXRoIHdpbmUnO1xuXG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UzLnNyYyA9ICdpbWFnZXMvc3RlYWstanVzdHVzLW1lbmtlLmpwZyc7XG4gICAgaW1hZ2UzLmFsdCA9ICdnb3VybWV0IHN0ZWFrJztcblxuICAgIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlNC5zcmMgPSAnaW1hZ2VzL2Rlc3NlcnQtIGFubmEtdHVraGZhdHVsbGluYS5qcGcnO1xuICAgIGltYWdlNC5hbHQgPSAnZ291cm1ldCBkZXNzZXJ0JztcblxuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocDEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocDIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1hZ2VzRGl2KTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuICByZXR1cm4ge2dlbmVyYXRlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyIsImltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ2hhbWEgQ2FudGVlbic7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHRhYnMuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGhvbWVUYWIudmFsdWUgPSBcImhvbWVcIjtcbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgbmF2LmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICBcblxuICByZXR1cm4gaGVhZGVyO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gJ01hZGUgYnkgJztcblxuICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZXZpbjZiZWNrJztcbiAgZ2l0aHViLnRleHRDb250ZW50ID0gJ0RldmluIEJlY2snO1xuXG4gIHNwYW4uYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG4vKiBcbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0KCkge1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNyYyA9ICdpbWFnZXMvcmFmdHMtY2hhbWEuanBnJztcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIHJldHVybiBhc2lkZTtcbn1cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBob21lcGFnZSA9IEhvbWUuZ2VuZXJhdGUoKTtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gIC8vIGNvbnN0IHJpZ2h0ID0gY3JlYXRlUmlnaHQoKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2U7IiwiY29uc3QgTWVudVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH1cbiAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsIGZyb20gJy4vaW5pdGlhbCc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmluaXRpYWwoKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYkNsaWNrSGFuZGxlcikpO1xuXG4gIGZ1bmN0aW9uIHRhYkNsaWNrSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgJHtlLnRhcmdldC5jbGFzc05hbWV9YClcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmNsYXNzTmFtZSkge1xuICAgICAgY2FzZSBcImhvbWUgdGFiXCI6IHJlbmRlclBhZ2UoaG9tZS5nZW5lcmF0ZSgpKTsgYnJlYWs7XG4gICAgICBjYXNlICdtZW51IHRhYic6IHJlbmRlclBhZ2UobWVudS5nZW5lcmF0ZSgpKTsgYnJlYWs7XG4gICAgICBjYXNlICdjb250YWN0IHRhYic6IHJlbmRlclBhZ2UoY29udGFjdC5nZW5lcmF0ZSgpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZShuZXdQYWdlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcbiAgY29uc3QgcHJldmlvdXNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcGFnZScpO1xuICBwcmV2aW91c1BhZ2UucmVtb3ZlKCk7XG5cbiAgZm9vdGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBuZXdQYWdlKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=