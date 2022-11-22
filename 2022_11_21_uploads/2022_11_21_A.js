// 8th kyu - Enumerable Magic #4 - True for None?
// https://www.codewars.com/kata/545993ee52756d98ca0010e1`
//
//Create a method 'none' that accepts an array and a function, that returns true if the function returns true for none of the items in the array. An empty list should return true.
// 
// will_the_coder - November 21, 2022

const none = (arr, fun) => !arr.some(fun);