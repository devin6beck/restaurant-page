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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNOO0FBQ0E7QUFDTTs7QUFFaEMsb0RBQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBLGtDQUFrQyxzREFBYSxLQUFLO0FBQ3BELGtDQUFrQyxzREFBYSxLQUFLO0FBQ3BELHFDQUFxQyx5REFBZ0I7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb250YWN0UGFnZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY3JlYXRlSW1hZ2VzRGl2KCkge1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlcycpO1xuICBcbiAgICBjb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTEuc3JjID0gJ2ltYWdlcy9zdXAuanBlZyc7XG4gICAgaW1hZ2UxLmFsdCA9ICd3b21hbiBvbiBhIHN0YW5kIHVwIHBhZGRsZSBib2FyZCc7XG4gIFxuICAgIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMi5zcmMgPSAnaW1hZ2VzL2Zvb2QuanBnJztcbiAgICBpbWFnZTIuYWx0ID0gJ2dvdXJtZXQgZm9vZCBwbGF0ZSB3aXRoIHdpbmUnO1xuICBcbiAgICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTMuc3JjID0gJy4vaW1hZ2VzL2Rlc3NlcnQyLmpwZyc7XG4gICAgaW1hZ2UzLmFsdCA9ICdnb3VybWV0IGNha2Ugc3ByZWFkJztcbiAgXG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2U0LnNyYyA9ICdpbWFnZXMvbHVrZS5qcGcnO1xuICAgIGltYWdlNC5hbHQgPSAnZ3VpZGUgaG9sZGluZyBkcmlua3MnO1xuICBcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgICByZXR1cm4gaW1hZ2VzRGl2XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ0dpdmUgdXMgYSBjYWxsIG9yIHNjaGVkdWxlIHlvdXIgdHJpcCBvbmxpbmUgdG9kYXkhJztcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJ1RoZSBndWlkZXMgaGFuZGxlIHRoZSBsYWJvciBhbmQgb3VyIGdvdXJtZXQgY2hlZiBwcmVwYXJlcyBib21iIGZvb2QuJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocDEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocDIpO1xuICAgIHJldHVybiBtYWluO1xuICB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYWNlcigpIHtcbiAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNwYWNlci5jbGFzc0xpc3QuYWRkKCdzcGFjZXInKTtcblxuICByZXR1cm4gc3BhY2VyO1xufVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYWdlJyk7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZU1haW4oKTtcbiAgICBjb25zdCBpbWFnZXNEaXYgPSBjcmVhdGVJbWFnZXNEaXYoKTtcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChpbWFnZXNEaXYpO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZChjcmVhdGVTcGFjZXIoKSk7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kKGNyZWF0ZVNwYWNlcigpKTtcblxuICAgIHJldHVybiBjb250YWN0UGFnZTtcblxuICB9XG4gIHJldHVybiB7Z2VuZXJhdGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiY29uc3QgSG9tZXBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUltYWdlc0RpdigpIHtcbiAgICBjb25zdCBpbWFnZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcbiAgXG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UxLnNyYyA9ICdpbWFnZXMvc2NlbmUuanBnJztcbiAgICBpbWFnZTEuYWx0ID0gJ3JpdmVyYmFuayB3aXRoIG1vdW50YWluIGluIGJhY2tncm91bmQnO1xuICBcbiAgICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTIuc3JjID0gJ2ltYWdlcy9nb3VybWV0LWZvb2Qtc3ByZWFkLmpwZyc7XG4gICAgaW1hZ2UyLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkIHdpdGggd2luZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5zcmMgPSAnaW1hZ2VzL3N0ZWFrLWp1c3R1cy1tZW5rZS5qcGcnO1xuICAgIGltYWdlMy5hbHQgPSAnZ291cm1ldCBzdGVhayc7XG4gIFxuICAgIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlNC5zcmMgPSAnaW1hZ2VzL2JvYXRzLWVkZHkuanBnJztcbiAgICBpbWFnZTQuYWx0ID0gJ3JhZnRzIG5leHQgdG8gc2hvcmUnO1xuICBcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgICByZXR1cm4gaW1hZ2VzRGl2XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdFbmpveSBhIDMgZGF5IHJpdmVyIGFkdmVudHVyZSB3aXRoIGdvdXJtZXQgZm9vZC4nO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGd1aWRlcyBoYW5kbGUgdGhlIGxhYm9yIGFuZCBvdXIgZ291cm1ldCBjaGVmIHByZXBhcmVzIGJvbWIgZm9vZC4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuZnVuY3Rpb24gY3JlYXRlU3BhY2VyKCkge1xuICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlcicpO1xuXG4gIHJldHVybiBzcGFjZXI7XG59XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGNyZWF0ZUltYWdlc0RpdigpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGltYWdlc0Rpdik7XG4gICAgaG9tZVBhZ2UuYXBwZW5kKGNyZWF0ZVNwYWNlcigpKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBob21lUGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuXG4gICAgcmV0dXJuIGhvbWVQYWdlO1xuXG4gIH1cbiAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdDaGFtYSBDYW50ZWVuJztcblxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvZ28uc3JjID0gJy4vaW1hZ2VzL3ppYS1yZWQucG5nJztcbiAgbG9nby5hbHQgPSAnemlhIHN5bWJvbCc7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFjZXIoKSB7XG4gIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcGFjZXIuY2xhc3NMaXN0LmFkZCgnc3BhY2VyJyk7XG5cbiAgcmV0dXJuIHNwYWNlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VDb250YWluZXIoKSB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2VzJyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuXG4gIGNvbnN0IGZvb2RTcHJlYWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2dvdXJtZXQtZm9vZC1zcHJlYWQuanBnJztcbiAgZm9vZFNwcmVhZEltYWdlLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkJztcblxuICBjb25zdCB3aW5lU3ByZWFkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZm9vZFNwcmVhZEltYWdlLnNyYyA9ICcuL2ltYWdlcy9nb3VybWV0LXdpbmUtc3ByZWFkLWpvbmF0aGFuLWJvcmJhLmpwZyc7XG4gIGZvb2RTcHJlYWRJbWFnZS5hbHQgPSAnZ291cm1ldCBmb29kIHNwcmVhZCc7XG5cbiAgY29uc3Qgc3RlYWtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL3N0ZWFrLWp1c3R1cy1tZW5rZS5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgc3RlYWsnO1xuXG4gIGNvbnN0IGRlc3NlcnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmb29kU3ByZWFkSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2Rlc3NlcnQtIGFubmEtdHVraGZhdHVsbGluYS5qcGcnO1xuICBmb29kU3ByZWFkSW1hZ2UuYWx0ID0gJ2dvdXJtZXQgZGVzc2VydCc7XG5cbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZFNwcmVhZEltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZVNwcmVhZEltYWdlKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RlYWtJbWFnZSk7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRJbWFnZSk7XG5cbiAgcmV0dXJuIGltYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdNYWRlIGJ5ICc7XG5cbiAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vZGV2aW42YmVjayc7XG4gIGdpdGh1Yi50ZXh0Q29udGVudCA9ICdEZXZpbiBCZWNrJztcblxuICBzcGFuLmFwcGVuZENoaWxkKGdpdGh1Yik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgaG9tZXBhZ2UgPSBIb21lLmdlbmVyYXRlKCk7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTcGFjZXIoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlOyIsImNvbnN0IE1lbnVQYWdlID0gKGZ1bmN0aW9uKCkge1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUltYWdlc0RpdigpIHtcbiAgICBjb25zdCBpbWFnZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZXMnKTtcbiAgXG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UxLnNyYyA9ICdpbWFnZXMvYm9hdHMtcmFwaWRzLmpwZyc7XG4gICAgaW1hZ2UxLmFsdCA9ICdyYWZ0cyBpbiBhIHJhcGlkIG9mIHRoZSBSaW8gQ2hhbWEnO1xuICBcbiAgICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTIuc3JjID0gJ2ltYWdlcy9nb3VybWV0LXdpbmUtc3ByZWFkLWpvbmF0aGFuLWJvcmJhLmpwZyc7XG4gICAgaW1hZ2UyLmFsdCA9ICdnb3VybWV0IGZvb2Qgc3ByZWFkIHdpdGggd2luZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5zcmMgPSAnLi9pbWFnZXMvZGVzc2VydC0gYW5uYS10dWtoZmF0dWxsaW5hLmpwZyc7XG4gICAgaW1hZ2UzLmFsdCA9ICdnb3VybWV0IGRlc3NlcnQgY2FrZSc7XG4gIFxuICAgIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlNC5zcmMgPSAnaW1hZ2VzL3RhYmxlLmpwZyc7XG4gICAgaW1hZ2U0LmFsdCA9ICdwZW9wbGUgZWF0aW5nIGF0IHRhYmxlJztcbiAgXG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gICAgcmV0dXJuIGltYWdlc0RpdlxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdFbmpveSBhIDMgZGF5IHJpdmVyIGFkdmVudHVyZSB3aXRoIGdvdXJtZXQgZm9vZC4nO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGd1aWRlcyBoYW5kbGUgdGhlIGxhYm9yIGFuZCBvdXIgZ291cm1ldCBjaGVmIHByZXBhcmVzIGJvbWIgZm9vZC4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwMik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuZnVuY3Rpb24gY3JlYXRlU3BhY2VyKCkge1xuICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoJ3NwYWNlcicpO1xuXG4gIHJldHVybiBzcGFjZXI7XG59XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IGltYWdlc0RpdiA9IGNyZWF0ZUltYWdlc0RpdigpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGltYWdlc0Rpdik7XG4gICAgbWVudVBhZ2UuYXBwZW5kKGNyZWF0ZVNwYWNlcigpKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtZW51UGFnZS5hcHBlbmQoY3JlYXRlU3BhY2VyKCkpO1xuXG4gICAgcmV0dXJuIG1lbnVQYWdlO1xuXG4gIH1cbiAgcmV0dXJuIHtnZW5lcmF0ZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsIGZyb20gJy4vaW5pdGlhbCc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmluaXRpYWwoKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYkNsaWNrSGFuZGxlcikpO1xuXG4gIGZ1bmN0aW9uIHRhYkNsaWNrSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgJHtlLnRhcmdldC5jbGFzc05hbWV9YClcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmNsYXNzTmFtZSkge1xuICAgICAgY2FzZSBcImhvbWUgdGFiXCI6IHJlbmRlclBhZ2UoaG9tZS5nZW5lcmF0ZSgpKTsgYnJlYWs7XG4gICAgICBjYXNlICdtZW51IHRhYic6IHJlbmRlclBhZ2UobWVudS5nZW5lcmF0ZSgpKTsgYnJlYWs7XG4gICAgICBjYXNlICdjb250YWN0IHRhYic6IHJlbmRlclBhZ2UoY29udGFjdC5nZW5lcmF0ZSgpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZShuZXdQYWdlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcbiAgY29uc3QgcHJldmlvdXNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcGFnZScpO1xuICBwcmV2aW91c1BhZ2UucmVtb3ZlKCk7XG5cbiAgZm9vdGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBuZXdQYWdlKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=