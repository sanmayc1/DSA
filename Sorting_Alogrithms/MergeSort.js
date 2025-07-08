const MergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return Merge(MergeSort(left), MergeSort(right));
};

const Merge = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return [...result,...left.slice(leftIndex) ,...right.slice(rightIndex)]
};


console.log(MergeSort([8,7,6,5,3,8,2,6]))