/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  let timeout;
  if (!cursorDot) {
    console.error("Cursor dot element not found!");
    return;
  }

  window.addEventListener(
    "mousemove",
    function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      clearTimeout(timeout);
      function mouseStopped() {
        cursorDot.style.visibility = "hidden";
      }
      timeout = setTimeout(mouseStopped, 3000);

      cursorDot.style.visibility = "visible";
    },
    { capture: true }
  );

  window.addEventListener("mouseout", function () {
    cursorDot.style.visibility = "hidden";
  });
});
