const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment 
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error  // Type 'number | undefined' is not assignable to type 'number'. Type 'undefined' is not assignable to type 'number'.ts(2322)
// console.log(head);