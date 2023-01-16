function hasTargetSum(array, target) {
  const seen = new Set();
  for (const num of array) {
    if (seen.has(target - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}




/* 
  Write the Big O time complexity of your function here
*/O(n);

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/the function iterates through the input array using a for-of loop. For each number in the array, it checks if the target minus that number is in the set seen. If it is, it means that we have found a pair of numbers that add up to the target and the function returns true. If the number is not in the set, it adds it to the set.

After iterating through the entire array, if no pair of numbers adding up to the target has been found, the function returns false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
