import {allSubjects} from "./const";

export function round(number: number, precision: number = 1) {
  precision = 1 / precision
  return Math.round(number * precision) / precision
}
export function getSubject() {
  const url = window.location.href.split("/");
  console.log(url[url.length - 1])
  return allSubjects.indexOf(url[url.length - 1]);
}
