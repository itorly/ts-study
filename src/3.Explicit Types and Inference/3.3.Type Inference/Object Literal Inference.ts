// Object Type Inference Example

// TypeScript infers the shape of the object
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true
};

// TypeScript knows these properties exist
console.log(user.name);   // OK
// console.log(user.email); // Error: Property 'email' does not exist