/*
Made by Rignchen
12/23
this website is used to store and calculate my grades
main function, used to call new semester loading and change of pages
 */

import { addSemester } from "./script/addSemester";
import { updateGlobalAverage } from "./script/updateAverage";
import { focus } from "./lib";
import { changeSubject } from "./script/changeSubject";
import { allSubjects } from "./var";
import { currentSubject } from "./script/changeSubject";

addSemester();

// Add a semester when the user clicks on a button
const semesterList = document.querySelector("#semesterList");
const newSemester = document.querySelector("#newSemester");
newSemester.addEventListener("click", () => {
  if (semesterList.childElementCount >= 8) return;
  addSemester();
  focus();
  if (semesterList.childElementCount >= 8)
    newSemester.parentElement.classList.add("hidden");
});

const pageLink = document.querySelectorAll("header nav a");
pageLink.forEach((link) => {
  link.addEventListener("click", () => {
    const newSubject = Number(
      allSubjects.indexOf(link.innerText.toLowerCase()),
    );
    if (newSubject !== currentSubject) {
      changeSubject(newSubject, pageLink);
    }
  });
});

updateGlobalAverage();
focus();
