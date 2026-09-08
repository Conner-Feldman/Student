// This code demonstrates the use of union types in TypeScript. 
// The variable 'value' can hold a string, undefined, or null, 
// but cannot hold a number.
let value: string | undefined | null = null;
value = 'hello';
value = undefined;
value = null;

value = 1; // Error: Type 'number' is not assignable to type 'string | undefined | null'.