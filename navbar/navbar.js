/** @format */

const navbar = document.querySelector(".navigationbar");
let timeoutId = null;
let lastscrolltop = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastscrolltop) {
    navbar.classList.add("scrolled-up");
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("scrolled-up");
    navbar.classList.remove("hidden");
    clearTimeout(timeoutId);
  }
});

window.addEventListener(
  "scroll",
  perulangan(() => {
    if (window.scrollY > 0) {
      timeoutId = setTimeout(() => {
        navbar.classList.add("hidden");
      }, 3000); // 3-second delay
    }
  }, 100)
); // debounce to prevent excessive function calls

navbar.addEventListener("mouseover", () => {
  navbar.classList.remove("hidden");
});

navbar.addEventListener("mouseout", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("hidden");
  }
});

function perulangan(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
