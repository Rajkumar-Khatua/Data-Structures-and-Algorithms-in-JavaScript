function longestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(longestWord("May the force be with you"));
