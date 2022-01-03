function getCount(str) {
  let vowelsCount = 0;

  // enter your majic here
  // 1. Initialise a variable that has the vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // 2. Iterate through the input string
  for (let char of str) {
    // 3. Check if the character is a vowel (in vowels array)
    if (vowels.includes(char)) {
      // 4. Increment vowels count
      vowelsCount++;
    }
  }

  return vowelsCount;
}
