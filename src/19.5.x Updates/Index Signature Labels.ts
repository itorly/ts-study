type DynamicObject = { [key: `dynamic_${string}`]: string };

// Usage: 
let obj: DynamicObject = { dynamic_key: "value" };

console.log(obj);