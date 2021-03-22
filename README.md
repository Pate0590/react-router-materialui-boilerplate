# Working with the React UI

This file explains how to work with the React-based website.

## Introduction

The [React-based](https://reactjs.org/) website was bootstrapped using [Create React App](https://github.com/facebook/create-react-app), a popular toolkit for generating React application setups. You can find general information about Create React App on [their documentation site](https://create-react-app.dev/).

Instead of plain JavaScript, I use [TypeScript](https://www.typescriptlang.org/) to ensure typed code.

## Development environment

To work with the React UI code, you will need to have the following tools installed:

* The [Node.js](https://nodejs.org/) JavaScript runtime.
* The [Yarn](https://yarnpkg.com/) package manager.
* *Recommended:* An editor with TypeScript, React, and [ESLint](https://eslint.org/) linting support. See e.g. [Create React App's editor setup instructions](https://create-react-app.dev/docs/setting-up-your-editor/). If you are not sure which editor to use, we recommend using [Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript). Make sure that [the editor uses the project's TypeScript version rather than its own](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript).

## Installing npm dependencies

The React UI depends on a large number of [npm](https://www.npmjs.com/) packages. These are not checked in, so you will need to download and install them locally via the Yarn package manager:

    yarn

Yarn consults the `package.json` and `yarn.lock` files for dependencies to install. It creates a `node_modules` directory with all installed dependencies.


## Running a local development server

You can start a development server for the React UI outside of a running Prometheus server by running:

    yarn start

This will open a browser window with the React app running on http://localhost:3000/. The page will reload if you make edits to the source code. You will also see any lint errors in the console.

## Running tests

Create React App uses the [Jest](https://jestjs.io/) and React Testing Library framework for running tests. To run tests in interactive watch mode:

    yarn test


## Linting

We define linting rules for the [ESLint](https://eslint.org/) linter. We recommend integrating automated linting and fixing into your editor (e.g. upon save), but you can also run the linter separately from the command-line.

To detect and automatically fix lint errors, run:

    yarn lint


## Building the app for production

To build a production-optimized version of the React app to a `build` subdirectory, run:

    yarn build