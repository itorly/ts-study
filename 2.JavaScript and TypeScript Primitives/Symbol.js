"use strict";
// Creates unique identifiers.
Object.defineProperty(exports, "__esModule", { value: true });
// Useful for creating unique property keys and constants.
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log("obj[uniqueKey]: " + obj[uniqueKey]); // "This is a unique property"
