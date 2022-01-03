function spinWords(string) {
  if (string.includes(" ")) {
    const wordArray = string.split(" ");
    for (let word of wordArray) {
      if (word.length >= 5) {
        word = word.split("").reverse().join("");

        console.log(word);

        wordArray[wordArray.indexOf(word)] = word;
      }
      return wordArray.join(" ");
    }
  } else {
    if (string.length >= 5) {
      string = string.split("").reverse().join("");
    }
    return string;
  }
}

// const input = "Hey fellow warriors";
// console.log(input.includes(" "));

// const wordArray = input.split(" ");
// console.log(input.split(" "));

// const word = wordArray[0];
// console.log();

console.log();
