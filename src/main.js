import { addSemester } from "./script/addSemester";

addSemester();

// Add a semester when the user clicks on a button
document.querySelector("#newSemester").addEventListener("click", () => {
  addSemester();
});

// Add a grade when the user clicks on a button
/*
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const grade = parseFloat(
      button.parentElement.querySelector("div").querySelector("input").value,
    );
    // only add a grade if the input is a number between 1 and 6 included with a precision of 0.5
    if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
      const gradeDiv =
        button.parentElement.parentElement.parentElement.parentElement.querySelector(
          "div",
        );
      addGrade(grade, gradeDiv);
    }
  });
});
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const grade = parseFloat(input.value);
      // only add a grade if the input is a number between 1 and 6 included with a precision of 0.5
      if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
        const gradeDiv =
          input.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
            "div",
          );
        addGrade(grade, gradeDiv);
      }
    }
  });
});
*/
