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
  console.log("Hi, " + name); // ther was mising closing brackets
}
sayHi("Mira");

/* Bug-2 */
// let word = "hello";
// console.log(word.toUppercase()); // find the bug

// Input :word.toUppercase()
// Expected Output : HELLO

// fixed Bug-2
let word = "hello";
console.log(word.toUpperCase()); // Bug type: there was missing capital C in toUpperCase Method

/* Bug-3 */
// function square(num) {
//   return num + num; // find the bug
// }
// console.log(square(4)); // should be 16

// Input : square(4)
// Expected Output : 16

// fixed Bug-3
function square(num) {
  return num * num; // // Bug type: there was doing addtion insted of multiply
}
console.log(square(4)); // should be 16
