/** @format */
/* Debounce */
const debounce = (func, delay) => {
  let timerId; // Holds a reference to the timeout between calls.
  return (...args) => {
    clearTimeout(timerId); // Clears the current timeout, if any, to reset the debounce timer.
    timerId = setTimeout(() => {
      func.apply(this, args); // Calls the passed function after the specified delay with the correct context and arguments.
    }, delay);
  };
};
/* Debounce */
/* Text Splitter */
class TextSplitter {
  constructor(textElement, options = {}) {
    // Ensure the textElement is a valid HTMLElement.
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error("Invalid text element provided.");
    }

    const { resizeCallback, splitTypeTypes } = options;

    this.textElement = textElement;
    // Assign the resize callback if provided and is a function, otherwise null.
    this.onResize = typeof resizeCallback === "function" ? resizeCallback : null;

    const splitOptions = splitTypeTypes ? { types: splitTypeTypes } : {};
    this.splitText = new SplitType(this.textElement, splitOptions);

    // Initialize ResizeObserver to re-split text on resize events, if a resize callback is provided.
    if (this.onResize) {
      this.initResizeObserver(); // Set up observer to detect resize events.
    }
  }

  // Sets up ResizeObserver to re-split text on element resize.
  initResizeObserver() {
    this.previousContainerWidth = null; // Track element width to detect resize.

    let resizeObserver = new ResizeObserver(debounce((entries) => this.handleResize(entries), 100));
    resizeObserver.observe(this.textElement); // Start observing the text element.
  }

  // Handles element resize, re-splitting text if width changes.
  handleResize(entries) {
    const [{ contentRect }] = entries;
    const width = Math.floor(contentRect.width);
    // If element width changed, re-split text and call resize callback.
    if (this.previousContainerWidth && this.previousContainerWidth !== width) {
      this.splitText.split(); // Re-split text for new width.
      this.onResize(); // Execute the callback function.
    }
    this.previousContainerWidth = width; // Update stored width.
  }

  // Returns the lines created by splitting the text element.
  getLines() {
    return this.splitText.lines;
  }

  // Returns the words created by splitting the text element.
  getWords() {
    return this.splitText.words;
  }

  // Returns the chars created by splitting the text element.
  getChars() {
    return this.splitText.chars;
  }
}

const bubbles = document.querySelectorAll(".bubble");
const container = document.querySelector(".Bubble-Container");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  bubbles.forEach((dot) => {
    const dotX = dot.offsetLeft + dot.offsetWidth / 2;
    const dotY = dot.offsetTop + dot.offsetHeight / 2;

    const distance = Math.hypot(mouseX - dotX, mouseY - dotY);

    const maxDistance = 100; // Sesuaikan dengan jarak yang Anda inginkan agar titik bereaksi

    if (distance < maxDistance) {
      const scale = 1 + (maxDistance - distance) / maxDistance;
      dot.style.transform = `scale(${scale})`;
      dot.style.backgroundColor = "#ff6600"; // Warna saat mendekati kursor
    } else {
      dot.style.transform = "scale(1)";
      dot.style.backgroundColor = "white";
    }
  });
});
