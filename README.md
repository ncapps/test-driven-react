# Notes and Working Examples from Test-Driven React

[![Build Status](https://travis-ci.org/ncapps/test-driven-react.svg?branch=master)](https://travis-ci.org/ncapps/test-driven-react)

## Chapter 1. Test-Driven Development with Jest
  - *Jest* is a test framework developed by Facebook. Jest runs in a Node.js process.
  - There are several advantages to running tests in a simulated browser environment: *jsdom*
  - It's good practice to declare all new Node projects as `private`
  - `npm` is a package manager, `npx` is a package *runner*
  - `npx` lets you run binaries from local Node packages without adding them to your PATH
  - `describe()` declares a *test suite*, which is a grouping of tests (noun)
  - `it()` declares a *test* (verb)
  - `expect()` creates an *assertion*
  - `toBe()` is a *matcher* that performs a strict equality test between the value being tested and the expected value
  - The essence of Test-Drive Development (TDD) is rapid iteration. You will find that you learn more quickly from iterating - writing small, easy-to-understand pieces of code one at a time.
  - Automatically re-run tests when a change to a file is detected: `$ npx jest --watchAll`
  - To compute code coverage add the `--coverage` flag. Use `--coverageReporters=text` to just get the summary output
  - "Branches" refer to the possible outcomes of `if/else` statements
  - Code coverage is imperfect - high code coverage numbers don't necessarily mean the most *useful* tests are included
  - *"Red, green, repeat"* - encapsulates TDD in a nutshell.

## Chapter 2. Integrated Tooling with VS Code
  - Feedback while using TDD should be automated and fast
  - Key Features include:
    - Integrated terminal
    - Integrated source control
    - Adjust settings with User Settings and Workspace Settings
  - A linter is a program that uses a set of rules to detect code that, though syntactically valid, is likely to contain mistakes
  - Every time ESLint runs against a JavaScript file, it looks for the closest configuration. Then it continues looking in all parent directories, merging all of the configurations it finds (with closer given greater priority)
  - *"Live in the code"* - strive to make running your tests as automatic as breathing

## Chapter 3. Testing React with Enzyme
  - Web application elements can be isolated as *components* using React. This makes testing much easier
  - We can make assertions about components using a library called *Enzyme*
  - Prop types are strictly a development aid, and are ignored by React in production mode
  - Tests should describe the behavior of their target in isolation, not the behavior within a complete system. To test the complete system, you must test each part on its own. The reward is that changes to a single component can only fail that component's tests, rather than a cascade of failures.
  - *"Test one piece at a time"*
  - Testing in isolation can be achieved in React using Enzyme's `shallow()` method

## Chapter 4. Styling in JavaScript with Styled-Components
  - *React* has transformed web development by allowing developers to express the page's markup as a function of application state.
  - *CSS-in-JS*, a paradigm exemplified by the **Styled-Components** library
  - With CSS-in-JS, you write styles using the familiar CSS syntac, but the actualy style rules are generated at runtime as needed. This benefits from this paradigm include: improved code organization and maintainability, and allows style rules to be subjected to unit tests
  - *Webpack* is a configurable tool for building JavaScript bundles
  - **Styled-Components** offers a number of advantages
    - Styles are either in the same module or imported like any other dependency
    - Styles are generated as a function of their component's props and state, just like markup
    - Styles can be subjected to unit tests
    - Style rules have the full range of functionality of ordinary CSS
  - `styled.img` is a function that generates a component that renders an `<img>` tag with the given styles
  - ES6 feature *tagged templates*: If you place a function directly in front of a template string, the function is called with the template string as an argument
  - A React component's `defaultProps` are used as fallbacks when the prop's given value is `undefined`
  - Like `shallow()`, `mount()` takes a React tree, renders it, and returns a wrapper that lets you make queries about that tree. Unlike `shallow()`, `mount()` fully renders the tree to the DOM
  - Used sparingly, `mount()` tests are helpful when testing React components from another project
  - *"Actively seek feedback"*
  - It is important to always think ahead: before you write a piece of code, ask yourself what the most valuable feedback you could receive for that code would be.

  ## Chapter 5. Refactoring with Higher-Order Components
   - A good rule of thumb is that components should be build in such a way that each component has only one job. This distinction is intuitive, not technical.
   - *Higher-Order Components* (HOCs) is a pattern for splitting up complex components into simpler pieces
   - A higher-order component is defined as any function that takes a component and returns another component. Well-implemented HOCs tend to be highly reusable
   - Components in React are described as *controlled* or *uncontrolled* with respect to some variable.
    - Controlled: Variable is passed down through `props`
    - Uncontrolled: Variable is managed as `state`
  - A fundamental rule of React is that components have no power to change their own props
  - Extracting small pieces of functionality into HOCs, instead of allowing components to grow in complexity, is an important skill for keeping a React codebase manageable
  - *"Keep the unit small"*

  ## Chapter 6. Continuous Integration and Collaboration
  - 


## Acknowledgements
[Test-Driven React by Trevor Burham](https://pragprog.com/book/tbreact/test-driven-react)
