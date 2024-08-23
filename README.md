# vite-lib-e2e
Test of e2e testing for a js library built using Vite.

The following link explains how to build a properly modularized
Javascript library using Vite

https://andrewwalpole.com/blog/use-vite-for-javascript-libraries/

but the presentation doesn't explain how to implement automated testing for the library.

This repository implements a Javascript library following the
pattern described in the link above and also adds unit tests with coverage
and end-to-end (e2e) tests (without coverage -- I gave up on that).
The implementation uses `vitest` for unit tests and `playwright` for e2e tests.

I hope this provides a useful working reference for adding testing
to Javascript libraries.

# Running the tests

After installing the package

```
npm install
```

Run the unit tests like this:

```
npm run test
```

And run the end-to-end tests (which make use of a headless browser) like this

```
npm run test:e2e
```

To run the unit tests and generate a coverage report:

```
npm run test:coverage
```

The full HTML coverage report will appear
in the `coverage` folder rooted at `coverage/index.html`.

# The files

Here is an explanation of some of the structure and content
of the repository:

```
./index.html -- An html file used to bootstrap e2e tests.
./LICENSE -- legaleze.
./dist/.. -- bundled library distributions.
./tests/unit/utils.test.js -- an example unit test suite.
./tests/e2e/example.spec.js -- an example e2e test suite.
./playwright.config.js -- Playwright configuration for e2e tests.
./vite.config.js -- vite configuration including vitest and coverage configuration.
./README.md -- this readme.
./package.json -- npm package config.
./lib/main.js -- library entry point.
./lib/utils.js -- library implementation code.
./test-results -- folder generated with unit test artifacts.
./coverage/.. -- folder generated with unit test coverage reports.
./coverage/index.html -- top level index for HTML coverage reports.
```

# The scripts

Here are some of the `npm` scripts defined for the project:

```
npm install # install the package.
npm run build # build the bundled distributions.
npm run dev # run the dev server (reloads automatically when files change)
npm run test # run unit tests (reloads automatically when files change)
npm run test:e2e # run e2e tests (no reload)
npm run test:coverage # run unit tests and generate coverage reports.
npm run preview # run the preview server using the production bundles.
```

