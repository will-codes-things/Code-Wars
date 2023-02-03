// 8th kyu - Find Nearest square number
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
// 
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
// 
// Goodluck :)
//
// will_the_coder - February 2, 2023

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);