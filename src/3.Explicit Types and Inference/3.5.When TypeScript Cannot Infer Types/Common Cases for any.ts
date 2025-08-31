// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');
console.log(data);

// 2. Variables declared without initialization
let something;  // Type is 'any'
something = 'hello';
something = 42;  // No error
console.log(something);