// 8th kyu - Simple multiplication
// https://www.codewars.com/kata/583710ccaa6717322c000105
//
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//
// will_the_coder - January 13, 2023

function simpleMultiplication(number) {
    if (number % 2 == 0) {
      return number * 8
    } else if (number % 1 == 0) {
      return number * 9
    } else {
      console.log("unknown error")
    }
}
