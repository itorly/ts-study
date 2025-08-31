// Creates unique identifiers.

// Useful for creating unique property keys and constants.
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log("obj[uniqueKey]: " + obj[uniqueKey]); // "This is a unique property"