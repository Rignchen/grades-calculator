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
export function round(grade, precision = 0.5) {
  return Math.round(grade * (1 / precision)) / (1 / precision);
}

/**
 * @param list {Array|HTMLCollection|NodeList}
 * @param start {number}
 * @param end {number}
 * @returns {*[]}
 * @description Get a slice of an array, goes from start to end included
 * @example slice([1, 2, 3, 4, 5], 1, 3) // [2, 3, 4]
 */
export function slice(list, start, end) {
  const newList = [];
  if (start < 0) {
    start = list.length + start;
  }
  if (end < 0) {
    end = list.length + end;
  }
  for (let i = start; i <= end; i++) {
    newList.push(list[i]);
  }
  return newList;
}
