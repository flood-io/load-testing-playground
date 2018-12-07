---
stream:
  name: YouTube
  browser_density: 40
  duration: 18
files:
  - ./example.ts
example:
  highlight:
    - 9
    - 14
---

# Load testing a YouTube video example

## How to use

### Using `element`

Clone this repo locally, and execute [`element` CLI][Element] to run the example on your local machine:

```bash
npx @flood/element-cli run ./element/youtube/example.ts --no-headless
```

### Using [Flood](https://flood.io)

Upload [example.ts](./example.ts) to an existing Stream on Flood, or [run it directly on Flood](https://app.flood.io/launch/github/flood-io/load-testing-playground/element/youtube)

## The idea behind the example

In this somewhat contrived example, we'll load test a YouTube video by playing it in Flood Element. This example is designed to give you a starting point for load testing your own video hosting projects.

[Element]: (https://github.com/flood-io/element)
