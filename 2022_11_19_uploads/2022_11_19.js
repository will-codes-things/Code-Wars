// 8th kyu - Regular Ball Super Ball
// https://www.codewars.com/kata/53f0f358b9cb376eca001079
// 
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
// 
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// 
// will_the_coder - November 19, 2022

class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }