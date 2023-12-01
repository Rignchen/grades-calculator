import { addSemester } from "./addSemester";
import { addGrade } from "./addGrade";

export function setRandomBastienValues() {
  const semesterList = document.querySelector("#semesterList");
  const grades = [
    [4, 3, 3, 5, 3.5, 5.5, 3.5, 5.5],
    [4, 3, 5],
  ];
  for (const semester in grades) {
    addSemester();
    for (const i in grades[semester]) {
      addGrade(
        grades[semester][i],
        semesterList.lastElementChild.querySelector("div"),
        i + "" === grades[semester].length - 1 + "",
      );
    }
  }
}
