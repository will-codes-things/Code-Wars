// 8th kyu - Removing elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
// 
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// 
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// 
// None of the arrays will be empty, so you don't have to worry about that!
// 
// will_the_coder - August 02, 2023

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);