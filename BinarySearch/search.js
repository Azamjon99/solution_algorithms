function binarySearchRecursive(n, arr) {
    let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != n) {
      return false;
    }
    if (n === arr[middle]) {
      return true;
    } else if (n < arr[middle]) {
      return binarySearchRecursive(n, arr.slice(0, middle));
    } else if (n > arr[middle]) {
      return binarySearchRecursive(n, arr.slice(middle));
    }
}