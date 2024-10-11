/** @format */

(function () {
  const navbar = document.querySelector(".navigationbar");
  const link = document.querySelectorAll(".menu > .nav-menu");
  const cursormenu = document.querySelector(".cursor-menu");
  const logo = document.querySelector(".logo img");
  const animateit = function (e) {
    const txtmenu = this.querySelector(".text-menu");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 5,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    txtmenu.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === "mouseleave") txtmenu.style.transform = "";
  };
  const editCursor = (e) => {
    cursormenu.style.display = "block";
    const { clientX: x, clientY: y } = e;
    cursormenu.style.left = x + "px";
    cursormenu.style.top = y + "px";
  };
  const cursorhidden = (e) => {
    cursormenu.style.display = "none";
  };
  const animateCursorOnLogoHover = (e) => {
    if (e.type === "mouseenter") {
      cursormenu.style.transform = "translate(-50%, -50%) scale(2)";
      logo.style.transform = "scale(1.1)"; // Besar saat hover logo
    } else if (e.type === "mouseleave") {
      cursormenu.style.transform = "";
      logo.style.transform = ""; // Reset saat tidak hover
    }
  };

  if (navbar) {
    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
    navbar.addEventListener("mousemove", editCursor);
    navbar.addEventListener("mouseleave", cursorhidden);
    navbar.addEventListener("mouseenter", () => {
      cursormenu.style.display = "block";
    });
    logo.addEventListener("mouseenter", animateCursorOnLogoHover);
    logo.addEventListener("mouseleave", animateCursorOnLogoHover);
  }
})();
