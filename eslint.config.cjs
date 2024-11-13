// eslint.config.cjs
module.exports = {
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_"
    }],
    "no-undef": "error",
    indent: ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "space-infix-ops": "error",
    "block-scoped-var": "error",
    "prefer-const": ["error", {
      destructuring: "all",
      ignoreReadBeforeAssign: true
    }]
  }
};