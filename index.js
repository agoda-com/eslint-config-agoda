module.exports = {
  extends: [
    "eslint:recommended",
    'eslint-config-airbnb',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "jest"
  ],
  rules: {
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      4
    ],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "@typescript-eslint/prefer-interface": "off",
    "linebreak-style": "off",
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreTemplateLiterals": true,
        "ignoreStrings": true,
        "ignoreComments": true
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "implicit-arrow-linebreak": "off"
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  overrides: [
    {
      files: [
        "**/*.test.ts",
        "**/*.test.tsx"
      ],
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