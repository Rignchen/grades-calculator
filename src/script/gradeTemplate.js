/*
Made by Rignchen
12/23
this website is used to store and calculate my grades
create the visual element containing the grade
 */
const greenDotSVG = document.getElementById("green-dot-svg");
const orangeDotSVG = document.getElementById("orange-dot-svg");
const redDotSVG = document.getElementById("red-dot-svg");
const spanSVG = document.getElementById("span-svg");

/**
 * @param {number} grade
 * @returns {Element}
 * Return a span containing the grade
 */
export function createGrade(grade) {
  /*
    <span class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
    {color of the dot depending on the grade: <4 red, =4 orange, >4 green}
    {grade}
    </span>
     */
  let currentColorDot;
  if (grade < 4) {
    currentColorDot = redDotSVG;
  } else if (grade > 4) {
    currentColorDot = greenDotSVG;
  } else {
    currentColorDot = orangeDotSVG;
  }
  // Element created from the spanSVG template
  const span = document.createElement("span");
  span.className = spanSVG.content.querySelector("span").className;
  span.innerHTML = currentColorDot.innerHTML + grade;
  return span;
}
