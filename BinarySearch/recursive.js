function binarySearchRecursive( arr, target) {
    let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != target) {
      return false;
    }
    if (target === arr[middle]) {
      return true;
    } else if (target < arr[middle]) {
      return binarySearchRecursive( arr.slice(0, middle), target);
    } else if (target > arr[middle]) {
      return binarySearchRecursive( arr.slice(middle), target);
    }
}