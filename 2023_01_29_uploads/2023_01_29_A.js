// 8th kyu - Vowel remover
// https://www.codewars.com/kata/5547929140907378f9000039/solutions
//
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// 
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata
//
// will_the_coder - January 29, 2023

const shortcut = string => string.replace( /[aeiou]/g, '' );