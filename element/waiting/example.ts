import { step, Until, By } from '@flood/element'

export default () => {
  step('Wait for products', async browser => {
    // Use CSS to find the products list, then wait until it is visible on the page
    await browser.wait(Until.elementIsVisible(By.css('.products')))
  })
}
