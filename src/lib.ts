export function round(number: number, precision: number) {
  precision = 1 / precision
  return Math.round(number * precision) / precision
}
