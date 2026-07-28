/* Task 14-1: Spot the Error Type 
Below are three small broken snippets. For each, identify the error type (Syntax / Runtime / Logic), 
then fix it. */


/* Bug-1 */
// function sayHi(name) {
// console.log("Hi, " + name  // find the bug
// }
// sayHi("Mira");

// Input : sayHi("Mira")
// Expected Output  : Hi, Mira

// fixed Bug-1
function sayHi(name) {
  console.log("Hi, " + name); // find the bug
}
sayHi("Mira");


/* Bug-2 */
// let word = "hello";
// console.log(word.toUppercase()); // find the bug

// Input :word.toUppercase()
// Expected Output : HELLO

// fixed Bug-2
let word = "hello";
console.log(word.toUpperCase()); // find the bug

// Input :word.toUppercase()
// Expected Output : HELLO
