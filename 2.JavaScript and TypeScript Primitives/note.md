
when you run tsc filename.ts directly with a specific file, TypeScript ignores your tsconfig.json and uses default compiler options instead.

```bash
# according to tsconfig.json, compile .ts files
npx tsc
```

```bash
# run the .ts file directly
npx ts-node filename.ts
```