---
example: Waiting
stream:
  name: Waiting Test
  browser_density: 40
  duration: 18
files:
  - ./example.ts
---

# Waiting example

## How to use

### Using `element`

Clone this repo locally, and execute [`element` CLI][Element] to run the example on your local machine:

```bash
npx @flood/element-cli run ./element/waiting/example.ts --no-headless
```

### Using [Flood](https://flood.io)

Upload [example.ts](./example.ts) to an existing Stream on Flood, or [run it directly on Flood](https://app.flood.io/launch/github/flood-io/load-testing-playground/element/waiting)

## The idea behind the example

This example shows how we can make a step wait for an element to become visible on the page before proceeding. It is important that elements exist on the page before attempting to interact with them. In this example, we navigate to our Wordpress example site, wait for the `.products` element to become visible, and take a screenshot.

[Element]: (https://github.com/flood-io/element)
