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

# pnpm users
pnpm add -D eslint-config-agoda
```

You will also need to have all peer dependencies installed on your project. To
do so, please run:

```sh
# will use yarn/npm depending on detected configuration.
npx install-peerdeps --dev eslint-config-agoda
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

### Command line

Setup following script in `package.json` to enable linting via CLI.

```json
    "lint": "eslint --ext .ts,.tsx --ignore-path .gitignore ./packages/",
```

Above example is using packages directory (like it would be done for a
monorepo), so should be replaced by `./src/` in case of regular codebase

### Visual Studio Code

You can enable linting to run in background and check currently opened files by
setting following configuration:

workspace settings `.vscode/settings.json`

```json
"eslint.validate": [
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "eslint.options": {
    "extensions": [".ts", ".tsx"]
  },
  "typescript.tsdk": "node_modules\\typescript\\lib",

  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": false,
  "javascript.format.enable": false
```

## Typescript

Note that this config is created with typescript in mind, so remember to use
`project` key to facilitate type-based rules as well.
