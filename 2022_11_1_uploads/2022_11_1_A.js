// 8th kyu - Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// 
// Your task is to create a function that does four basic mathematical operations.
// 
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
//
// will_the_coder - November 1, 2022
//

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
