module.exports = {
  "@typescript-eslint/indent": ["error", 4],
  "@typescript-eslint/member-delimiter-style": ["off"],
  "@typescript-eslint/explicit-function-return-type": ["off"],
  "@typescript-eslint/prefer-interface": ["off"],
  "@typescript-eslint/adjacent-overload-signatures": ["error"],
  "@typescript-eslint/ban-ts-comment": ["error"],
  "@typescript-eslint/ban-types": ["error",
    {
      "types": {
        "React.StatelessComponent": {
          "message": "Please use React.FC instead.",
          "fixWith": "React.FC",
        },
        "React.FunctionComponent": {
          "message": "Please use React.FC instead.",
          "fixWith": "React.FC",
        },
        "{}": false,
        "object": false,
        "Function": false,
      },
      "extendDefaults": true,
    },
  ],
  "@typescript-eslint/naming-convention": [
    "error", 
    { 
      "selector": "variable", 
      "format": ["camelCase", "PascalCase", "UPPER_CASE"], 
      "leadingUnderscore": "allow" 
    }
  ],
  "@typescript-eslint/consistent-type-assertions": ["error"],
  "@typescript-eslint/no-array-constructor": ["error"],
  "@typescript-eslint/no-empty-function": ['error', { 'allow': ['arrowFunctions'] }],
  "@typescript-eslint/no-empty-interface": ["error"],
  "@typescript-eslint/no-explicit-any": ["error"],
  "@typescript-eslint/no-inferrable-types": ["error"],
  "@typescript-eslint/no-misused-new": ["error"],
  "@typescript-eslint/no-namespace": ["error"],
  "@typescript-eslint/no-non-null-assertion": ["error"],
  "@typescript-eslint/no-this-alias": ["error"],
  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "_" }],
  "@typescript-eslint/no-use-before-define": ["error"],
  "@typescript-eslint/no-var-requires": ["error"],
  "@typescript-eslint/prefer-namespace-keyword": ["error"],
  "@typescript-eslint/triple-slash-reference": ["error"],
  "@typescript-eslint/type-annotation-spacing": ["error"],
  "@typescript-eslint/no-useless-constructor": ["error"],
  "@typescript-eslint/prefer-literal-enum-member": ["error"],
  "@typescript-eslint/no-shadow": ["error"],
  "@typescript-eslint/semi": ["error"],
};
