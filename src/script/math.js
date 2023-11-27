/**
 * @param {Element} gradeList
 * @returns {number|false}
 */
export function average(gradeList) {
  const grades = gradeList.querySelectorAll("span");
  if (grades.length === 0) {
    return false;
  }
  let sum = 0;
  for (const grade of grades) {
    sum += parseFloat(grade.textContent);
  }
  return sum / grades.length;
}
export function round(grade) {
  return Math.round(grade * 2) / 2;
}
