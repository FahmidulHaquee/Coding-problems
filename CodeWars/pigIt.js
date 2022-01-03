function pigIt(str) {
  // 0. Initialise punctuation list
  const punctuation = ["?", ",", ".", "!", ":", ";", "-", "(", ")", "[", "]"];

  // 1. Break string into words array
  const wordsArray = str.split(" ");

  // 2. Iterate on each word in the array
  for (let i = 0; i < wordsArray.length; i++) {
    // 3. Check if it is a punctuation mark
    if (!punctuation.includes(wordsArray[i])) {
      wordInPig = wordsArray[i].slice(1) + wordsArray[i].slice(0, 1) + "ay"; // Remove first letter and add ay
      wordsArray[i] = wordInPig;
    }
  }
  // 3. Return string
  return wordsArray.join(" ");
}

const input = "Pig latin is cool";
let output = pigIt(input);
console.log(output);
