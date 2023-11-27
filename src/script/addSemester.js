import { addGrade, updateAverage } from "./addGrade.js";

/**
 * @returns {void}
 * Add a new semester to the page
 */
export function addSemester() {
  const newSemester = document
    .querySelector("#semester-template")
    .content.cloneNode(true);
  const semesterList = document.querySelector("#semesterList");
  semesterList.appendChild(newSemester);

  const semester = semesterList.lastElementChild;

  // Fill the semester with basic information
  semester.querySelector("dt").innerHTML =
    `Semester ${semesterList.childElementCount}`;

  // Add a grade when the user clicks on a button
  semester.querySelector("button").addEventListener("click", () => {
    const input = semester.querySelector("input");
    const grade = parseFloat(input.value);
    // only add a grade if the input is a number between 1 and 6 included with a precision of 0.5
    if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
      input.value = "";
      const gradeDiv = semester.querySelector("div");
      addGrade(grade, gradeDiv);
      updateAverage(gradeDiv);
    }
  });
  semester.querySelector("input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const grade = parseFloat(event.target.value);
      // only add a grade if the input is a number between 1 and 6 included with a precision of 0.5
      if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
        event.target.value = "";
        const gradeDiv = semester.querySelector("div");
        addGrade(grade, gradeDiv);
        updateAverage(gradeDiv);
      }
    }
  });

  // Add a grade when the user clicks on a button
}
