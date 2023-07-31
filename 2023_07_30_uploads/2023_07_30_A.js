// 8th kyu - Draw Stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
// 
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
// 
// For example n = 3 result in:
// 
// "I\n I\n  I"
//
// or:
// I
//  I
//   I
//
// will_the_coder - July 30, 2023

function drawStairs(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = `${' '.repeat(i)}I`;
        }

    return arr.join('\n');
}