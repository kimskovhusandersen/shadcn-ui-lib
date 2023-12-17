const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: path.resolve(__dirname, "."),
    project: ["./tsconfig.json"],
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-refresh",
    "sort-destructure-keys",
    "typescript-sort-keys",
  ],
  rules: {
    "react-refresh/only-export-components": "off",
    "react/jsx-sort-props": ["error", { ignoreCase: true }],
    "typescript-sort-keys/interface": "error",
    "sort-destructure-keys/sort-destructure-keys": [
      2,
      { caseSensitive: false },
    ],
    "@typescript-eslint/sort-type-union-intersection-members": 2,
    "@typescript-eslint/no-unused-vars": "off",
  },
  ignorePatterns: [
    "build/",
    "dist/",
    ".eslintrc.cjs",
    "node_modules/",
    "postcss.config.js",
    "storybook-static/",
    "tailwind.config.js",
    "vite.config.ts",
  ],
};
