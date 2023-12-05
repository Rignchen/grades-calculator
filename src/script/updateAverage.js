/*
Made by Rignchen
12/23
this website is used to store and calculate my grades
update the average of the different elements
 */
import { average, round } from "./math";
import { createGrade } from "./gradeTemplate";
import { allSubjects, globalAverageCalculateFrom } from "../var";
import { currentSubject } from "./changeSubject";

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
    const averageGrade =
      document.querySelector("#averages").children[currentSubject];
    averageGrade.lastElementChild.innerText = "";
    averageGrade.querySelector("dd").innerText = "";
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
      const currentSubjectAverage = listAverage.children[currentSubject];
      const currentSubjectAverageGrade = currentSubjectAverage.lastElementChild;
      const oldAverage = currentSubjectAverageGrade.innerText;
      currentSubjectAverageGrade.innerText = averageValue;
      if (oldAverage !== averageValue) {
        updateGlobalAverage();
        upgradePercent(
          currentSubjectAverage.querySelector("dd"),
          oldAverage,
          averageValue,
        );
      }
      // upgrade = (new/old - 1) * 100
      // if upgrade > 0 => green
      // if upgrade < 0 => red
      // if upgrade = 0/old/new not existent => hidden
    }
  }
}
export function updateGlobalAverage() {
  // Update the global average from the average of all subjects
  const averageList = document.querySelector("#averages").children;
  let sum = 0;
  let count = 0;

  if (
    currentSubject === allSubjects.indexOf("modules epsic") ||
    currentSubject === allSubjects.indexOf("cie")
  )
    updateComputerScienceAverage();

  for (const subjectName of globalAverageCalculateFrom) {
    const average =
      averageList[allSubjects.indexOf(subjectName)].lastElementChild.innerText;
    if (average !== "") {
      sum += parseFloat(average);
      count++;
    }
  }
  const oldAverage = averageList[0].lastElementChild.innerText;
  if (count === 0) averageList[0].lastElementChild.innerText = "";
  else {
    const newAverage = round(sum / count, 0.1);
    averageList[0].lastElementChild.innerText = newAverage;
    upgradePercent(averageList[0].querySelector("dd"), oldAverage, newAverage);
  }
}
function updateComputerScienceAverage() {
  // computer science average = 80% epsic + 20% cie
  const average = document.querySelector("#averages");
  const epsic =
    average.children[allSubjects.indexOf("modules epsic")].lastElementChild
      .innerText;
  const cie =
    average.children[allSubjects.indexOf("cie")].lastElementChild.innerText;
  const computerScience = average.children[allSubjects.indexOf("computer")];
  const computerScienceGrade =
    average.children[allSubjects.indexOf("computer")].lastElementChild;
  const oldAverage = computerScienceGrade.innerText;
  let newAverage = "";
  if (epsic === "" && cie === "") newAverage = "";
  else if (cie === "") newAverage = epsic;
  else if (epsic === "") newAverage = cie;
  else newAverage = round(0.8 * epsic + 0.2 * cie, 0.1) + "";

  if (oldAverage !== newAverage) {
    computerScienceGrade.innerText = newAverage;
    upgradePercent(computerScience.querySelector("dd"), oldAverage, newAverage);
  }
}
function upgradePercent(percentArea, oldAverage, newAverage) {
  let pomme = "";
  if (oldAverage !== "" && newAverage !== "")
    pomme = round((newAverage / oldAverage - 1) * 100, 0.01);
  if (pomme > 0) {
    percentArea.innerText = `+${pomme}%`;
    percentArea.classList.remove("text-red-700");
    percentArea.classList.add("text-green-700");
  } else if (pomme < 0) {
    percentArea.innerText = `${pomme}%`;
    percentArea.classList.remove("text-green-700");
    percentArea.classList.add("text-red-700");
  } else {
    percentArea.innerText = "";
  }
}
