## Type Annotations and Inference
TypeScript offers two ways to work with types:

1. **Explicit Typing**: You explicitly declare the type of a variable
2. **Type Inference**: TypeScript automatically determines the type based on the assigned value

### When to Use Each Approach
+ Use **explicit types** for:
    - Function parameters and return types
    - Object literals
    - When the initial value might not be the final type
+ Use **type inference** for:
    - Simple variable declarations with immediate assignment
    - When the type is obvious from the context