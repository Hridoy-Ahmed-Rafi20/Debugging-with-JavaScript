/* Task 14-7: Debug a Multi-Part Bug 
Problem Statement: 
This function should return an array of only the odd numbers from the input array. It currently has 
two separate bugs — fix them one at a time. 
Input : [1, 2, 3, 4, 5, 6]
Expected Output :  [1, 3, 5]
 */

/* Buggy code */
// This code has TWO bugs. Fix one, re-run, then find the next.

// function getOddNumbers(numbers) {
//   let odds = [];
//   for (let i = 0; i <= numbers.length; i++) { // bug #1 is here
//     if (numbers[i] % 2 = 1) {                  // bug #2 is here
//       odds.push(numbers[i]);
//     }
//   }
//   return odds;
// }
// console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]

// Fixed Bug
// This code has TWO bugs. Fix one, re-run, then find the next.
function getOddNumbers(numbers) {
  let odds = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    // here was counting with the total length of numbers, but should be less than numbers length
    if (numbers[i] % 2 === 1) {
      // here was comparing with one = but should be compare with 3 ===
      odds.push(numbers[i]);
    }
  }

  return odds;
}
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]
