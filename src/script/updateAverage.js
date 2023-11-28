import { average, round } from "./math";
import { createGrade } from "./gradeTemplate";

/**
 * @param {Element} gradeDiv
 * @returns {void}
 * update the average of the semester
 */
export function updateGradeAverage(gradeDiv) {
  // Update the average of the semester
  const averageDiv = gradeDiv.parentElement.querySelector("dd > div.add-grade");
  let oldAverage = averageDiv.querySelector("span");
  if (oldAverage !== null) oldAverage = parseFloat(oldAverage.textContent);
  // remove the previous average if it exists
  if (averageDiv.childElementCount >= 2) {
    averageDiv.querySelector("span").remove();
  }
  const averageValue = average(gradeDiv.querySelectorAll("span"));
  if (averageValue) {
    const avr = createGrade(round(averageValue));
    avr.classList.remove("font-medium", "ring-gray-200");
    avr.classList.add("ml-1", "font-bold", "ring-gray-300");
    averageDiv.appendChild(avr);
  }
  // update the semester average
  if (round(oldAverage) !== round(averageValue)) {
    updateSemesterAverage();
  }
}
export function updateSemesterAverage() {
  // Update the global average from the average of all semesters
  const semesters = document.querySelectorAll("#semesterList > div");
  const averageList = [];
  semesters.forEach((semester) => {
    const semesterAverage = semester.querySelector("div.add-grade span");
    if (semesterAverage !== null) averageList.push(semesterAverage);
  });
  const averageDiv = document.querySelector("#currentAverage");
  let oldAverage = averageDiv.querySelector("span");
  if (oldAverage !== null) oldAverage = round(parseFloat(oldAverage.innerText));
  if (averageList.length === 0) averageDiv.innerHTML = "";
  else {
    const averageValue = round(average(averageList));
    if (oldAverage !== averageValue)
      averageDiv.innerHTML = createGrade(averageValue).outerHTML;
  }
}
