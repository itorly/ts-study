// Mapped modifiers example
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OptionalTodo = {
  [K in keyof Todo]?: Todo[K];
};

// Remove 'readonly' and '?' modifiers
// -readonly (prefix) — remove the readonly modifier from each property.
// -? (suffix after the index) — remove the ? (optional) modifier, i.e., make the property required.
type Concrete<T> = {
  -readonly [K in keyof T]-?: T[K];
};

// Add 'readonly' and 'required' to all properties
type ReadonlyRequired<T> = {
  +readonly [K in keyof T]-?: T[K];
};

const t1: OptionalTodo = { title: "Learn TS" };
console.log(t1.title);
console.log(String(t1.description));
console.log(String(t1.completed));

const t2: Concrete<OptionalTodo> = { title: "Learn TS", description: "Learn TS destription", completed: false };
console.log(t2.title);
console.log(String(t2.description));
console.log(String(t2.completed));
t2.title = "Modify Learn TS";
console.log(t2.title);

const t3: ReadonlyRequired<OptionalTodo> = { title: "Learn TS", description: "Learn TS destription", completed: false };
console.log(t3.title);
console.log(String(t3.description));
console.log(String(t3.completed));
// Error: Cannot assign to 'title' because it is a read-only property
// t3.title = "Modify Learn TS";
// console.log(t3.title);