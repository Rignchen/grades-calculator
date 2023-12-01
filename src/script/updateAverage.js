import { average, round, slice } from "./math";
import { createGrade } from "./gradeTemplate";
import { currentSubject } from "../var";

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

/**
 * @returns {void}
 */
export function updateSemesterAverage() {
  // Update the global average from the average of all semesters
  const semesters = document.querySelectorAll("#semesterList > div");
  const averageList = [];
  semesters.forEach((semester) => {
    const semesterAverage = semester.querySelector("div.add-grade span");
    if (semesterAverage !== null) averageList.push(semesterAverage);
  });
  const averageDiv = document.querySelector("#currentAverage");
  if (averageList.length === 0) {
    averageDiv.innerHTML = "";
    document.querySelector("#averages").children[
      currentSubject
    ].lastElementChild.innerText = "";
    updateGlobalAverage();
  } else {
    let oldAverage = averageDiv.querySelector("span");
    const averageValue = round(average(averageList));
    if (
      oldAverage === null ||
      averageValue !== round(parseFloat(oldAverage.innerText))
    ) {
      const avr = createGrade(averageValue);
      avr.classList.add("px-3", "py-1", "text-lg", "font-bold");
      avr.classList.remove("px-2", "py-2", "text-sm", "font-medium");
      averageDiv.innerHTML = avr.outerHTML;

      // Write the average in the list on the right
      const listAverage = document.querySelector("#averages");
      const currentSubjectAverage =
        listAverage.children[currentSubject].lastElementChild;
      const oldAverage = currentSubjectAverage.innerText;
      currentSubjectAverage.innerText = averageValue;
      if (oldAverage !== averageValue) updateGlobalAverage();
    }
  }
}
function updateGlobalAverage() {
  // Update the global average from the average of all subjects
  const averageList = document.querySelector("#averages").children;
  let sum = 0;
  let count = 0;
  for (const subject of slice(averageList, 1, -1)) {
    const average = subject.lastElementChild.innerText;
    if (average !== "") {
      sum += parseFloat(average);
      count++;
    }
  }
  averageList[0].lastElementChild.innerText = round(sum / count, 0.1);
}
