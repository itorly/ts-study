// Key remapping demo (runtime helper)
type User = { id: number; name: string; email: string };

function makeGetters<T extends Record<string, any>>(obj: T) {
  const out: any = {};
  for (const k of Object.keys(obj)) {
    const cap = k.charAt(0).toUpperCase() + k.slice(1);
    out["get" + cap] = () => obj[k];
  }
  return out as {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
  };
}

const u: User = { id: 7, name: "Bob", email: "bob@example.com" };
const g = makeGetters(u);
console.log(g.getId());
console.log(g.getName());
console.log(g.getEmail());