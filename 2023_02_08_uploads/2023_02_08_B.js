// 8th kyu - Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript
// 
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//
// ex:
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
//
// will_the_coder - February 8, 2023

var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };