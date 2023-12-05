/*
Made by Rignchen
12/23
this website is used to store and calculate my grades
simulate the change of a page
 */
import { allSubjectsName, conversionSubject } from "../var";
import { addSemester } from "./addSemester";
import { focus } from "../lib";

export let currentSubject = 1;

/**
 * @param newSubject {number}
 * @param subjectLink {NodeListOf<Element>}
 */
export function changeSubject(newSubject, subjectLink) {
  // remove the grades and semesters from the previous subject
  const semesterLest = document.querySelector("#semesterList");
  semesterLest.innerHTML = "";
  addSemester();

  // remove the blod from the previous subject
  var currentSubjectLink =
    subjectLink[conversionSubject[currentSubject]].classList;
  currentSubjectLink.remove("font-bold", "text-white");
  currentSubjectLink.add("font-medium", "text-sky-100");

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
  var currentSubjectLink =
    subjectLink[conversionSubject[currentSubject]].classList;
  currentSubjectLink.add("font-bold", "text-white");
  currentSubjectLink.remove("font-medium", "text-sky-100");

  // focus the new subject
  focus();
}
