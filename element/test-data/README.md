---
stream:
  name: Unique Test Data
  browser_density: 40
  duration: 18
files:
  - ./example.ts
  - ./users.csv
example:
  highlight:
    - 35
    - 37
---

# Using Unique Test Data example

## How to use

### Using `element`

Clone this repo locally, and execute [`element`][Element] to run the example on your local machine:

```bash
npx @flood/element-cli ./element/test-data/example.ts --no-headless
```

### Using [Flood](https://flood.io)

Upload [example.ts](./example.ts) and [users.csv][] to an existing Stream on Flood, or [run it directly on Flood](https://app.flood.io/launch/github/flood-io/load-testing-playground/element/test-data)

## The idea behind the example

This example show how you can use our built in [Test Data][] support to programatically cycle through different values during each iteration of your test.

[Test Data]: (https://element.flood.io/docs/1.0/api/TestData)
[Element]: (https://github.com/flood-io/element)
