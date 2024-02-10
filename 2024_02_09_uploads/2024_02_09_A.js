// 8th kyu - Flick Switch
// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/solutions/javascript
// 
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
// Examples
// 
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// 
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// 
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// 
// Notes
// 
//     "flick" will always be given in lowercase.
//     A list may contain multiple flicks.
//     Switch the boolean value on the same element as the flick itself.
// 
// 
// 
// will_the_coder - February 9, 2024

function flickSwitch(arr){
    let text = true
    
     return arr.map(item => item === 'flick'? text = !text: text)
                
  
  }