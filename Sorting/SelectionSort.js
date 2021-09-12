function selectionSort(arr = []) {
  var n = arr.length;
  for (i = 0; i < n; i++) {
    var min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([6, 4, 3, 1, 8]));
