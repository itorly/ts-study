/**
 * type PointGenerator = () => { x: number; y: number; };

    type PointGenerator = — declares a type alias named PointGenerator.
    () => — the alias is a function type that takes no arguments.
    { x: number; y: number; } — the function returns an object with numeric x and y properties.
    In plain words: PointGenerator is the type of any function that, when called, returns an object shaped like { x: number; y: number }.
 */
/**
 * Type alias for a function (no runtime class needed):
    Use when you only need a callable type or a return shape.
    Works with utilities: type P = ReturnType<PointGenerator>

 * Class (runtime constructor function):
    Use when you want constructors, methods, inheritance, or instanceof checks.
 */
/**
  Use a type alias/interface when you only care about the shape/signature and want zero runtime cost (APIs, callbacks, DTOs).
  Use a class when you need a concrete runtime implementation (constructors, methods, inheritance, identity).
 */
type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

console.log(point); // { x: 10, y: 20 }