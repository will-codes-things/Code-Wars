// 8th kyu - Unfinished Loop - Bug Fixing #1
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da
//
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
//
// will_the_coder - January 22, 2023

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }