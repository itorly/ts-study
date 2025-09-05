type HexColor = string & { readonly __brand: 'HexColor' };

function createHexColor(color: string): HexColor {
  if (!/^#[0-9a-fA-F]{6}$/.test(color)) {
    throw new Error('Invalid hex color format');
  }
  return color as HexColor;
}

// ✅ These will work
try {
  let validHex1 = createHexColor("#ff0000");   // Red
  let validHex2 = createHexColor("#00FF00");   // Green (uppercase OK)
  let validHex3 = createHexColor("#0000ff");   // Blue
  let validHex4 = createHexColor("#123abc");   // Mixed numbers/letters
  
  console.log("Valid colors:");
  console.log(validHex1);  // #ff0000
  console.log(validHex2);  // #00FF00
  console.log(validHex3);  // #0000ff
  console.log(validHex4);  // #123abc
} catch (error) {
  console.error("Unexpected error:", error);
}

// ❌ These will throw errors
console.log("\nTesting invalid colors:");

try {
  let invalidHex1 = createHexColor("#gggggg");  // Invalid characters
} catch (error) {
  console.log("Caught error for #gggggg:", error instanceof Error ? error.message : String(error));
}

try {
  let invalidHex2 = createHexColor("#ff00");    // Too short
} catch (error) {
  console.log("Caught error for #ff00:", error instanceof Error ? error.message : String(error));
}

try {
  let invalidHex3 = createHexColor("ff0000");   // Missing #
} catch (error) {
  console.log("Caught error for ff0000:", error instanceof Error ? error.message : String(error));
}