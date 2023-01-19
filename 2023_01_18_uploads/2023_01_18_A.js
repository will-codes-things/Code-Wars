// 8th kyu - Price of Mangoes
// https://www.codewars.com/kata/57a77726bb9944d000000b06
//
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
//
// will_the_coder - January 18, 2023

const mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3));