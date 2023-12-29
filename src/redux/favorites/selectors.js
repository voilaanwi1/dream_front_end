import { createSelector} from "reselect";

const favoriteSelector= state => state.favorites
export const getFavorites=createSelector([favoriteSelector],state => state.list)

// //const favoriteSelector 

// // I create an arrow function to add 2 numbers 

// // arrow functions are anonymous that is they don't have any name 

// // syntax of arrow function () => {} 

// const addTwoNumbers = (x, y) => {
//     return x + y;
// } 

// // to use a function, we have to call it and to call a function, we need a name 

// // now call the function 

// console.log(addTwoNumbers(8,9));

// // create an arrow function that returns square of the given number 

// const squareNumber = x => x * x  

// console.log(squareNumber(5));

// // () => {}    when you don't have any parameters

// const add3numbers=(s,t,q)=>{
//     return s+t+q //if only one line or (s,t,q)if multiple lines
// }

// console.log(add3numbers(5,6,7));
// // in new javascript, we have let and const keywords to create a variable
// const multiplyNumber= t => t * t
// console.log(multiplyNumber(2));
