---
example: Navigation
stream:
  name: Navigation Test
  browser_density: 40
  duration: 18
files:
  - ./test.ts
---

# Navigating

```typescript
import { step, By, Until } from "@flood/element";

export default suite((step) => {
  step('Homepage', async browser => {
    await browser.visit('wordpress.loadtest.io')
    await browser.takeScreenshot()
  })
})
```

In this example instruct the browser to navigate to our Wordpress example site.
