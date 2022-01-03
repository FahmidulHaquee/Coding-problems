function compare(a, b) {
  let y = a.split("").sort().join("");
  let z = b.split("").sort().join("");
  console.log(
    z === y
      ? a + " and " + b + " are anagrams!"
      : a + " and " + b + " are not anagrams."
  );
}
