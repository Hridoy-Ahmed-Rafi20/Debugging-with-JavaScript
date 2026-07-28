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
  return "Hi, " + name; // there was missing a ) brackets and it was just console.log,not returning something
  //  which i have returned
}
console.log(sayHi("Mira"));

/* Bug-2 */
// let word = "hello";
// console.log(word.toUppercase()); // find the bug

// Input :word.toUppercase()
// Expected Output : HELLO

// fixed Bug-2
let word = "hello";
console.log(word.toUpperCase()); // there was missing uppercase C in toUpperCase() method

/* Bug-3 */
// function square(num) {
//   return num + num; // find the bug
// }
// console.log(square(4)); // should be 16

// Input : square(4)
// Expected Output : 16

// fixed Bug-3
function square(num) {
  return num * num; // here was adding two number requirement wanted square. I have fixed but from additon: + to multiply: *
}
console.log(square(4)); // should be 16
