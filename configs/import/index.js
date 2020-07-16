module.exports = {
  "import/no-unresolved": [
    "error",
    {
      commonjs: true,
      caseSensitive: true
    }
  ],
  "import/named": ["error"],
  "import/default": ["off"],
  "import/namespace": ["off"],
  "import/export": ["error"],
  "import/no-named-as-default": ["error"],
  "import/no-named-as-default-member": ["error"],
  "import/no-deprecated": ["off"],
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "test/**",
        "tests/**",
        "spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "test.{js,jsx}",
        "test-*.{js,jsx}",
        "**/*{.,_}{test,spec}.{js,jsx}",
        "**/jest.config.js",
        "**/jest.setup.js",
        "**/vue.config.js",
        "**/webpack.config.js",
        "**/webpack.config.*.js",
        "**/rollup.config.js",
        "**/rollup.config.*.js",
        "**/gulpfile.js",
        "**/gulpfile.*.js",
        "**/Gruntfile{,.js}",
        "**/protractor.conf.js",
        "**/protractor.conf.*.js"
      ],
      optionalDependencies: false
    }
  ],
  "import/no-mutable-exports": ["error"],
  "import/no-commonjs": ["off"],
  "import/no-amd": ["error"],
  "import/no-nodejs-modules": ["off"],
  "import/first": ["error"],
  "import/imports-first": ["off"],
  "import/no-duplicates": ["error"],
  "import/no-namespace": ["off"],
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never"
    }
  ],
  "import/order": [
    "error",
    {
      groups: [["builtin", "external", "internal"]]
    }
  ],
  "import/newline-after-import": ["error"],
  "import/prefer-default-export": ["error"],
  "import/no-restricted-paths": ["off"],
  "import/max-dependencies": [
    "off",
    {
      max: 10
    }
  ],
  "import/no-absolute-path": ["error"],
  "import/no-dynamic-require": ["error"],
  "import/no-internal-modules": [
    "off",
    {
      allow: []
    }
  ],
  "import/unambiguous": ["off"],
  "import/no-webpack-loader-syntax": ["error"],
  "import/no-unassigned-import": ["off"],
  "import/no-named-default": ["error"],
  "import/no-anonymous-default-export": [
    "off",
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false
    }
  ],
  "import/exports-last": ["off"],
  "import/group-exports": ["off"],
  "import/no-default-export": ["off"],
  "import/no-named-export": ["off"],
  "import/no-self-import": ["error"],
  "import/no-cycle": [
    "error",
    {
      maxDepth: 1
    }
  ],
  "import/no-useless-path-segments": ["error"],
  "import/dynamic-import-chunkname": [
    "off",
    {
      importFunctions: [],
      webpackChunknameFormat: "[0-9a-zA-Z-_/.]+"
    }
  ],
  "import/no-relative-parent-imports": ["off"],
  "import/no-unused-modules": [
    "off",
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true
    }
  ]
};
