// 8th kyu - All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1/
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
//
// Will Gillette - August 30, 2022
//

function strCount(str, letter){  
    return str.split(letter).length-1
  }