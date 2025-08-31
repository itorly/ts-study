// Optional parameter (implicitly `string | undefined`)
function greet(name?: string) {
  return `Hello, ${name || 'stranger'}`;
}

// Optional property in an interface
interface User {
  name: string;
  age?: number; // Same as `number | undefined` 
}