const largestElement = (nestedArray) => {
  // define the largest variable and set it to the first element of the array
  let largest = nestedArray[0][0];
  // loop through the array
  for (let arr of nestedArray) {
    for (let num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
};

console.log(
  largestElement([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 9
