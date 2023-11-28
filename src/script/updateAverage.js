import { average, round } from "./math";
import { createGrade } from "./gradeTemplate";

/**
 * @param {Element} gradeDiv
 * @returns {void}
 * update the average of the semester
 */
export function updateAverage(gradeDiv) {
  // Update the average
  const averageDiv = gradeDiv.parentElement.querySelector("dd > div.add-grade");
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
