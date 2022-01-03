// HackerRank

function getSecondLargest(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  const set = new Set(nums);

  const arr = Array.from(set);
  arr.reverse();

  return arr[1];
}

nums = [2, 4, 6, 6, 9, 8];
console.log(getSecondLargest(nums));
