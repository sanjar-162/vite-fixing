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

// Traverse the AST and filter to keep only export-related nodes
const exportNodes = [];
babel.traverse(ast, {
  ExportNamedDeclaration(path) {
    exportNodes.push(path.node); // Collect export named declarations
  },
  ExportDefaultDeclaration(path) {
    exportNodes.push(path.node); // Collect export default declarations
  },
  ExportAllDeclaration(path) {
    exportNodes.push(path.node); // Collect export all declarations
  },
});

// Serialize the filtered AST (export-related nodes only)
const exportAST = JSON.stringify(exportNodes, null, 2);

// Save the filtered AST (only exports) to a file
fs.writeFileSync("export-ast.json", exportAST);

// Optionally, save the transformed code without imports (if needed)
fs.writeFileSync("transformed.js", transformedCode.code);
