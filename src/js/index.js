window.addEventListener("load", () => {
  function initFE() {
    /*  checkCookies();
    wowInit(); */
    scrollTo();
    offerBar();
  }

  function offerBar() {
    (function () {
      // Порог прокрутки
      var threshold = 600;

      // Элемент с data-scrolltoggle="offer_bar"
      var bar = document.querySelector('[data-scrolltoggle="offer_bar"]');
      if (!bar) return;

      var visible = false;
      var ticking = false;

      function checkScroll() {
        var y = window.scrollY || window.pageYOffset;
        if (y >= threshold && !visible) {
          bar.classList.add("visible");
          visible = true;
        } else if (y < threshold && visible) {
          bar.classList.remove("visible");
          visible = false;
        }
        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(checkScroll);
          ticking = true;
        }
      }

      // Учесть текущую прокрутку при загрузке
      document.addEventListener("DOMContentLoaded", checkScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
    })();
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
      if ($(this).closest("[data-toggle]").length) {
        $(this).closest("[data-toggle]").removeClass("active");
      }
      return false;
    });
  }

  /* function wowInit() {
    new WOW().init();
  } */

  /*  function checkCookies() {
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
  } */

  initFE();
});
