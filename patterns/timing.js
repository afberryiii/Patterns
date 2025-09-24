/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  if (!numbers || typeof numbers.length != "number") {
    return true;
  }

  if (numbers.length === 0) {
    return undefined;
  }

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (typeof num !== "number" || num % 2 !== 0) {
      return false;
    }
  }

  return true;
}

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  if (typeof people !== "number" || people < 0) {
    return false;
  }

  if (!backpack || typeof backpack.length !== "number") {
    return false;
  }

  let foodCount = 0;
  for (let i = 0; i < backpack.length; i++) {
    const item = backpack[i];
    if (item && typeof item.category === "string" && item.category === "food") {
      foodCount++;
    }
  }

  return foodCount >= people;
}
