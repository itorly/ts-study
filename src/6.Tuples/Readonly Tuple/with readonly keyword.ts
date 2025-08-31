// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off'); // Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.

console.log(ourReadonlyTuple); // [5, true, 'The Real Coding God']