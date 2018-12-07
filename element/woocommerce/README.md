---
stream:
  name: WooCommerce
  browser_density: 40
  duration: 18
files:
  - ./example.ts
example:
  highlight:
    - 8
    - 15
---

# Load testing a WooCommerce store example

## How to use

### Using `element`

Clone this repo locally, and execute [`element` CLI][Element] to run the example on your local machine:

```bash
npx @flood/element-cli run ./element/woocommerce/example.ts --no-headless
```

### Using [Flood](https://flood.io)

Upload [example.ts](./example.ts) to an existing Stream on Flood, or [run it directly on Flood](https://app.flood.io/launch/github/flood-io/load-testing-playground/element/woocommerce)

## The idea behind the example

This detailed example will show you how to actually build a working Flood Element script that uses a variety of different classes to identify objects you would like to interact with in order to successfully simulate a typical online store checkout process built with [WooCommerce][].

[Element]: (https://github.com/flood-io/element)
[WooCommerce]: (https://woocommerce.com/)
