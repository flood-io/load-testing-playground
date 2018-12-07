---
example: Navigation
stream:
  name: Navigation Test
  browser_density: 40
  duration: 18
files:
  - ./example.ts
---

# Navigating

```typescript
import { step } from "@flood/element";

export default () => {
  step('Homepage', async browser => {
    await browser.visit('wordpress.loadtest.io')
    await browser.takeScreenshot()
  })
}
```

In this example instruct the browser to navigate to our Wordpress example site.
