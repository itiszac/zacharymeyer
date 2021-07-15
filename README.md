# zacharymeyer.io

zachmeyer.io is a blog and personal website for myself to post about life things, Technologies and tools I've learned about, or various topics I may find interesting.

## Getting started

In the project directory, you can run the following commands:

### `yarn dev or dev:app`

Runs the application in development mode through a docker container using docker-compose or locally.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn build or yarn build:app`

Builds a production ready docker container or builds the app for production inside the ./build directory.

### `yarn start`

Runs the production build from the ./build directory

### `yarn typecheck`

This will run a typecheck on the project.

### `yarn lint`

Lints the project directory and will output errors. This is automatically done pre-commit.

### `yarn prettier or yarn prettier:check`

Will run prettier to update source files to match our projects coding style or check the source and output errors prettier should be ran. This is automatically done pre-commit`

## Technologies Included

zacharymeyer.io's core is built with the following technologies:

- [Express](https://expressjs.com): A fast, unopinionated, minimal web framework for Node.js
- [TypeScript](https://www.typescriptlang.org): A superset of JavaScript which enforces static type definitions.

Quality of development tools and libraries:

- [Prettier](https://prettier.io): An opinionated code formatter which supports JSX/Typescript.
- [ESLint](https://eslint.org): Static code analyzer to quickly find problems. Also guves us the ability to enforce google's javascript coding style standard.
- [Husky](https://typicode.github.io/husky): A tool to make git hooks easy, this ensures that tests are passing and code meets project standards pre-commit.
