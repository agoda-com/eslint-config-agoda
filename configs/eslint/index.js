module.exports = {
  indent: [
    "off",
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: [
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild"
      ],
      ignoreComments: false
    }
  ],
  "linebreak-style": ["off"],
  "max-len": ["off"],
  "comma-dangle": ["off"],
  "implicit-arrow-linebreak": ["off"],
  camelcase: [
    "off",
    {
      properties: "never",
      ignoreDestructuring: false
    }
  ],
  "no-array-constructor": ["off"],
  "no-empty-function": [
    "off",
    {
      allow: ["arrowFunctions", "functions", "methods"]
    }
  ],
  "no-unused-vars": [
    "off",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: true
    }
  ],
  "no-use-before-define": [
    "off",
    {
      functions: true,
      classes: true,
      variables: true
    }
  ],
  "no-var": ["error"],
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true
    }
  ],
  "prefer-rest-params": ["error"],
  "prefer-spread": ["error"],
  "no-underscore-dangle": [
    "error",
    {
      allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true
    }
  ],
  "jsx-quotes": ["off"],
  "class-methods-use-this": [
    "error",
    {
      exceptMethods: [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
        "getSnapshotBeforeUpdate"
      ]
    }
  ],
  strict: ["error", "never"],
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false
    }
  ],
  "arrow-parens": ["off"],
  "arrow-spacing": ["off"],
  "constructor-super": ["error"],
  "generator-star-spacing": [
    "error",
    {
      before: false,
      after: true
    }
  ],
  "no-class-assign": ["error"],
  "no-confusing-arrow": ["off"],
  "no-const-assign": ["error"],
  "no-dupe-class-members": ["error"],
  "no-duplicate-imports": ["off"],
  "no-new-symbol": ["error"],
  "no-restricted-imports": [
    "off",
    {
      paths: [],
      patterns: []
    }
  ],
  "no-this-before-super": ["error"],
  "no-useless-computed-key": ["error"],
  "no-useless-constructor": ["off"],
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }
  ],
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true
    }
  ],
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }
  ],
  "prefer-destructuring": ["off"], // adds unnecessary lines and removes context from code
  "prefer-numeric-literals": ["error"],
  "prefer-reflect": ["off"],
  "prefer-template": ["error"],
  "require-yield": ["error"],
  "rest-spread-spacing": ["off"],
  "sort-imports": [
    "off",
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
    }
  ],
  "symbol-description": ["error"],
  "template-curly-spacing": ["off"],
  "yield-star-spacing": ["error", "after"],
  "init-declarations": ["off"],
  "no-catch-shadow": ["off"],
  "no-delete-var": ["error"],
  "no-label-var": ["error"],
  "no-restricted-globals": [
    "error",
    "isFinite",
    "isNaN",
    "addEventListener",
    "blur",
    "close",
    "closed",
    "confirm",
    "defaultStatus",
    "defaultstatus",
    "event",
    "external",
    "find",
    "focus",
    "frameElement",
    "frames",
    "history",
    "innerHeight",
    "innerWidth",
    "length",
    "location",
    "locationbar",
    "menubar",
    "moveBy",
    "moveTo",
    "name",
    "onblur",
    "onerror",
    "onfocus",
    "onload",
    "onresize",
    "onunload",
    "open",
    "opener",
    "opera",
    "outerHeight",
    "outerWidth",
    "pageXOffset",
    "pageYOffset",
    "parent",
    "print",
    "removeEventListener",
    "resizeBy",
    "resizeTo",
    "screen",
    "screenLeft",
    "screenTop",
    "screenX",
    "screenY",
    "scroll",
    "scrollbars",
    "scrollBy",
    "scrollTo",
    "scrollX",
    "scrollY",
    "self",
    "status",
    "statusbar",
    "stop",
    "toolbar",
    "top"
  ],
  "no-shadow": ["off"],
  "no-shadow-restricted-names": ["error"],
  "no-undef": ["off"],
  "no-undef-init": ["error"],
  "no-undefined": ["off"],
  "array-bracket-newline": ["off"],
  "array-element-newline": ["off"],
  "array-bracket-spacing": ["off"],
  "block-spacing": ["off"],
  "brace-style": ["off"],
  "capitalized-comments": [
    "off",
    "never",
    {
      line: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true
      },
      block: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true
      }
    }
  ],
  "comma-spacing": ["off"],
  "comma-style": ["off"],
  "computed-property-spacing": ["off"],
  "consistent-this": ["off"],
  "eol-last": ["off"],
  "func-call-spacing": ["off"],
  "func-name-matching": [
    "off",
    "always",
    {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true
    }
  ],
  "func-names": ["error"],
  "func-style": ["off", "expression"],
  "function-paren-newline": ["off"],
  "id-blacklist": ["off"],
  "id-length": ["off"],
  "id-match": ["off"],
  "key-spacing": ["off"],
  "keyword-spacing": ["off"],
  "line-comment-position": [
    "off",
    {
      position: "above",
      ignorePattern: "",
      applyDefaultPatterns: true
    }
  ],
  "lines-between-class-members": ["off"],
  "lines-around-comment": ["off"],
  "lines-around-directive": ["off"],
  "max-depth": ["off", 4],
  "max-lines": [
    "off",
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  "max-lines-per-function": [
    "off",
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true
    }
  ],
  "max-nested-callbacks": ["off"],
  "max-params": ["off", 3],
  "max-statements": ["off", 10],
  "max-statements-per-line": ["off"],
  "multiline-comment-style": ["off", "starred-block"],
  "multiline-ternary": ["off"],
  "new-cap": [
    "error",
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
      properties: true
    }
  ],
  "new-parens": ["off"],
  "newline-after-var": ["off"],
  "newline-before-return": ["off"],
  "newline-per-chained-call": ["off"],
  "no-bitwise": ["error"],
  "no-continue": ["error"],
  "no-inline-comments": ["off"],
  "no-lonely-if": ["error"],
  "no-mixed-operators": ["off"],
  "no-mixed-spaces-and-tabs": ["off"],
  "no-multi-assign": ["error"],
  "no-multiple-empty-lines": ["off"],
  "no-negated-condition": ["off"],
  "no-nested-ternary": ["error"],
  "no-new-object": ["error"],
  "no-plusplus": ["error"],
  "no-restricted-syntax": [
    "error",
    {
      selector: "ForInStatement",
      message:
        "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
    },
    {
      selector: "ForOfStatement",
      message:
        "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
    },
    {
      selector: "LabeledStatement",
      message:
        "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
    },
    {
      selector: "WithStatement",
      message:
        "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
    }
  ],
  "no-spaced-func": ["error"],
  "no-tabs": ["off"],
  "no-ternary": ["off"],
  "no-trailing-spaces": ["off"],
  "no-unneeded-ternary": [
    "error",
    {
      defaultAssignment: false
    }
  ],
  "no-whitespace-before-property": ["off"],
  "nonblock-statement-body-position": [
    "error",
    "beside",
    {
      overrides: {}
    }
  ],
  "object-curly-spacing": ["error", "always"],
  "object-curly-newline": ["off"],
  "object-property-newline": [
    "error",
    {
      allowAllPropertiesOnSameLine: true,
      allowMultiplePropertiesPerLine: false
    }
  ],
  "one-var": ["error", "never"],
  "one-var-declaration-per-line": ["off"],
  "operator-assignment": ["error", "always"],
  "operator-linebreak": ["off"],
  "padded-blocks": ["off"],
  "padding-line-between-statements": ["off"],
  "prefer-object-spread": ["error"],
  "quote-props": ["off"],
  quotes: ["off"],
  "require-jsdoc": ["off"],
  semi: ["off"],
  "semi-spacing": ["off"],
  "semi-style": ["off"],
  "sort-keys": [
    "off",
    "asc",
    {
      caseSensitive: false,
      natural: true
    }
  ],
  "sort-vars": ["off"],
  "space-before-blocks": ["off"],
  "space-before-function-paren": ["off"],
  "space-in-parens": ["off"],
  "space-infix-ops": ["off"],
  "space-unary-ops": ["off"],
  "spaced-comment": ["off"],
  "switch-colon-spacing": ["off"],
  "template-tag-spacing": ["off"],
  "unicode-bom": ["error", "never"],
  "wrap-regex": ["off"],
  "callback-return": ["off"],
  "global-require": ["error"],
  "handle-callback-err": ["off"],
  "no-buffer-constructor": ["error"],
  "no-mixed-requires": ["off", false],
  "no-new-require": ["error"],
  "no-path-concat": ["error"],
  "no-process-env": ["off"],
  "no-process-exit": ["off"],
  "no-restricted-modules": ["off"],
  "no-sync": ["off"],
  "for-direction": ["error"],
  "getter-return": [
    "error",
    {
      allowImplicit: true
    }
  ],
  "no-async-promise-executor": ["error"],
  "no-await-in-loop": ["error"],
  "no-compare-neg-zero": ["error"],
  "no-cond-assign": ["error", "always"],
  "no-console": ["error"],
  "no-constant-condition": ["error"],
  "no-control-regex": ["error"],
  "no-debugger": ["error"],
  "no-dupe-args": ["error"],
  "no-dupe-keys": ["error"],
  "no-duplicate-case": ["error"],
  "no-empty": ["error"],
  "no-empty-character-class": ["error"],
  "no-ex-assign": ["error"],
  "no-extra-boolean-cast": ["error"],
  "no-extra-parens": ["off"],
  "no-extra-semi": ["off"],
  "no-func-assign": ["error"],
  "no-inner-declarations": ["error"],
  "no-invalid-regexp": ["error"],
  "no-irregular-whitespace": ["error"],
  "no-misleading-character-class": ["error"],
  "no-obj-calls": ["error"],
  "no-prototype-builtins": ["error"],
  "no-regex-spaces": ["error"],
  "no-sparse-arrays": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-unexpected-multiline": ["error"],
  "no-unreachable": ["error"],
  "no-unsafe-finally": ["error"],
  "no-unsafe-negation": ["error"],
  "no-negated-in-lhs": ["off"],
  "require-atomic-updates": ["off"],
  "use-isnan": ["error"],
  "valid-jsdoc": ["off"],
  "valid-typeof": [
    "error",
    {
      requireStringLiterals: true
    }
  ],
  "accessor-pairs": ["off"],
  "array-callback-return": [
    "error",
    {
      allowImplicit: true
    }
  ],
  "block-scoped-var": ["error"],
  complexity: ["off", 11],
  "consistent-return": ["error"],
  curly: ["error", "multi-line"],
  "default-case": [
    "error",
    {
      commentPattern: "^no default$"
    }
  ],
  "dot-notation": [
    "error",
    {
      allowKeywords: true,
      allowPattern: ""
    }
  ],
  "dot-location": ["error", "property"],
  eqeqeq: [
    "error",
    "always",
    {
      null: "ignore"
    }
  ],
  "guard-for-in": ["error"],
  "max-classes-per-file": ["error", 1],
  "no-alert": ["error"],
  "no-caller": ["error"],
  "no-case-declarations": ["error"],
  "no-div-regex": ["off"],
  "no-else-return": [
    "error",
    {
      allowElseIf: false
    }
  ],
  "no-empty-pattern": ["error"],
  "no-eq-null": ["off"],
  "no-eval": ["error"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-extra-label": ["error"],
  "no-fallthrough": ["error"],
  "no-floating-decimal": ["error"],
  "no-global-assign": [
    "error",
    {
      exceptions: []
    }
  ],
  "no-native-reassign": ["off"],
  "no-implicit-coercion": [
    "off",
    {
      boolean: false,
      number: true,
      string: true,
      allow: []
    }
  ],
  "no-implicit-globals": ["off"],
  "no-implied-eval": ["error"],
  "no-invalid-this": ["off"],
  "no-iterator": ["error"],
  "no-labels": [
    "error",
    {
      allowLoop: false,
      allowSwitch: false
    }
  ],
  "no-lone-blocks": ["error"],
  "no-loop-func": ["error"],
  "no-magic-numbers": [
    "off",
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }
  ],
  "no-multi-spaces": ["off"],
  "no-multi-str": ["error"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-wrappers": ["error"],
  "no-octal": ["error"],
  "no-octal-escape": ["error"],
  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "acc",
        "accumulator",
        "e",
        "ctx",
        "req",
        "request",
        "res",
        "response",
        "$scope",
        "staticContext"
      ]
    }
  ],
  "no-proto": ["error"],
  "no-redeclare": ["error"],
  "no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated"
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead"
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead"
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead"
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead"
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead"
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead"
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead."
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead."
    },
    {
      object: "Math",
      property: "pow",
      message: "Use the exponentiation operator (**) instead."
    }
  ],
  "no-return-assign": ["error", "always"],
  "no-return-await": ["error"],
  "no-script-url": ["error"],
  "no-self-assign": [
    "error",
    {
      props: true
    }
  ],
  "no-self-compare": ["error"],
  "no-sequences": ["error"],
  "no-throw-literal": ["error"],
  "no-unmodified-loop-condition": ["off"],
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }
  ],
  "no-unused-labels": ["error"],
  "no-useless-call": ["off"],
  "no-useless-catch": ["error"],
  "no-useless-concat": ["error"],
  "no-useless-escape": ["error"],
  "no-useless-return": ["error"],
  "no-void": ["error"],
  "no-warning-comments": [
    "off",
    {
      terms: ["todo", "fixme", "xxx"],
      location: "start"
    }
  ],
  "no-with": ["error"],
  "prefer-promise-reject-errors": [
    "error",
    {
      allowEmptyReject: true
    }
  ],
  "prefer-named-capture-group": ["off"],
  radix: ["error"],
  "require-await": ["off"],
  "require-unicode-regexp": ["off"],
  "vars-on-top": ["error"],
  "wrap-iife": ["off"],
  yoda: ["error"]
};
