# React Webpack Typescript Starter

> Minimal starter with hot module replacement (HMR) for rapid development.

* **[React](https://facebook.github.io/react/)** (18.x)
* **[Webpack](https://webpack.js.org/)** (5.x)
* **[Typescript](https://www.typescriptlang.org/)** (4.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)**
  + [Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
* Image support ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
* [SASS](http://sass-lang.com/) support
* Production build script
* Code linting ([ESLint](https://github.com/eslint/eslint)) and
  formatting ([Prettier](https://github.com/prettier/prettier))
* Test frameworks ([Jest](https://facebook.github.io/jest/)
  + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro))

## Installation

1. Clone/download repo
2. `npm install` (or `yarn install` for yarn)

## Usage

**Development**

For development, you need start backend first. After that you can make `npm run serve` and looking
for `http://localhost:8000`

More about backend side you can read [here](../../../../README.md#backend)


---

**All commands**

Command | Description
--- | ---
`npm run build` | Build app to `../dist/`
`npm run test` | Run tests
`npm run lint` | Run linter
`npm run lint --fix` | Run linter and fix issues
`npm run serve` | Build app once to `../dist/`. If backend was started you can see result in `http://localhost:8000`

**Note**: replace `npm` with `npm` in `package.json` if you use npm.

## See also

* [Create React App](https://github.com/facebook/create-react-app)
* [Astro](https://astro.build/)
* [Vite](https://vitejs.dev/)
