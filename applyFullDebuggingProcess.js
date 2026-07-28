/* Task 14-8: Apply the Full Debugging Process 
Problem Statement: 
This function should return how many vowels are in a string. Go through the full checklist: does it 
run? does it crash? is the answer wrong? isolate it with console.log, then fix it. 
Input : "orange"
Expected Output : 3
 */

/* Buggy code */
// Apply the full debugging process to find this bug
// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let i = 0; i <= str.length; i++) {
//     // find the bug
//     if (vowels.includes(str[i])) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// console.log(countVowels("orange")); // Expected: 3

// Fixed Bug
// Apply the full debugging process to find this bug
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    // here was a length issue, length should be -1 from original length
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("orange")); // Expected: 3
