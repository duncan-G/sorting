function bubbleSort(array) {
  let sorted = false;
  let j = 0;
  while (!sorted) {
    let isSorted = true;
    for (let i = 0; i < array.length - j - 1; i++) {
      if (compare(array[i], array[i + 1])) {
        swap.call(array, i, i + 1);
        isSorted = false;
      }
    }
    j += 1;
    sorted = isSorted;
  }
}

swap = function(i, j) {
  let temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

compare = function(i, j) {
  return i > j;
};
