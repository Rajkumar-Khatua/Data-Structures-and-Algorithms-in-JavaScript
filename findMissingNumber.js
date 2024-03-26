const findMissingNumber = (arr) => {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum)
  console.log("Total ," + total)
  return total - sum;
};

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8])); // 0

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
