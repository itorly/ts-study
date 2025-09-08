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
