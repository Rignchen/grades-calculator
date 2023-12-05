import { allSubjectsName } from "../var";
import { addSemester } from "./addSemester";
import { focus } from "../lib";

export let currentSubject = 1;

/**
 * @param newSubject {number}
 */
export function changeSubject(newSubject) {
  // remove the % from the previous subject
  /*
  document
    .querySelector("#averages")
    .children[currentSubject].querySelector("dd").innerText = "";
   */
  // remove the grades and semesters from the previous subject
  const semesterLest = document.querySelector("#semesterList");
  semesterLest.innerHTML = "";
  addSemester();

  // set the value of the new subject
  currentSubject = newSubject;

  // show the new subject button
  document
    .querySelector("#newSemester")
    .parentElement.classList.remove("hidden");

  // set the new name
  document.querySelector("#subjectName").innerText =
    allSubjectsName[currentSubject];

  // focus the new subject
  focus();
}
