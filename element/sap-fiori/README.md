---
stream:
  name: Fiori
  browser_density: 40
  duration: 10
files:
  - ./example.ts
---

# Load testing SAP Fiori example

## How to use

### Using `element`

Clone this repo locally, and execute [`element` CLI][Element] to run the example on your local machine:

```bash
npx @flood/element-cli run ./element/fiori/example.ts --no-headless
```

### Using [Flood](https://flood.io)

Upload [example.ts](./example.ts) to an existing Stream on Flood, or [run it directly on Flood](https://app.flood.io/launch/github/flood-io/load-testing-playground/element/youtube)

[Element]: (https://github.com/flood-io/element)
