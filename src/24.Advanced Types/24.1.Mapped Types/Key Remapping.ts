// Key remapping demo (runtime helper)
type User = { id: number; name: string; email: string };

function makeGetters<T extends Record<string, any>>(obj: T) {
  const out: any = {};
  for (const k of Object.keys(obj)) {
    const cap = k.charAt(0).toUpperCase() + k.slice(1);
    out["get" + cap] = () => obj[k];
  }
  /**
   * Why the as assertion is necessary
      TypeScript doesn't track the dynamic out["get" + cap] = () => obj[k] assignment precisely during the loop. 
      So the compiler cannot automatically infer that out matches the mapped return type.
      
      as { ... } gives the precise static shape to callers. 
      It's a safe assertion here because the runtime code does construct those properties.
   */
  return out as {
    // [K in keyof T] — iterate every property key K of T (e.g. "id", "name", "email").
    // as get${...}`` — remap each original key to a new key name using a template literal. So "id" → "getId".
    // `get${Capitalize<...>}` — build the new key string. Capitalize makes the first letter upper-case (id → Id), so you get getId not getid.
    // (): => T[K] — the new property is a function that returns the original property's type. For id: number you get getId: () => number.
    /**
     * Why string & K is used
        Capitalize<> expects a string type. 
        K can be a union that includes string | number | symbol (or a string literal type). 
        string & K forces the compiler to treat K as a subtype of string so Capitalize<string & K> is valid.
        
        In short: it narrows K to string for the template/capitalize operation.
     */
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
  };
}

const u: User = { id: 7, name: "Bob", email: "bob@example.com" };
const g = makeGetters(u);
console.log(g.getId());
console.log(g.getName());
console.log(g.getEmail());