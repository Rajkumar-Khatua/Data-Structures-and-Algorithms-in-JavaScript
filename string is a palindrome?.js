const isPalindromes = (str) => {
  const reverse = str.split("").reverse().join("");

  return reverse === str;
};
console.log(isPalindromes("level")); // true

const users = [
    { name: "John", id: 1, city: "Delhi" },
    { name: "Max", id: 2, city: "London" },
    { name: "Rod", id: 3, city: "Paris" },
  ];
  console.table(users);