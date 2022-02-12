# Getting started

The Mono design system contains a mix of React components and CSS styles that
can be used to create accessible and consistent digital experiences. This guide
provides the basics to get up and running and to install the Design System as a
dependency to your application. Each component themselves will contain more
detail including:

- Overview and contextual usage and best practices
- Examples and variations of each component
- Guidance on accessibility
- Playground enviroment to use and try out each component

## Using this project

The Mono design system can be installed by any project managed by `npm` or
`yarn` from
[npm](#).

Now add this project as a dependency of your project with:

```sh
npm install --save @mono/react @mono/styles
```

or if you are using Yarn:

```sh
yarn add @mono/react
```

### Configuration

#### Styles and fonts

Include styles and fonts in your application/site. Ensure they are only included
once, and available everywhere.

For example, using webpack (configured to handle CSS) and next.js:

```javascript
// _app.js

import '@mono/styles/dist/index.css';
import '@mono/react/dist/index.css';
```

#### The `<ThemeProvider>` component

To ensure all our components can inherit the correct styles, we need to wrap our
app or website with `<ThemeProvider />` component.

The component does the following things:

- Defines and imports all `@font-face` and font files which can be found in
  `dist/fonts`
- Provides direct access to all scoped styles and tokens that are descendents of
  the `.mono` class name
- Provides a very thin layer of base styles to be inherited by all components -
  light-touch normalisation, plus default background, text, and link styles. The
  vast majority of CSS should be component-scoped.

In use, components must always be wrapped in an appropriate `<ThemeProvider>`
component, using one of the following approaches:

```javascript
import { ThemeProvider } from '@mono/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  container
);
```

```html
<body>
  <div class="iron-man"></div>

  <div class="mono">
    <div class="mono-MyComponent"></div>
    <div class="mono-AnotherComponent"></div>
  </div>

  <div class="captain-america"></div>

  <div class="mono">
    <div class="mono-AnotherComponent"></div>
  </div>
</body
```

Brownfield approach is designed to give “good enough encapsulation” -
technically styles can still leak in, but the surface area is greatly reduced.
Where necessary, implementors can address issues through amends and overrides in
their document context.

### Using components

The following example shows the usage of our `<Button />` component. Please look
at all individual component documentation pages for detail usage.

```javascript
import { Button } from '@mono/react';

const HelloWorld = () => (
  <Button variant="primary" size="small">
    Hello World!
  </Button>
);
```

## Advanced

### Using (private) packages from different organizations

In some project settings it may be required to use packages from more than one
registry. The method for authentication mentioned above works only if you don't
have to install any other packages from the our jFrog artifactory that require
authentication. In order to authenticate to multiple namespaces you have to
adjust your projects `.npmrc`.

```sh
@foo:registry=https://npm.pkg.github.com/
@mono:registry=https://mono.jfrog.io/mono/api/npm/npm
_auth= $AUTH_KEY
email= $EMAIL
always-auth=true
```

### Peer dependencies

If your application has a dependency on React, the Mono design system will
use those.

### Configuring Babel

We ship two types of module formats: CommonJS and ESModules. Most modern build
tools will use the latter resolved from the package.json module entry. To keep
our module code as clean as possible, we try to use the latest possible
ECMAScript version as target for our transpilation.

```javascript
// babel.config.js
const path = require('path');
module.exports {
  include: [
    ...,
    path.resolve('node_modules/@mono/react'),
  ],
  ...
}
```
