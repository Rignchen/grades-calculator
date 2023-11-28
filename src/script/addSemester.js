import { addGrade } from "./addGrade.js";

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
  const button = semester.querySelector("button");
  button.addEventListener("click", () => {
    const input = semester.querySelector("input");
    const grade = parseFloat(input.value);
    // only add a grade if the input is a number between 1 and 6 included with a precision of 0.5
    if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
      input.value = "";
      const gradeDiv = semester.querySelector("div");
      addGrade(grade, gradeDiv);
    }
  });
  const input = semester.querySelector("input");
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const grade = parseFloat(event.target.value);
      // only add a grade if the input is a number between 1 and 6 included with a precision of 0.5
      if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
        event.target.value = "";
        const gradeDiv = semester.querySelector("div");
        addGrade(grade, gradeDiv);
      }
    }
  });
  const svg = button.querySelector("svg");
  input.addEventListener("focus", () => {
    input.classList.remove("ring-gray-300");
    input.classList.add("ring-blue-300");
    button.classList.remove("ring-gray-300");
    button.classList.add("ring-blue-300");
    svg.classList.remove("text-gray-400");
    svg.classList.add("text-blue-400");
  });
  input.addEventListener("blur", () => {
    input.classList.remove("ring-blue-300");
    input.classList.add("ring-gray-300");
    button.classList.remove("ring-blue-300");
    button.classList.add("ring-gray-300");
    svg.classList.remove("text-blue-400");
    svg.classList.add("text-gray-400");
  });

  // Add a grade when the user clicks on a button
}
