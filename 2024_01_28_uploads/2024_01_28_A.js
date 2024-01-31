// 8th kyu - Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6
// 
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// 
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// 
// Mind the input validation.
// 
// will_the_coder - January 28, 2024

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }