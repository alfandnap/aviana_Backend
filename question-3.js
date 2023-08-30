

// Hasil dari caseNum1 -> 4 (1,2,3,4)
const caseNum1 = [100, 4, 200, 1, 3, 2]

// Hasil dari caseNum2 -> 9 (0,1,2,3,4,5,6,7,8,9)
const caseNum2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

/**
 * @param {*} nums array of number
 * @returns number -> panjang terbanyak dari angka yang berurutan
 */
const getLongestConsecutive = (nums) => {
  // Write your code here
  let maxNumber = 0;
  const storage = {};

  for (let perNumber of nums) {
    if (storage[perNumber] != null) {
      continue;
    }

    const l = storage[perNumber - 1] || 0;
    const r = storage[perNumber + 1] || 0;

    const countSequence = l + r + 1;

    storage[perNumber - l] = countSequence;
    storage[perNumber + r] = countSequence;
    maxNumber = Math.max(maxNumber, countSequence);
  }
  console.log(maxNumber);
  return maxNumber;
}

getLongestConsecutive(caseNum1)
getLongestConsecutive(caseNum2) 