import { addSemester } from "./script/addSemester";
import { setRandomBastienValues } from "./script/setRandomBastienValues";
import { updateGlobalAverage } from "./script/updateAverage";

setRandomBastienValues();
addSemester();

// Add a semester when the user clicks on a button
document.querySelector("#newSemester").addEventListener("click", () => {
  addSemester();
  if (document.querySelector("#semesterList").childElementCount >= 8)
    document.querySelector("#newSemester").parentElement.remove();
});

updateGlobalAverage();

// Focus on the last input
document
  .querySelector("#semesterList")
  .lastElementChild.querySelector("input")
  .focus();
