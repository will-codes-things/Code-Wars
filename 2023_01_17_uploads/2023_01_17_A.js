// 8th kyu - Reversed Words
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/solutions
//
// Complete the solution so that it reverses all of the words within the string passed in.
//
// Words are separated by exactly one space and there are no leading or trailing spaces.
//
// will_the_coder - January 17, 2023

const reverseWords = (str) => str.split(" ").reverse().join(" ");