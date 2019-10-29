const typescriptEslintRules = require("./configs/@typescript-eslint");
const eslintRules = require("./configs/eslint");
const importRules = require("./configs/import");
const jsxA11yRules = require("./configs/jsx-a11y");
const reactRules = require("./configs/react");

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: false,
      objectLiteralDuplicateProperties: false
    },
    ecmaVersion: 2018
  },
  plugins: ["import", "react", "jsx-a11y", "jest", "@typescript-eslint"],
  rules: {
    ...typescriptEslintRules,
    ...eslintRules,
    ...importRules,
    ...jsxA11yRules,
    ...reactRules
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    },
    react: {
      pragma: "React",
      version: "detect"
    },
    propWrapperFunctions: ["forbidExtraProps", "exact", "Object.freeze"],
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx"],
    "import/core-modules": [],
    "import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"]
  },
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      env: {
        "jest/globals": true
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-alias-methods": "error",
        "jest/no-identical-title": "error",
        "jest/no-jasmine-globals": "error",
        "jest/no-jest-import": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-callback": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/prefer-spy-on": "error",
        "jest/valid-expect": "error",
        "max-classes-per-file": "off",
        "react/static-property-placement": "off"
      }
    }
  ]
};
