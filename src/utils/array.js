/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * @see https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
export const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
