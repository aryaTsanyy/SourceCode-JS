/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".animated-cursor-section");
  if (section) {
    const cursor = document.createElement("div");
    cursor.className = "animated-cursor";
    document.body.appendChild(cursor);

    const hero = section.querySelector(".hero");
    if (hero) {
      const bubbleSection = hero.querySelector(".bubble-section");
      if (bubbleSection) {
        const triggerArea = bubbleSection.querySelector(".bubble-wrapper");
        if (triggerArea) {
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
        }
      }
    }
  }
});
