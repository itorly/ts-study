// Conditional types (runtime illustration)
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;    // true
type B = IsString<number>;    // false
type C = IsString<'hello'>;    // true
type D = IsString<string | number>; // boolean


// Compile-time tests (these assert the expected literal types)
const testA: A = true;
// const testA2: A = false; // Error: Type 'false' is not assignable to type 'true'
const testB: B = false;
const testC: C = true;
// D is boolean (distributive over union), so both true/false are allowed:
const testD1: D = true;
const testD2: D = false;

console.log(testA, testB, testC, testD1, testD2);

// Extract array element type
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Numbers = ArrayElement<number[]>; // number

const testNumbers: Numbers = 1;
console.log( testNumbers ); 


const arr = [1, 2, 3];
console.log(typeof arr[0]); // 'number'

function isString(x: unknown): boolean {
  return typeof x === "string";
}
console.log(isString("hello")); // true
console.log(isString(42));      // false