// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
  return a + b;
}

// Log the values to see them in the output
console.log(username);
console.log(score);
console.log(flags);
console.log(add(5, 3));