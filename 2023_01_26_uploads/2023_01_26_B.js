// 8th kyu - How many lightsabers do you own?
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8
//
// Inspired by the development team at Vooza, write the function that
// 
//     accepts the name of a programmer, and
//     returns the number of lightsabers owned by that person.
// 
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// 
// Note: your function should have a default parameter.
// 
// For example(Input --> Output):
// 
// "anyone else" --> 0
// "Zach" --> 18
// 
// 
//
// will_the_coder - January 26, 2023

const howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;