const fs = require("fs");
const parser = require("@babel/parser");
const babel = require("@babel/core");

// Read JS/JSX file
const jsCode = fs.readFileSync(
  "/Users/muhammad/volopay-work/vp-fly/src/components/common/BillPayAndPayroll/VendorOrEmployee/common/BankDetailsBasedOnProvider/AllBankDetails.js",
  "utf-8"
);
// Parse and transform the code in one step
const transformedCode = babel.transformSync(jsCode, {
  plugins: [
    ["transform-remove-imports", { removeAll: true }], // Remove all import statements
  ],
  presets: ["@babel/preset-react"], // Enable JSX syntax support
});

// Parse the transformed code to generate the AST (with JSX enabled and imports removed)
const ast = parser.parse(transformedCode.code, {
  sourceType: "module", // or 'script' if not using ES modules
  plugins: ["jsx"], // Enable JSX plugin
});

// Store the verbatim code between export blocks
let extractedCode = "";

babel.traverse(ast, {
  ExportNamedDeclaration(path) {
    const start = path.node.loc.start; // Start position of the export block
    const end = path.node.loc.end; // End position of the export block

    // Get the verbatim code between the start and end positions
    const startIndex = getIndexFromPosition(jsCode, start);
    const endIndex = getIndexFromPosition(jsCode, end);

    extractedCode += jsCode.slice(startIndex, endIndex);
  },
  ExportDefaultDeclaration(path) {
    const start = path.node.loc.start; // Start position of the export block
    const end = path.node.loc.end; // End position of the export block

    const startIndex = getIndexFromPosition(jsCode, start);
    const endIndex = getIndexFromPosition(jsCode, end);

    extractedCode += jsCode.slice(startIndex, endIndex);
  },
  ExportAllDeclaration(path) {
    const start = path.node.loc.start; // Start position of the export block
    const end = path.node.loc.end; // End position of the export block

    const startIndex = getIndexFromPosition(jsCode, start);
    const endIndex = getIndexFromPosition(jsCode, end);

    extractedCode += jsCode.slice(startIndex, endIndex);
  },
});

// Helper function to get index from line and column
function getIndexFromPosition(code, position) {
  const lines = code.split("\n");
  const line = lines[position.line - 1]; // Line number is 1-based
  return (
    line.slice(0, position.column).length +
    lines.slice(0, position.line - 1).join("\n").length +
    (position.line === 1 ? 0 : 1)
  );
}

// Save the extracted code (the verbatim export blocks) to a file
fs.writeFileSync("extracted-exports.js", extractedCode);
