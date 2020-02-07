---
stream:
  name: SAP GUI
  browser_density: 40
  duration: 10
files:
  - ./example.ts
---

# Load testing SAP GUI with NetWeaver example

Tradional, desktop-based SAP GUI environments can be targeted via a browser using Element if presented via [NetWeaver](https://www.sap.com/products/netweaver-platform.html)

## How to use

### Using `element`

Clone this repo locally, and execute [`element` CLI][Element] to run the example on your local machine:

```bash
npx @flood/element-cli run ./element/sap-gui/example.ts --no-headless
```

### Using [Flood](https://flood.io)

Upload [example.ts](./example.ts) to an existing Stream on Flood, or [run it directly on Flood](https://app.flood.io/launch/github/flood-io/load-testing-playground/element/youtube)

[Element]: (https://github.com/flood-io/element)
