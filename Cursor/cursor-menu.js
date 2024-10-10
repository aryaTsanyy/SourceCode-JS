/** @format */

(function () {
  const navbar = document.querySelector(".navigationbar");
  const link = document.querySelectorAll(".menu > .nav-menu");
  const cursormenu = document.querySelector(".cursor-menu");
  const animateit = function (e) {
    const txtmenu = this.querySelector(".text-menu");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    txtmenu.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === "mouseleave") txtmenu.style.transform = "";
  };
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursormenu.style.left = x + "px";
    cursormenu.style.top = y + "px";
  };
  if (navbar) {
    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
    navbar.addEventListener("mousemove", editCursor);
  }
})();
