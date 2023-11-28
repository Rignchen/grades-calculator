import { updateGradeAverage as updateAverage } from "./updateAverage";
import { createGrade } from "./gradeTemplate";

/**
 * @param {number} grade
 * @param {Element} element
 * @param {boolean} shouldUpdateAverage
 * @returns {void}
 * Add a span containing the grade to the element
 */
export function addGrade(grade, element, shouldUpdateAverage = true) {
  if (element.childElementCount >= 1) element.append(" ");
  const grd = createGrade(grade);

  // Remove a grade when the user clicks on it
  grd.addEventListener("auxclick", () => {
    const gradeDiv = grd.parentElement.parentElement;
    grd.remove();
    updateAverage(gradeDiv);
  });

  // Add the grade to the element
  element.appendChild(grd);
  if (shouldUpdateAverage) updateAverage(element);
}
