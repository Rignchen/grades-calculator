export function round(number: number, precision: number = 1) {
  console.log("round", number, precision)
  precision = 1 / precision
  console.log(Math.round(number * precision) / precision)
  return Math.round(number * precision) / precision
}

/**
 * calculate the weighted average of a list of values
 * @param values {number[]|([number,number])[]} the list of values to average and their weight, by default the weight is 1
 * @param ignore_zero {boolean} if this is true, values of 0 will be ignored
 */
export function weightedAverage(values: number[]|[number,number][], ignore_zero: boolean = true) {
  if (values.length === 0) return 0
  let sum = 0
  let weight = 0
  for (const value of values) {
    if (typeof value === "number") {
      if (value === 0 && ignore_zero) continue
      sum += value
      weight += 1
    } else {
      if (value[0] === 0 && ignore_zero) continue
      sum += value[0] * value[1]
      weight += value[1]
    }
  }
  if (weight === 0) return sum
  return sum / weight
}
export function last(array: any[]) {
  return array[array.length - 1]
}
