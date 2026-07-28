/* Task 14-5: Debug a Broken Function 
Problem Statement: 
This function should return the difference between two numbers (a - b). It currently swaps the 
parameters somewhere and gives a wrong result. 
Input : 10, 3 
Expected Output : 7 
*/

/* Bug */
// Bug: find why the result comes out negative
// function subtract(a, b) {
//   return b - a; // find the bug
// }
// console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)

// Fixed Bug
// Bug: find why the result comes out negative
function subtract(a, b) {
  return a - b; // here was b-a, that should a-b
}
console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)
