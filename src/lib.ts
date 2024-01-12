import {allSubjects} from "./const";

export function round(number: number, precision: number = 1) {
  precision = 1 / precision
  return Math.round(number * precision) / precision
}
