// value" is just an identifier
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 }; // value: number