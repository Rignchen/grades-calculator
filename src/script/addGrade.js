const greenDotSVG = document.getElementById("green-dot-svg");
const orangeDotSVG = document.getElementById("orange-dot-svg");
const redDotSVG = document.getElementById("red-dot-svg");
const spanSVG = document.getElementById("span-svg");

/**
 * @param {number} grade
 * @param {Element} element
 * @returns {void}
 * Add a span containing the grade to the div element
 */
export function addGrade(grade, element) {
  /*
    <span class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
    {color of the dot depending on the grade: <4 red, =4 orange, >4 green}
    {grade} 
    </span>
     */
  let curentColorDot;
  if (grade < 4) {
    curentColorDot = redDotSVG;
  } else if (grade > 4) {
    curentColorDot = greenDotSVG;
  } else {
    curentColorDot = orangeDotSVG;
  }
  // Element created from the spanSVG template
  const span = document.createElement("span");
  span.className = spanSVG.content.querySelector("span").className;
  span.innerHTML = curentColorDot.innerHTML + grade;

  // Remove a grade when the user clicks on it
  span.addEventListener("click", () => {
    span.remove();
  });

  element.appendChild(span);
}
