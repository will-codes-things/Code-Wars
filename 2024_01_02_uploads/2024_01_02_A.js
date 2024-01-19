// 8th kyu - Double Char
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
// 
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// 
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// 
// will_the_coder - January 02, 2024

const doubleChar = (str) => str.split("").map(char => char + char).join("");