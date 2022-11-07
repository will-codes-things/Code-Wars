// 8th kyu - Is it a palindrome?
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
// 
// Write a function that checks if a given string (case insensitive) is a palindrome.
//
// will_the_coder - November 5, 2022
//

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }