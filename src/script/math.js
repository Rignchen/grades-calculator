/**
 * @param {Element[]|NodeListOf<Element>} gradeList
 * @returns {number|false}
 */
export function average(gradeList) {
  if (gradeList.length === 0) {
    return false;
  }
  let sum = 0;
  for (const grade of gradeList) {
    sum += parseFloat(grade.textContent);
  }
  return sum / gradeList.length;
}
export function round(grade) {
  return Math.round(grade * 2) / 2;
}
