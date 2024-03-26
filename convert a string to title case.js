const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

console.log(toTitleCase("hello, world!")); // Hello, World!

function toTC(str) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}


console.log(toTC("hello, world!")); // Hello, World!