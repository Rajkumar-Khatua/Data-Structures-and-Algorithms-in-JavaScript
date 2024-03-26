const ReturnNewArray = (numbers) => {
  return numbers.filter((num)=> num %2 === 0);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ReturnNewArray(array)); // [2, 4, 6, 8, 10]
