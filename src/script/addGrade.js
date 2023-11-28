import { average, round } from "./math";

const greenDotSVG = document.getElementById("green-dot-svg");
const orangeDotSVG = document.getElementById("orange-dot-svg");
const redDotSVG = document.getElementById("red-dot-svg");
const spanSVG = document.getElementById("span-svg");

/**
 * @param {Element} gradeDiv
 * @returns {void}
 * update the average of the semester
 */
export function updateAverage(gradeDiv) {
  // Update the average
  const averageDiv = gradeDiv.parentElement.querySelector("dd > div.flex");
  // remove the previous average if it exists
  if (averageDiv.childElementCount >= 2) {
    averageDiv.querySelector("span").remove();
  }
  const averageValue = average(gradeDiv);
  if (averageValue) {
    const avr = createGrade(round(averageValue));
    avr.classList.remove("font-medium", "ring-gray-200");
    avr.classList.add("ml-1", "font-bold", "ring-gray-300");
    averageDiv.appendChild(avr);
  }
}
/**
 * @param {number} grade
 * @param {boolean} hasEvent
 * @returns {Element}
 * Return a span containing the grade
 */
export function createGrade(grade, hasEvent = false) {
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
  if (hasEvent) {
    span.addEventListener("auxclick", () => {
      const gradeDiv = span.parentElement.parentElement;
      span.remove();
      updateAverage(gradeDiv);
    });
  }
  return span;
}
/**
 * @param {number} grade
 * @param {Element} element
 * @returns {void}
 * Add a span containing the grade to the element
 */
export function addGrade(grade, element) {
  if (element.childElementCount >= 1) element.append(" ");
  element.appendChild(createGrade(grade, true));
  updateAverage(element);
}
