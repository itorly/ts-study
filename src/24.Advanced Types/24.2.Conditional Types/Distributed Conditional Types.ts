// Distributed conditional types (runtime illustration)
const s: string = "x";
const n: number = 10;
const arr1 = [s];      // string[]
const arr2 = [n];      // number[]
console.log(JSON.stringify(arr1));
console.log(JSON.stringify(arr2));

// Filter strings from a union-like array at runtime
const mixed = ["a", "b", 1, 2, "c"];
const onlyStrings = mixed.filter((v) => typeof v === "string");
console.log(JSON.stringify(onlyStrings));