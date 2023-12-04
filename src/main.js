import { addSemester } from "./script/addSemester";
import { updateGlobalAverage } from "./script/updateAverage";
import { focus } from "./lib";

addSemester();

// Add a semester when the user clicks on a button
document.querySelector("#newSemester").addEventListener("click", () => {
  addSemester();
  focus();
  if (document.querySelector("#semesterList").childElementCount >= 8)
    document.querySelector("#newSemester").parentElement.remove();
});

updateGlobalAverage();
focus();
