# eslint-config-agoda

This package contains Agoda's ESLint configuration that can be shared and
extended.

## Installation

```sh
# yarn users
yarn add -D eslint-config-agoda

# npm users

npm install --save-dev eslint-config-agoda
```

You will also need to have all peer dependencies installed on your project. To
do so, please run:

```sh
npx install-peerdeps --dev eslint-config-airbnb

# will use yarn/npm depending on detected configuration.
```

## Usage

Modify your `.eslintrc` configuration file, to extend from Agoda's config:

```json
"extends": "agoda"
```

Example `.eslintrc` file for Typescript environment:

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": ["agoda"],
  "rules": {}
}
```

## Typescript

Note that this config is created with typescript in mind, so remember to use
`project` key to facilitate type-based rules as well!
