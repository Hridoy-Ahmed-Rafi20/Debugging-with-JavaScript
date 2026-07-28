/* Task 14-1: Spot the Error Type 
Below are three small broken snippets. For each, identify the error type (Syntax / Runtime / Logic), 
then fix it. */

// Snippet A
/* Bug-1 */
// function sayHi(name) {
// console.log("Hi, " + name  // find the bug
// }
// sayHi("Mira");

// Input : sayHi("Mira")
// Expected Output  : Hi, Mira

// fixed Bug
function sayHi(name) {
  console.log("Hi, " + name); // find the bug
}
sayHi("Mira");
