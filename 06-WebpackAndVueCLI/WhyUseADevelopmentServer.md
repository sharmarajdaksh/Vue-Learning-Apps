## The app will finally be served by a server.

- Development servers allow us to test and work with our app in a fashion more closer to how the actual workflow will be.
  - The http:// protocol is different from the file:// protocol which works when viewing a webpage locally.
- Advanced functioning like lazy loading.
- Auto reloading, ability to use ES6, etc.

## What is a development workflow?

- Allows precompilation, reducing final bundle sizes.
  - The Vue compiler won't be needed post-buld.
- Case-insensitive Component selectors.
- Propocessors for CSS, JS, etc.
- Easy build process.

## The Vue CLI

- npm install vue-cli -g
- The Vue CLI allows us to choose from workflow templates.
  - Simple
    - Basically what you do to use Vue in JS Fiddle or Code Sandbox
    - Simple CDN import
  - **Webpack-simple**
    - Basic webpack workflow
    - Support for component templates
  - Webpack
    - More complex workflow
    - Includes testing
  - Browserify/browserify-simple
    - Browserify workflow

## Initializing a new project

`vue init <vue-workflow> <project-folder-name>`
