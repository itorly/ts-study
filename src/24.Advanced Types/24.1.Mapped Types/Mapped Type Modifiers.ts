// Mapped modifiers example
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OptionalTodo = {
  [K in keyof Todo]?: Todo[K];
};

const t1: OptionalTodo = { title: "Learn TS" };
console.log(t1.title);
console.log(String(t1.description));
console.log(String(t1.completed));