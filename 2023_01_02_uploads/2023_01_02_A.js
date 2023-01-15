// 8th kyu - Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028
//
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//
// will_the_coder - January 2, 2023

function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }