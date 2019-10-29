module.exports = {
  "jsx-a11y/anchor-has-content": [
    "error",
    {
      components: []
    }
  ],
  "jsx-a11y/aria-role": [
    "error",
    {
      ignoreNonDom: false,
      ignoreNonDOM: false
    }
  ],
  "jsx-a11y/aria-props": ["error"],
  "jsx-a11y/aria-proptypes": ["error"],
  "jsx-a11y/aria-unsupported-elements": ["error"],
  "jsx-a11y/alt-text": [
    "error",
    {
      elements: ["img", "object", "area", 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': []
    }
  ],
  "jsx-a11y/img-redundant-alt": ["error"],
  "jsx-a11y/label-has-for": [
    "off",
    {
      components: [],
      required: {
        every: ["nesting", "id"]
      },
      allowChildren: false
    }
  ],
  "jsx-a11y/label-has-associated-control": [
    "error",
    {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: "both",
      depth: 25
    }
  ],
  "jsx-a11y/control-has-associated-label": [
    "error",
    {
      labelAttributes: ["label"],
      controlComponents: [],
      ignoreElements: [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "video"
      ],
      ignoreRoles: [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid"
      ],
      depth: 5
    }
  ],
  "jsx-a11y/mouse-events-have-key-events": ["error"],
  "jsx-a11y/no-access-key": ["error"],
  "jsx-a11y/no-onchange": ["off"],
  "jsx-a11y/interactive-supports-focus": ["error"],
  "jsx-a11y/role-has-required-aria-props": ["error"],
  "jsx-a11y/role-supports-aria-props": ["error"],
  "jsx-a11y/tabindex-no-positive": ["error"],
  "jsx-a11y/heading-has-content": [
    "error",
    {
      components: [""]
    }
  ],
  "jsx-a11y/html-has-lang": ["error"],
  "jsx-a11y/lang": ["error"],
  "jsx-a11y/no-distracting-elements": [
    "error",
    {
      elements: ["marquee", "blink"]
    }
  ],
  "jsx-a11y/scope": ["error"],
  "jsx-a11y/click-events-have-key-events": ["error"],
  "jsx-a11y/no-static-element-interactions": [
    "error",
    {
      handlers: [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ]
    }
  ],
  "jsx-a11y/no-noninteractive-element-interactions": [
    "error",
    {
      handlers: [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ]
    }
  ],
  "jsx-a11y/accessible-emoji": ["error"],
  "jsx-a11y/aria-activedescendant-has-tabindex": ["error"],
  "jsx-a11y/iframe-has-title": ["error"],
  "jsx-a11y/no-autofocus": [
    "error",
    {
      ignoreNonDOM: true
    }
  ],
  "jsx-a11y/no-redundant-roles": ["error"],
  "jsx-a11y/media-has-caption": [
    "error",
    {
      audio: [],
      video: [],
      track: []
    }
  ],
  "jsx-a11y/no-interactive-element-to-noninteractive-role": [
    "error",
    {
      tr: ["none", "presentation"]
    }
  ],
  "jsx-a11y/no-noninteractive-element-to-interactive-role": [
    "error",
    {
      ul: [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid"
      ],
      ol: [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid"
      ],
      li: ["menuitem", "option", "row", "tab", "treeitem"],
      table: ["grid"],
      td: ["gridcell"]
    }
  ],
  "jsx-a11y/no-noninteractive-tabindex": [
    "error",
    {
      tags: [],
      roles: ["tabpanel"]
    }
  ],
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["to"],
      aspects: ["noHref", "invalidHref", "preferButton"]
    }
  ]
};
