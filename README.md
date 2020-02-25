# Notes and Working Examples from Test-Driven React

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


## Acknowledgements
[Test-Driven React by Trevor Burham](https://pragprog.com/book/tbreact/test-driven-react)
