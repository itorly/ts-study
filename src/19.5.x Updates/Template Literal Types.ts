// type Color = "red" | "green" | "blue"; 
// type HexColor<T extends Color> = `#${string}`;

// // Usage
// let myColor: HexColor<"blue"> = "#0000FF";

// console.log(myColor)    // #0000FF

/**
 * The significance of Template Literal Types lies in that for the Types defined by it 
 * (such as ColorVariable<T extends Color>, HexColor, ApiEndpoint<T extends HttpMethod>), 
 * during the definition process, 
 * some customized rules are described through generics, string pattern matching, and other means, 
 * thereby ensuring that the variables of the Type comply with these rules.
 * 
 * Template Literal Types are essentially a way to create "string contracts" at the type level. 
 */

/**
 * Template Literal Types provide compile-time validation.
 */

/**
   This is particularly powerful because:

    Rules are encoded in the type system - no runtime overhead
    IDE support - autocomplete and error detection
    Refactoring safety - if you change the pattern, all usages get checked
    Self-documenting - the type itself describes the expected format
 */

// more examples
// Example 1: Actually using the color parameter
type Color = "red" | "green" | "blue";
type ColorVariable<T extends Color> = `--color-${T}`;

let cssVar: ColorVariable<"blue"> = "--color-blue";  // ✅ Valid
// let invalid: ColorVariable<"blue"> = "--color-red";  // ❌ Error!

console.log(cssVar)

// Example 2: Stricter hex validation
type HexColor = string & { readonly __brand: 'HexColor' };

function createHexColor(color: string): HexColor {
  if (!/^#[0-9a-fA-F]{6}$/.test(color)) {
    throw new Error('Invalid hex color format');
  }
  return color as HexColor;
}

let validHex = createHexColor("#ff0000");   // ✅ Runtime validation
// let invalidHex = createHexColor("#gggggg"); // ❌ Runtime error

console.log(validHex)

// Example 3: Dynamic API endpoints
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiEndpoint<T extends HttpMethod> = `${T} /api/users`;

let getEndpoint: ApiEndpoint<"GET"> = "GET /api/users";     // ✅ Valid
let postEndpoint: ApiEndpoint<"POST"> = "POST /api/users";  // ✅ Valid
// let wrongMethod: ApiEndpoint<"GET"> = "POST /api/users";    // ❌ Error!

console.log(getEndpoint)
console.log(postEndpoint)

// Example 4: File paths
type FileType = "jpg" | "png" | "gif";
type FilePath<T extends FileType> = `/images/${string}.${T}`;

let jpgPath: FilePath<"jpg"> = "/images/photo.jpg"; // ✅ Valid
let pngPath: FilePath<"png"> = "/images/graphic.png"; // ✅ Valid
// let invalidPath: FilePath<"gif"> = "/images/animation.mp4"; // ❌ Error!

console.log(jpgPath)
console.log(pngPath)