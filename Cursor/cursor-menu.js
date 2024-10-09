/** @format */

(function () {
  const link = document.querySelectorAll(".navbar > .nav-menu");
  const cursormenu = document.querySelector(".cursor-menu");
  const animateit = function (e) {
    const text = this.querySelector(".text-menu");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    text.style.transform = `translate(${xMove}px, ${yMove}px)`;

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursormenu.style.left = x + "px";
      cursormenu.style.top = y + "px";
    };
    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
    window.addEventListener("mousemove", editCursor);
  };
})();
