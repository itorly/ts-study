// type Color = "red" | "green" | "blue"; 
// type HexColor<T extends Color> = `#${string}`;

// // Usage
// let myColor: HexColor<"blue"> = "#0000FF";

// console.log(myColor)    // #0000FF

// more examples
// Example 1: Actually using the color parameter
type Color = "red" | "green" | "blue";
type ColorVariable<T extends Color> = `--color-${T}`;

let cssVar: ColorVariable<"blue"> = "--color-blue";  // ✅ Valid
// let invalid: ColorVariable<"blue"> = "--color-red";  // ❌ Error!

console.log(cssVar)

// Example 2: Stricter hex validation
type HexDigit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"a"|"b"|"c"|"d"|"e"|"f";
type HexColor = `#${HexDigit}${HexDigit}${HexDigit}${HexDigit}${HexDigit}${HexDigit}`;

let validHex: HexColor = "#ff0000";   // ✅ Valid
// let invalidHex: HexColor = "#gggggg"; // ❌ Error!

console.log(validHex)