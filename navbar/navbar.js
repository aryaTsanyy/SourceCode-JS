/** @format */

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  let navbarVisible = true;
  let hideTimeout;
  const navbar = document.querySelector(".navbar");

  function hideNavbar() {
    gsap.to(navbar, { y: -100, duration: 0.3 });
    navbarVisible = false;
  }

  function showNavbar() {
    gsap.to(navbar, { y: 0, duration: 0.3 });
    navbarVisible = true;
    navbar.classList.remove("transparent");

    // riset timeout
    clearTimeout(hideTimeout);
    // timeout untuk hilangkan navbar setelah 4 detik
    hideTimeout = setTimeout(hideNavbar, 3000);
  }

  function handleNavbarVisibility() {
    clearTimeout(hideTimeout);
    if (!navbarVisible) {
      showNavbar();
    }
  }

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll === 0) {
      showNavbar();
      navbar.style.backgroundColor = "transparent";
      // Scroll top: 0, navbar tetap muncul tanpa timeout
      if (!navbarVisible) {
        showNavbar();
      }
    } else if (currentScroll > lastScrollTop) {
      // Scroll ke bawah
      if (navbarVisible) {
        hideNavbar();
      }
    } else {
      // Scroll ke atas
      if (!navbarVisible) {
        showNavbar();
        navbar.style.backgroundColor = "#000";
      }
    }

    lastScrollTop = currentScroll;
  });
  clearTimeout(hideTimeout);
});
