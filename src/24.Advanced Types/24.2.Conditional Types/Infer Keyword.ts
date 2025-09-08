// Get return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// Get parameter types as a tuple
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// Get constructor parameter types
type ConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

// Get instance type from a constructor
type InstanceType<T extends new (...args: any) => any> =
  T extends new (...args: any) => infer R ? R : any;

// -------------------------
// Tests / examples for ReturnType
// -------------------------
// Explanation: `ReturnType<T>` uses a conditional type with `infer R`.
// If `T` is a function type, `infer R` captures that function's return
// type and the whole `ReturnType<T>` evaluates to `R`. Otherwise it
// falls back to `any`.

function makePoint() {
  return { x: 10, y: 20 };
}

type R1 = ReturnType<typeof makePoint>; // inferred as { x: number; y: number }
const p: R1 = makePoint();
console.log('makePoint ->', p);

const strLen = (s: string) => s.length;
type R2 = ReturnType<typeof strLen>; // inferred as number
const n: R2 = strLen('abc');
console.log('strLen ->', n);

async function fetchValue() {
  return 42;
}
type R3 = ReturnType<typeof fetchValue>; // inferred as Promise<number>
const promise: R3 = fetchValue();
promise.then(v => console.log('fetchValue ->', v));

// A non-function falls back to `any` per the conditional type
type R4 = ReturnType<string>;
const anyVal: R4 = 'this is any';
console.log('ReturnType<string> (fallback any) ->', anyVal);
