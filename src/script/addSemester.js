/*
Made by Rignchen
12/23
this website is used to store and calculate my grades
add new semesters to the list of semesters
 */
import { addGrade } from "./addGrade.js";

function gradeInput(input, semester) {
  const grade = parseFloat(input.value);
  // only add a grade if the input is a number between 1 and 6 included with a precision of 0.5
  if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
    input.value = "";
    const gradeDiv = semester.querySelector("div");
    addGrade(grade, gradeDiv);
  }
}
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
    gradeInput(input, semester);
    // Focus back on the input
    input.focus();
  });
  const input = semester.querySelector("input");
  input.id = `sem${semesterList.childElementCount}`;
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      gradeInput(event.target, semester);
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
}
