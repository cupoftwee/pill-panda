# PillPanda
> A friendly & reliable companion to help you keep track of things.

## Setup, Development, & Testing
``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# test the production build locally
yarn serve

# run tests with jest and preact-render-spy 
yarn test
```

For detailed explanation on how things work, checkout the [Preact CLI Readme | Github.com](https://github.com/developit/preact-cli/blob/master/README.md).


## About PillPanda
**Goals:** 
Build an accessible, lightweight, offline-first, secure way to log & track your medications, mental health, & self-care routines.

**Status Log**
*7/8/2019* - Migrated away from Glitch and using CLI for more robust dev experience. Building locally on Windows. Updated documentation & pushed to GH.
    For next time:
    * [preact critical css for prerendered routes](https://github.com/matthewlynch/preact-cli-plugin-critical-css) 
    * [preact-cli async plugin](https://github.com/developit/preact-cli-plugin-async)
    * [stockroom](https://github.com/developit/stockroom) - unistore that allows decoupling of store from main client thread via service worker

*7/7/2019* - General architecture working. No build step, pure html/js/css. Components being composed together. Need to add state next, follow outline in index.html for designing screens/components. 

### Architecture
- UI Styling Framework - [Spectre.css](https://picturepan2.github.io/spectre/index.html) (scss)
- UI Component Framework - [Preact-CLI](https://github.com/preactjs/preact-cli)
  - Compiler - [Babel w/ async](https://babeljs.io/)
  - Component Library - [Preact](https://preactjs.com/)
  - Routing - [Preact Router](https://github.com/preactjs/preact-router)
  - Store - [unistore](https://github.com/developit/unistore)
  - SSR - [Preact render-to-string](https://github.com/preactjs/preact-render-to-string)
  - JS Linting - [eslint](https://eslint.org/)
  - JS Testing - [Jest](https://jestjs.io/)
- Modals - [Preact Portal](https://github.com/developit/preact-portal/)

### Research
- Date reference - [MDN Date.toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- [Lightweight fetch polyfill | github](https://github.com/developit/unfetch)
- Preact
  - [Awesome Preact](https://github.com/ooade/awesome-preact)
  - [Setting up State & Extending Componts - Preact Docs](https://preactjs.com/guide/extending-component)
  - [Redux Zero - Lightweight Central State Store](https://matheusml1.gitbooks.io/redux-zero-docs/content/)
  - [Preact Routlet - Contextual, component-based routing for Preact](https://github.com/k1r0s/preact-routlet)
  - [Tutorial: Build SSR App w/ Preact, Unistore, & Preact Router](https://scotch.io/tutorials/build-a-ssr-app-with-preact-unistore-and-preact-router)
  - [Demos & Examples | Preact Docs](https://github.com/preactjs/preact/wiki/Demos-&-Examples)
  - [Official Boilerplate | Github](https://github.com/developit/preact-boilerplate)
  - [Preact w/out Babel | Official Examples | Github](https://github.com/developit/preact-without-babel)
- ES Modules, .mjs, & Compilation
  - [modern js (mjs) breakdown from preact author](https://jasonformat.com/enabling-modern-js-on-npm/)
    - Unsure what take is here. mjs isn't ready, really. Also doesn't give any real benefit outside of 'it doesn't need to compile', is that enough?
  - [Pika - alternative package manager](https://www.pika.dev/)
- Much, much later, or maybe
  - [preact slots](https://github.com/developit/preact-slots) 
  - [preact + photon = desktop apps!](https://github.com/alexkrolick/preact-photon-electron-quick-start)


---

✨ ~(‾▿‾~) c u p o f t w e e \ ゜o゜)ノ✨

---