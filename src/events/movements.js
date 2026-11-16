/**
 * Register a new event listener that will retrieve the position of the mouse on the page
 * and display the coordinates in the element with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332"
 */
export function mouseMovements() {
  const mouseCoordinates = document.getElementById("mouse-coordinates");
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    mouseCoordinates.textContent = `x: ${x}, y: ${y}`;
  });
}

const randomRGB = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
const enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input :
 * 1. When you hover it, display the text "Yes, you hover me !" in its label,
 *    and restore the original label text when the hover ends.
 * 2. When you focus the input, change its border color to a random one,
 *    different from all previously used colors and from the original one.
 * 3. When the input loses focus, reset the border color to the one it had before focus.
 */
export function hoverFocusAndBlur() {
  if (document.getElementById("focus-me")) {
    const inputElement = document.getElementById("focus-me");
    const labelElement = document.querySelector('label[for="focus-me"]');
    const originalLabelText = labelElement.textContent;
    const originalBorderColor = inputElement.style.borderColor;

    inputElement.addEventListener("mousemove", () => {
      labelElement.textContent = "Yes, you hover me !";
    });

    inputElement.addEventListener("mouseleave", () => {
      labelElement.textContent = originalLabelText;
    });

    inputElement.addEventListener("focus", () => {
      let Color = randomRGB();
      if (Color === originalBorderColor) {
        Color = randomRGB();
      }
      inputElement.style.borderColor = Color;
    });

    inputElement.addEventListener("blur", () => {
      inputElement.style.borderColor = originalBorderColor;
    });
  }
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Each new character typed should randomly change the default border color of the input.
 * You don't need to change the curren1t border color (which is controlled by the previous exercise),
 * but you need to change the original color -- the one that will be restored when the input loses focus.
 * Also apply this new color to the text of the input's labels.
 */
export function changesOnInputEvents() {
  // Write your code here
}
