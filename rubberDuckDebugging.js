/* Task 14-6: Rubber Duck Debugging 
 
Problem Statement: 
Explain this function out loud, line by line, to find the bug. It should return true if a string is 
empty, otherwise false. 
Input : "" "hi"
Expected Output : true  false 
*/

/* Buggy code */
// Bug: explain this line out loud — what does str.length actually equal for ""?
// function isEmpty(str) {
//   if ((str.length = 0)) {
//     // find the bug
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEmpty("")); // Expected: true
// console.log(isEmpty("hi")); // Expected: false

// Fixed Bug
// Bug: explain this line out loud — what does str.length actually equal for ""?
function isEmpty(str) {
  // here comparing with one =, in one = we assign value not check anything.
  // if wanna compare must be use 3 === (with data types) or two == (with value)
  // so here is missing comparing operator
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty("")); // Expected: true
console.log(isEmpty("hi")); // Expected: false
