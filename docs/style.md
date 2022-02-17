## Style

## Introduction

This style guide gives a direction of how we like to write code for the Mono
Design System. This covers practices, concepts and standards to help us build a
great product and Design System.

- No abstraction is better than the wrong abstraction
- Prefer learning patterns over libraries or frameworks
- Prefer few abstractions and lots of repetition
- When creating abstractions, only fix or update code if repetition or patterns
  lead to bugs. Make sure the abstraction is worth its weight Inspired by
  Minimal API Surface Area

## JavaScript

### Style

#### Be explicit

👎 _Unpreferred_

```jsx
const add = (a, b) => a + b;
```

✅ _Preferred_

```jsx
const add = (a, b) => {
  return a + b;
};
```

Certain features in JavaScript have implicit behavior. One of these that we see
most often is the implicit return behavior of arrow function expressions, for
example:

```jsx
const add = (a, b) => a + b;
```

We've found that, while this style is terse and compact, it can be at odds with
the fact that code is revisited often and that developers need to peak inside
sometimes to see what is going on

## React

All components are written in React/Typescript, with minimal barriers-to-entry
for non-React developers:

Always use functional components (never classes). This means that we take
advantage of built-in and custom hooks to provide state-based behavior inside of
a component. Use [classnames](https://github.com/JedWatson/classnames) and CSS
built with PostCSS.

### Creating a component

It's recommended to use the following script to auto-generate a component:

`package.json`
```json
component:create
```
You will then be prompted to give the component a name, e.g. `Button`.
If a component with the same name already exists, you will be prompted to either
overwrite the files or skip.

Component names must be written in PascalCase. The component files will contain
some initial boilerplate, and can be formatted as follows:

`MyComponent.tsx`

```javascript
import classNames from 'classnames';
import React, { FunctionComponent, useState, useEffect } from 'react';
import { MyComponentProp } from './MyComponent.types';

import './MyComponent.scss';

/**
 * MyComponent.
 *
 * @component
 * @example
 * const initialValue = 1
 * return (
 *   <MyComponent initialValue={1}>...</MyComponent>
 * )
 */
const MyComponent: FunctionComponent<MyComponentProps> = ({
  initialValue = 0,
}) => {
  // State-related behavior
  const [state, setState] = useState(initialValue);
  // Constants and other variables
  const value = 1;

  // Handlers
  function onClick() {
    // ...
  }

  // Effects
  useEffect(() => {
    // ...
  }, []);

  // Output
  return <button onClick={onClick}>Output</button>;
};
```

`MyComponent.types.ts`

```jsx
export interface MyComponentProps {
  initialValue: number;
}
```

### Modifiers

When several components are related and/or coupled, it's a good idea to share
the name and add different modifiers. For example:

```javascript
<Button />
<Button.Group />
```

### Event handlers

When writing event handlers, we prefer using the exact name, `onClick` to a
shorthand. If that name is already being used in a given scope, which often
happens if the component supports a prop `onClick`, then we prefer to specify
the function as `handleOnClick`.

👎 _Unpreferred_

```jsx
function MyComponent() {
  function click() {
    // ...
  }
  return <button onClick={click} />;
}
```

✅ _Preferred_

```jsx
function MyComponent() {
  function onClick() {
    // ...
  }
  return <button onClick={onClick} />;
}
```

### Component spacing

Components shouldn’t have outer spacing. This helps avoid unexpected visual
spacing and keeps compositions predictable.

Vertical spacing should be added when composing a components. Do this by using
spacing classes or component.

### File structure

All components belong in `src/components` in their own folder. Name files and
folders using singular form; not plural.

Use one component in each directory. It may make sense to group similar
components in the same directory. However, we’ve found that it’s easier to
document components when they each have their own directory.

Component implementation (`.tsx`) and styles should live in the same directory,
as shown here:

```
├── Button
│   └── __snapshots__
│       └── Button.test.tsx.snap
│   ├── Button.mdx
│   ├── Button.scss
│   ├── Button.stories.tsx
│   ├── Button.test.tsx
│   ├── Button.types.ts
│   ├── index.ts
├── Icon
│   └── __snapshots__
│       └── Icon.test.tsx.snap
│   ├── Icon.mdx
│   ├── Icon.scss
│   ├── Icon.stories.tsx
│   ├── Icon.test.tsx
│   ├── Icon.types.ts
│   ├── index.ts
```

### How to name components

Components are not actions – they're conceptual _‘things’_. So it’s better to
choose a noun (for example, _‘animation’_) rather than a verb (_'animating'_).
Other examples include `input`, `tab`, `nav` and `menu`.

### Prop naming

All components should use a consistent props naming convention. This has yet to
be properly defined for Mono. For now, look at existing `props`.

We do have one tentative rule in place: always preface boolean props
with is – `isHidden`, `isFullWidth` and so forth.

### Storybook

All components are built using Storybook as a sandbox. Storybook has been
configured to produce examples and documentation of each component. These are
currently deployed to <INSERT WEBSITE>. Note the use of /\*\* \*/ comments in
component code to drive prop description fields.

#### Decorators

Storybook has been configured with `<ThemeProvider>` to include all base styling
requirements.

### Testing

All our components should have tests that cover **General functionality/API**,
**Accessibility**(a11y), **End to end testing**(e2e) and **Server Side
Rendering**(SSR). We use various tools to test our components including:

- [Jest](https://jestjs.io) as the testing framework, built-in mocking and
  assertion abilities while running tests in parallel.
- [Testing library](https://testing-library.com) + variants for component
  testing
- Percy for automated visual regression testing
- Cypress.io + demos for an end to end testing pages/web apps built with Mono
- AXE to automatically find and fix a subset of accessibility issues. True human
  interaction will still be required to support testing Mono.
- Lighthouse to run performance, accessibility, progressive web apps and SEO
  tests on pages built with Mono components
- Prettier (code formatting)
- ESLint (used for linting that can’t be provided by any of the other tools)

Each test should be separated into individual files, this makes it easier to
understand and to follow their purpose.

| Name                     | Category                        |
| ------------------------ | ------------------------------- |
| MyComponent.test.js      | General component functionality |
| MyComponent.test.a11y.js | Accessibility testing           |
| MyComponent.test.e2e.js  | End to end tests                |
| MyComponent.test.ssr.js  | Server side rendering           |

#### Example

`MyComponent.test.js`

```jsx
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import MyComponent from '.';

describe('<MyComponent />', () => {
  const defaultProps = {
    children: 'text',
    testId: 'test-component',
  };

  test(': matches snapshot', () => {
    const { container } = render(<MyComponent {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test(': renders', () => {
    const props = {
      ...defaultProps,
      children: 'text text',
    };
    const { rerender } = render(<MyComponent {...defaultProps} />);

    expect(screen.getByTestId('test-component')).toBeInTheDocument();

    // Change props
    rerender(<MyComponent {...props} />);

    expect(screen.queryByText('text text')).toBeInTheDocument();
  });

  test(': should call `onClick` function when mouseevent `click` is performed', () => {
    const handleClick = jest.fn();
    const props = {
      ...defaultProps,
      onClick: handleClick,
    };
    render(<MyComponent {...props} />);

    fireEvent(
      screen.getByTestId('test-component'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    // onClick function has been called.
    expect(handleClick).toBeCalled();
  });
});
```

`MyComponent.test.a11y.js`

```jsx
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import MyComponent from '.';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('<MyComponent>', () => {
  test(': should not any accessibility violations', async () => {
    const { container } = render(<MyComponent {...defaultProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
```

## CSS / PostCSS

We follow the
[SUIT CSS naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md),
this helps to scope component CSS and make our code far more predictable. All
CSS classes are to be prefixed with `.mono-` and to be a decendant of the parent
class `.mono-ds`. This prefix prevents any conflicits with other system classes
and makes it clear, when reading the HTML, which components are part of the
library.

Syntax:
`[<breakpoint>-][<namespace>-]<ComponentName>[-descendentName][--modifierName]`

```css
.mono-Button {
  /* … */
}
.mono-Tabs {
  /* … */
}
```

The approach is designed to give “good enough encapsulation” - technically
styles can still leak in, but the surface area is greatly reduced. Where
necessary, implementors can address issues through amends and overrides in their
document context.

### ComponentName

The component's name must be written in pascal case. Nothing else in the
HTML/CSS uses pascal case.

```css
.mono-MyComponent {
  /* … */
}
```

```html
<article class="mono-MyComponent">…</article>
```

### ComponentName--modifierName

Modifier names must be written in camel case and be separated from the component
name by two hyphens.

```css
/* Core button */
.mono-Button {
  /* … */
}
/* Default button style */
.mono-Button--default {
  /* … */
}
```

```html
<button class="mono-Button mono-Button--default" type="button">…</button>
```

#### Responsive modifiers

Certain modifiers have responsive variants using the patterns: `mono-sm-<name>`,
`mono-md-<name>`, and `mono-lg-<name>` for small, medium, and large Media Query
breakpoints.

### ComponentName-descendentName

A component descendent is a class that is attached to a descendent node of a
component. Descendent names must be written in camel case.

```html
<article class="mono-Card">
  <header class="mono-Card-header">
    <img class="mono-Card-image" src="{{src}}" alt="{{alt}}" />
    …
  </header>
  <div class="mono-Card-bodyText">…</div>
</article>
```

### ComponentName.is-stateOfComponent

Use is-stateName to reflect changes to a component's state. The state name must
be camel case. Never style these classes directly; they should always be used as
an adjoining class.

```css
.mono-Accordion {
  /* … */
}
.mono-Accordion.is-expanded {
  /* … */
}
```

```html
<section class="mono-Accordion is-expanded">…</section>
```

### Utilities

Low-level structural and positional traits. Utilities can be applied directly to
any element within a component.

Syntax: `u-[sm-|md-|lg-]<utilityName>`

#### u-utilityName

Utilities must use a camel case name. What follows is an example of how various
utilities can be used to create a simple structure within a component.

```html
<p class="u-textBold u-marginRight--8">…</p>
```

#### Responsive utilities

Certain utilities have responsive variants using the patterns: `u-sm-<name>`,
`u-md-<name>`, and `u-lg-<name>` for small, medium, and large Media Query
breakpoints.

### Variables

Custom properties are global. Components should not expose the internal
structure. Variables used in components should have a flat structure after their
namespace.

```css
:root {
  --Button-backgroundColor
  --Button-icon-backgroundColor
  --Button--modifier-backgroundColor
  --Button-onHover-backgroundColor
  --Button-icon-onHover-backgroundColor
}
```
