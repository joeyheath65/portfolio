import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce consistent quotes
      quotes: ["error", "double"],
      // Enforce consistent JSX quotes
      "jsx-quotes": ["error", "prefer-double"],
      // Enforce consistent spacing in curly braces
      "object-curly-spacing": ["error", "always"],
      // Enforce consistent function component definition
      "react/function-component-definition": [
        "error",
        { namedComponents: "function-declaration" }
      ],
      // Enforce hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Enforce consistent import order
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling"],
          "newlines-between": "always",
          alphabetize: { order: "asc" }
        }
      ]
    }
  }
];

export default eslintConfig;
