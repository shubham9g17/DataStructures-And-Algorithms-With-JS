function twoSumSorted(array, target) {
  let j = 0;
  let k = array.length - 1;

  while (j < k) {
    if (array[j] + array[k] === target) {
      return [j, k];
    }

    if (array[j] + array[k] < target) {
      j++;
    } else {
      k--;
    }
  }

  return [];
}

function twoSumUnsorted(array, target) {
  // initialize our empty map
  let map = {};
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // find the complement target number by subtracting target - current number
    let complement = target - array[i];
    // if the current number exists in our map, return the index of the map, and current index
    if (map[array[i]] !== undefined) return [map[array[i]], i];
    // if no match was found earlier, store the complement number as a key and the index as the value
    map[complement] = i;
  }
}

// const answer = twoSumSorted([2, 4, 6, 8], 10);
const answer = twoSumUnsorted([2, 4, 6, 8], 10);
console.log(answer);
