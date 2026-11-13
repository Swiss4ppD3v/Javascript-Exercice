/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (typeof diameter !== 'number' || Number.isNaN(diameter) || diameter < 0) {
    throw new Error('Invalid input')
  }
  const rayon = diameter / 2
  return (4 / 3) * Math.PI * rayon ** 3
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('Invalid input')
  }
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  if (!Array.isArray(grades) || grades.length === 0) {
    throw new Error('Invalid input')
  }
  for (const grade of grades) {
    if (typeof grade !== 'number' || Number.isNaN(grade)) {
      throw new Error('Invalid input')
    }
  }
  const sum = grades.reduce((acc, grade) => acc + grade, 0)
  return sum / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  const average = computeAverage(grades)
  return roundNumberToOneDecimals(average)
}
