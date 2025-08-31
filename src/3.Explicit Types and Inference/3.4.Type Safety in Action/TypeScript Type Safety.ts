// TypeScript Type Safety Example

// Function that adds two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Correct usage
const sum = addNumbers(5, 3);
console.log(`5 + 3 = ${sum}`);

// This would cause a TypeScript error if uncommented:
// const result = addNumbers("5", 3);