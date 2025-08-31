// The above code is valid TypeScript code. It defines two interfaces, Animal, with the same name, but with different properties. 
// The second interface adds the age property to the Animal interface. 
// When we create a variable of type Animal, it can have both the name and age properties. 
// This is known as interface merging in TypeScript.
interface Animal { name: string; } interface Animal { age: number; } const dog: Animal = { name: "Fido", age: 5 }; 
console.log(dog.name); // Fido console.log(dog.age); // 5
