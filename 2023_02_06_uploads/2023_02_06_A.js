// 8th kyu - Geometry Basics: Distance between points in 2D
// https://www.codewars.com/kata/58dced7b702b805b200000be
// 
// This series of katas will introduce you to basics of doing geometry with computers.
// 
// Point objects have attributes x and y.
// 
// Write a function calculating distance between Point a and Point b.
// 
// Tests compare expected result and actual answer with tolerance of 1e-6.
//
// will_the_coder - February 6, 2023

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  } 