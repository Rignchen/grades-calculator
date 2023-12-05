import { addSemester } from "./script/addSemester";
import { updateGlobalAverage } from "./script/updateAverage";
import { focus } from "./lib";
import { changeSubject } from "./script/changeSubject";
import { allSubjects } from "./var";
import { currentSubject } from "./script/changeSubject";

addSemester();

// Add a semester when the user clicks on a button
document.querySelector("#newSemester").addEventListener("click", () => {
  if (document.querySelector("#semesterList").childElementCount >= 8) return;
  addSemester();
  focus();
  if (document.querySelector("#semesterList").childElementCount >= 8)
    document
      .querySelector("#newSemester")
      .parentElement.classList.add("hidden");
});

document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", () => {
    const newSubject = Number(
      allSubjects.indexOf(link.innerText.toLowerCase()),
    );
    if (newSubject !== currentSubject) {
      changeSubject(newSubject);
    }
  });
});

updateGlobalAverage();
focus();
