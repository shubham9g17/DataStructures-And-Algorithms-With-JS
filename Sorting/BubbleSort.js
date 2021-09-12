function bubbleSort(arr = []) {
  var sorted;
  for (i = 0; i < arr.length; i++) {
    sorted = true;
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) {
      return arr;
    }
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4]));
