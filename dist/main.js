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
    homePage.append(spacer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb250YWN0UGFnZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuICByZXR1cm4ge2dlbmVyYXRlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlOyIsImNvbnN0IEhvbWVwYWdlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjcmVhdGVJbWFnZXNEaXYoKSB7XG4gICAgY29uc3QgaW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VzRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2VzJyk7XG4gIFxuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMS5zcmMgPSAnaW1hZ2VzL3NjZW5lLmpwZyc7XG4gICAgaW1hZ2UxLmFsdCA9ICdyaXZlcmJhbmsgd2l0aCBtb3VudGFpbiBpbiBiYWNrZ3JvdW5kJztcbiAgXG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLnNyYyA9ICdpbWFnZXMvZ291cm1ldC1mb29kLXNwcmVhZC5qcGcnO1xuICAgIGltYWdlMi5hbHQgPSAnZ291cm1ldCBmb29kIHNwcmVhZCB3aXRoIHdpbmUnO1xuICBcbiAgICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTMuc3JjID0gJ2ltYWdlcy9zdGVhay1qdXN0dXMtbWVua2UuanBnJztcbiAgICBpbWFnZTMuYWx0ID0gJ2dvdXJtZXQgc3RlYWsnO1xuICBcbiAgICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTQuc3JjID0gJ2ltYWdlcy9ib2F0cy1lZGR5LmpwZyc7XG4gICAgaW1hZ2U0LmFsdCA9ICdyYWZ0cyBuZXh0IHRvIHNob3JlJztcbiAgXG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gICAgcmV0dXJuIGltYWdlc0RpdlxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnRW5qb3kgYSAzIGRheSByaXZlciBhZHZlbnR1cmUgd2l0aCBnb3VybWV0IGZvb2QuJztcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJ1RoZSBndWlkZXMgaGFuZGxlIHRoZSBsYWJvciBhbmQgb3VyIGdvdXJtZXQgY2hlZiBwcmVwYXJlcyBib21iIGZvb2QuJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocDEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocDIpO1xuICAgIHJldHVybiBtYWluO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGNyZWF0ZUltYWdlc0RpdigpO1xuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwYWNlci5jbGFzc0xpc3QuYWRkKCdzcGFjZXInKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChpbWFnZXNEaXYpO1xuICAgIGhvbWVQYWdlLmFwcGVuZChzcGFjZXIpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGhvbWVQYWdlLmFwcGVuZChzcGFjZXIpO1xuXG4gICAgcmV0dXJuIGhvbWVQYWdlO1xuXG4gIH1cbiAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdDaGFtYSBDYW50ZWVuJztcblxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvZ28uc3JjID0gJy4vaW1hZ2VzL3ppYS1yZWQucG5nJztcbiAgbG9nby5hbHQgPSAnemlhIHN5bWJvbCc7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFjZXIoKSB7XG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcGFjZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2VyJyk7XG5cbiAgcmV0dXJuIHNwYWNlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VDb250YWluZXIoKSB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2VzJyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuXG4gIGNvbnN0IGZvb2RTcHJlYWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2dvdXJtZXQtZm9vZC1zcHJlYWQuanBnJztcbiAgZm9vZFNwcmVhZEltYWdlLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkJztcblxuICBjb25zdCB3aW5lU3ByZWFkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZm9vZFNwcmVhZEltYWdlLnNyYyA9ICcuL2ltYWdlcy9nb3VybWV0LXdpbmUtc3ByZWFkLWpvbmF0aGFuLWJvcmJhLmpwZyc7XG4gIGZvb2RTcHJlYWRJbWFnZS5hbHQgPSAnZ291cm1ldCBmb29kIHNwcmVhZCc7XG5cbiAgY29uc3Qgc3RlYWtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL3N0ZWFrLWp1c3R1cy1tZW5rZS5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgc3RlYWsnO1xuXG4gIGNvbnN0IGRlc3NlcnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2Rlc3NlcnQtIGFubmEtdHVraGZhdHVsbGluYS5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgZGVzc2VydCc7XG5cbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZFNwcmVhZEltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZVNwcmVhZEltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtJbWFnZSk7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRJbWFnZSk7XG5cbiAgcmV0dXJuIGltYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdNYWRlIGJ5ICc7XG5cbiAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vZGV2aW42YmVjayc7XG4gIGdpdGh1Yi50ZXh0Q29udGVudCA9ICdEZXZpbiBCZWNrJztcblxuICBzcGFuLmFwcGVuZENoaWxkKGdpdGh1Yik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgaG9tZXBhZ2UgPSBIb21lLmdlbmVyYXRlKCk7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTcGFjZXIoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlOyIsImNvbnN0IE1lbnVQYWdlID0gKGZ1bmN0aW9uKCkge1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUltYWdlc0RpdigpIHtcbiAgICBjb25zdCBpbWFnZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcbiAgXG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UxLnNyYyA9ICdpbWFnZXMvYm9hdHMtcmFwaWRzLmpwZyc7XG4gICAgaW1hZ2UxLmFsdCA9ICdyYWZ0cyBpbiBhIHJhcGlkIG9mIHRoZSBSaW8gQ2hhbWEnO1xuICBcbiAgICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTIuc3JjID0gJ2ltYWdlcy9nb3VybWV0LXdpbmUtc3ByZWFkLWpvbmF0aGFuLWJvcmJhLmpwZyc7XG4gICAgaW1hZ2UyLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkIHdpdGggd2luZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5zcmMgPSAnLi9pbWFnZXMvZGVzc2VydC0gYW5uYS10dWtoZmF0dWxsaW5hLmpwZyc7XG4gICAgaW1hZ2UzLmFsdCA9ICdnb3VybWV0IHN0ZWFrJztcbiAgXG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2U0LnNyYyA9ICdpbWFnZXMvdGFibGUuanBnJztcbiAgICBpbWFnZTQuYWx0ID0gJ3Blb3BsZSBlYXRpbmcgYXQgdGFibGUnO1xuICBcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgICByZXR1cm4gaW1hZ2VzRGl2XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ0Vuam95IGEgMyBkYXkgcml2ZXIgYWR2ZW50dXJlIHdpdGggZ291cm1ldCBmb29kLic7XG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICdUaGUgZ3VpZGVzIGhhbmRsZSB0aGUgbGFib3IgYW5kIG91ciBnb3VybWV0IGNoZWYgcHJlcGFyZXMgYm9tYiBmb29kLic7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHAyKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYWdlJyk7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZU1haW4oKTtcbiAgICBjb25zdCBpbWFnZXNEaXYgPSBjcmVhdGVJbWFnZXNEaXYoKTtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGFjZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2VyJyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2VzRGl2KTtcbiAgICBtZW51UGFnZS5hcHBlbmQoc3BhY2VyKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtZW51UGFnZS5hcHBlbmQoc3BhY2VyKTtcblxuICAgIHJldHVybiBtZW51UGFnZTtcblxuICB9XG4gIHJldHVybiB7Z2VuZXJhdGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbCBmcm9tICcuL2luaXRpYWwnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuXG5pbml0aWFsKCk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJDbGlja0hhbmRsZXIpKTtcblxuICBmdW5jdGlvbiB0YWJDbGlja0hhbmRsZXIoZSkge1xuICAgIGNvbnNvbGUubG9nKGBjbGlja2VkICR7ZS50YXJnZXQuY2xhc3NOYW1lfWApXG4gICAgc3dpdGNoIChlLnRhcmdldC5jbGFzc05hbWUpIHtcbiAgICAgIGNhc2UgXCJob21lIHRhYlwiOiByZW5kZXJQYWdlKGhvbWUuZ2VuZXJhdGUoKSk7IGJyZWFrO1xuICAgICAgY2FzZSAnbWVudSB0YWInOiByZW5kZXJQYWdlKG1lbnUuZ2VuZXJhdGUoKSk7IGJyZWFrO1xuICAgICAgY2FzZSAnY29udGFjdCB0YWInOiByZW5kZXJQYWdlKGNvbnRhY3QuZ2VuZXJhdGUoKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UobmV3UGFnZSkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXBhZ2UnKTtcbiAgcHJldmlvdXNQYWdlLnJlbW92ZSgpO1xuXG4gIGZvb3Rlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbmV3UGFnZSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9