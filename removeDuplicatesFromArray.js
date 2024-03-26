const RemoveDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(RemoveDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8]));