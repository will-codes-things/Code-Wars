// 8th kyu - if..else and ternary operator
// https://www.codewars.com/kata/57202aefe8d6c514300001fd
// 
// Task:
// 
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
//
// will_the_coder - February 1, 2023

function saleHotdogs(n) {
    let p;
    
     if (n < 5) {
       p = n * 100;
     } else if (n >= 5 && n < 10) {
       p = n * 95;
     } else if (n >= 10) {
       p = n * 90;
     }
     
     return p
   }