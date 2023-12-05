import { allSubjectsName, conversionSubject } from "../var";
import { addSemester } from "./addSemester";
import { focus } from "../lib";

export let currentSubject = 1;

/**
 * @param newSubject {number}
 */
export function changeSubject(newSubject) {
  // remove the grades and semesters from the previous subject
  const semesterLest = document.querySelector("#semesterList");
  semesterLest.innerHTML = "";
  addSemester();

  // remove the blod from the previous subject
  var subjectLink = document.querySelector("header").querySelectorAll("a")[
    conversionSubject[currentSubject]
  ].classList;
  subjectLink.remove("font-bold", "text-white");
  subjectLink.add("font-medium", "text-sky-100");

  console.log(allSubjectsName[currentSubject]);
  console.log(currentSubject);
  console.log(conversionSubject[currentSubject]);

  // set the value of the new subject
  currentSubject = newSubject;

  // show the new subject button
  document
    .querySelector("#newSemester")
    .parentElement.classList.remove("hidden");

  // set the new name
  document.querySelector("#subjectName").innerText =
    allSubjectsName[currentSubject];

  // set the current link in blod
  var subjectLink = document.querySelector("header").querySelectorAll("a")[
    conversionSubject[currentSubject]
  ].classList;
  subjectLink.add("font-bold", "text-white");
  subjectLink.remove("font-medium", "text-sky-100");

  // focus the new subject
  focus();
}
