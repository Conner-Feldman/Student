// Template Literal Types in TypeScript allow you to create types that are based on string literals. 
// This can be particularly useful for defining specific formats or patterns for strings.
type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

// Usage:
let myColor: HexColor<"blue"> = "#0000FF";

// -----------------------------------------------------------------------------
// Index Signature Labels, which allow you to define types for objects with dynamic keys.
// Useful for cases where the keys of an object are not known in advance but follow a certain pattern.
type DynamicObject = { [ key: `dynamic_${string}`]: string };

// Usage:
let obj: DynamicObject = { dynamic_key: "value" };