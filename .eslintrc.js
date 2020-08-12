module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    "vue"
  ],
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:vue/strongly-recommended",
    "@vue/typescript/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      //extensions: [".js", ".ts", ".vue"],
      alias: [
        ['@', './src']
      ]
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-tabs": 2,
    "no-plusplus": 0,
    "no-continue": 0,
    "no-prototype-builtins": 0,
    "no-restricted-globals": 0,
    "no-restricted-syntax": 0,
    "no-unused-expressions": 0,
    "no-return-assign": [1, "except-parens"],
    "no-shadow": [2, {
      builtinGlobals: false,
      hoist: "functions",
    }],
    "@typescript-eslint/no-use-before-define": [2, { functions: false, classes: false }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/consistent-type-assertions": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/ban-ts-ignore": 1,
    "space-infix-ops": 2,
    "consistent-return": 0,
    quotes: [2, "single"],
    "max-classes-per-file": 1,
    "max-len": [1, { code: 110 }],
    "arrow-parens": 0,
    "global-require": 1,
    indent: [2, 2, {
      SwitchCase: 1,
    }],
    semi: [2, "never"],
    "computed-property-spacing": [2, "never"],
    "array-bracket-spacing": [2, "always", {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    "object-curly-spacing": [2, "always", {
      arraysInObjects: false,
      objectsInObjects: false,
    }],
    "comma-spacing": [2, {
      before: false,
      after: true,
    }],
    "comma-dangle": [2, "always-multiline"],
    "import/no-cycle": 1,
    "import/no-named-default": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-webpack-loader-syntax": 1,
    "linebreak-style": 0,

    "vue/html-indent": ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    "vue/html-closing-bracket-spacing": [2, {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "always",
    }],
    /*"vue/html-quotes": [ 2, "double", {
     avoidEscape: true,
    }],*/
    "vue/html-self-closing": 2,
    "vue/no-template-shadow": 2,
    "vue/html-closing-bracket-newline": [2, {
      singleline: "never",
      multiline: "never",
    }],
    "vue/require-default-prop": 0,
    "vue/require-prop-types": 2,
    "vue/attributes-order": ["error", {
      order: [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT",
      ],
      alphabetical: false,
    }],
    "vue/order-in-components": ["error", {
      order: [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        ["props", "propsData"],
        "model",
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "methods",
        "head",
        "LIFECYCLE_HOOKS",
        ["template", "render"],
        "renderError",
      ],
    }],
    "vue/array-bracket-spacing": [2, "always", {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    // todo: с этим правилом линтинг не проходит.
    // 1) виснет намертво, если включено правило "vue/v-on-function-call"
    // 2) выдает ошибку TypeError: Cannot read property 'type' of null
    /*
    "vue/object-curly-spacing": [ 2, "always", {
     arraysInObjects: false,
     objectsInObjects: false,
    }],
    */
    "vue/arrow-spacing": [2, {
      before: true,
      after: true,
    }],
    "vue/block-spacing": 2,
    "vue/brace-style": [2, "1tbs"],
    "vue/comma-dangle": [2, "always-multiline"],
    "vue/component-definition-name-casing": [2, "PascalCase"],
    "vue/component-name-in-template-casing": [2, "PascalCase"],
    /*
    "vue/component-tags-order": [ 2, {
     order: [ "template", "style", "script" ],
    }],
     */
    "vue/eqeqeq": [2, "always"],
    "vue/key-spacing": 2,
    "vue/keyword-spacing": 2,
    "vue/max-len": [1, { code: 110 }],
    "vue/no-deprecated-scope-attribute": 2,
    "vue/no-deprecated-slot-attribute": 2,
    "vue/no-deprecated-slot-scope-attribute": 2,
    "vue/no-reserved-component-names": 2,
    "vue/no-restricted-syntax": 2,
    "vue/no-static-inline-styles": [2, {
      allowBinding: true,
    }],
    "vue/no-unsupported-features": [2, {
      version: "^2.6.0",
    }],
    "vue/padding-line-between-blocks": 2,
    "vue/require-name-property": 0,
    "vue/script-indent": [2, 2, {
      switchCase: 1,
    }],
    "vue/space-infix-ops": 2,
    "vue/v-on-function-call": [2, "never"],
  },
}
