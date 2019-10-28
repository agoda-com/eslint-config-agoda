[![npm](https://img.shields.io/npm/v/eslint-config-agoda)](https://www.npmjs.com/package/eslint-config-agoda)
![npm](https://img.shields.io/npm/dw/eslint-config-agoda)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![dependabot badge](https://badgen.net/dependabot/agoda-com/eslint-config-agoda/?icon=dependabot.svg)](https://dependabot.com/)

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
