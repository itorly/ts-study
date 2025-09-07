// Conditional types (runtime illustration)
type IsString<T> = T extends string ? true : false;
type ArrayElement<T> = T extends (infer U)[] ? U : never;

const arr = [1, 2, 3];
console.log(typeof arr[0]); // 'number'

function isString(x: unknown): boolean {
  return typeof x === "string";
}
console.log(isString("hello")); // true
console.log(isString(42));      // false