// Iterate over a string with for-of statement

var vowelList = "aeiou";
var consonantList = "";

function vowelsAndConsonants(s) {
  for (let letter of s) {
    if (vowelList.includes(letter)) {
      console.log(letter);
    } else {
      consonantList += letter + "\n";
    }
  }
  console.log(consonantList);
}
