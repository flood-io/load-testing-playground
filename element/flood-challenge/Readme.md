---
stream:
  name: Flood Challenge
  browser_density: 40
  duration: 18
files:
  - ./example.ts
example:
  highlight:
    - 25
    - 98
---

# Flood Challenge example

## How to use

### Using `element`

Clone this repo locally, and execute [`element`][Element] to run the example on your local machine:

```bash
npx @flood/element-cli ./element/flood-challenge/example.ts --no-headless
```

### Using [Flood](https://flood.io)

Upload [example.ts](./example.ts) to an existing Stream on Flood, or [run it directly on Flood](https://app.flood.io/launch/github/flood-io/load-testing-playground/element/flood-challenge)

## The idea behind the example

This example simulates completing the [Flood load testing challenge](https://challenge.flood.io). We originally designed this challenge site as a way for performance testers to prove their skills by completing it using a Protocol Level load test tool, such as JMeter or Gatling. It contains complex network behaviour which requires a non-trivial amount of work to simulate at the network layer.

Using Flood Element, the whole challenge can be completed very quickly and without much complexity beyond waiting for pages to load and parsing some of the data on the screen in order to complete the next screen.

Flood Element uses TypeScript under the hood, which makes it very easy to extract and trasform values before using them in another UI action.

[Element]: (https://github.com/flood-io/element)
