/** @format */
document.addEventListener("DOMContentLoaded", () => {
  const herosection = document.querySelector(".Hero-Section");
  const cursor = document.createElement("div");
  cursor.className = "cursor";
  document.body.appendChild(cursor);

  const triggerArea = herosection.querySelector(".bubble-wrapper");

  section.addEventListener("mousemove", (e) => {
    const isOverTriggerArea = isMouseOverElement(e.clientX, e.clientY, triggerArea);
    if (isOverTriggerArea) {
      cursor.classList.add("large-cursor");
    } else {
      cursor.classList.remove("large-cursor");
    }
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  function isMouseOverElement(x, y, element) {
    const rect = element.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  }
});
