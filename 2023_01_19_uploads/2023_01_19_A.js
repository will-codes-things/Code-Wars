// 8th kyu - Summing a number's digits
// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
//
//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits
//
// will_the_coder - January 19, 2023

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a,b) => a+b, 0);
  }