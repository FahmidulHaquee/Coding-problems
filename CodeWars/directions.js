function dirReduc(arr) {
  // Simplify the instructions

  // 1. Edge cases
  if (arr === []) {
    return arr;
  }

  // 2. Iterate through directions array

  let wasChange = null;

  while (wasChange !== 0) {
    wasChange = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
        arr.splice(i, 2); // Remove both elements
        i--;
        wasChange++;
      } else if (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
        arr.splice(i, 2); // Remove both elements
        i--;
        wasChange++;
      } else if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
        arr.splice(i, 2); // Remove both elements
        i--;
        wasChange++;
      } else if (arr[i] === "WEST" && arr[i + 1] === "EAST") {
        arr.splice(i, 2); // Remove both elements
        i--;
        wasChange++;
      }
    }
    return arr;
  }
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
