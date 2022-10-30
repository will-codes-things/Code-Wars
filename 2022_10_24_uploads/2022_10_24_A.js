// 8th kyu - Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//
// will_the_coder - October 24, 2022
//

const drinkRate = 0.5
const litres = (time) => Math.floor(time * drinkRate); 