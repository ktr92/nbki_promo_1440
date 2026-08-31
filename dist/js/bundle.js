/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
window.addEventListener("load", () => {
  function initFE() {
    checkCookies();
    wowInit();
    scrollTo();
  }

  function scrollTo() {
    $("a.scrollTo").click(function () {
    $(this).addClass("active");
    var destination = $($(this).attr("href")).offset().top - 100;
    $("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      400,
    );
    if ($(this).closest('[data-toggle]').length) {
      $(this).closest('[data-toggle]').removeClass('active')
    }
    return false;
  });
  }

  function wowInit() {
    new WOW().init();
  }

  function checkCookies() {
    function getCookie(name) {
      let matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)",
        ),
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    if (localStorage.getItem("cookiesAccepted")) {
      document.querySelector(".cookies").style.display = "none";
    } else {
      document.querySelector(".cookies").style.display = "block";
    }
    document.querySelector(".js-accept-cookie").onclick = function () {
      localStorage.setItem("cookiesAccepted", "true");
      document.querySelector(".cookies").style.display = "none";
    };
  }


  initFE();
});

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map