import { step, TestSettings, Until, By, Key, Device } from '@flood/element'
import * as assert from 'assert'

export default () => {
  step('Test: User lands on the homepage', async (browser) => {
    await browser.visit('http://magento2-demo.nexcess.net/')
    await browser.takeScreenshot()
  })

  step('Test: User searches for an item from the homepage', async (browser) => {
    // Find the search box element
    const searchBox = By.css('#search')
    await browser.wait(Until.elementIsVisible(searchBox))
    // Search for our item
    await browser.type(searchBox, 'shirt')
    await browser.press(Key.RETURN)
    await browser.wait(Until.urlContains('catalogsearch/result'))

    // Make sure we have results
    const countSelector = By.css('.toolbar-amount')
    await browser.wait(Until.elementIsVisible(countSelector))
    const countElement = await browser.findElement(countSelector)
    const countText = await countElement.text()
    assert(countText === '5 items', 'Expected items are found')

    //Click first result.
    await browser.click(By.css('.product-image-photo:first-of-type'))
  })

  step('Test: Add the item to the shopping cart', async (browser) => {
    const black = By.css('.swatch-option.color:first-of-type')
    const large = By.css('.swatch-option.text:nth-of-type(4)')
    const addToCart = By.css('button.tocart')
    await browser.wait(Until.elementIsVisible(black))
    await browser.wait(Until.elementIsVisible(large))
    await browser.wait(Until.elementIsVisible(addToCart))
    await browser.click(black)
    await browser.click(large)
    await browser.click(addToCart)

    const confirmationText = By.partialVisibleText('You added')
    await browser.wait(Until.elementIsVisible(confirmationText))
    await browser.takeScreenshot()
  })

  step('Test: User visits the shopping cart', async (browser) => {
    const showCart = By.css('.showcart')
    await browser.click(showCart)
    const viewCart = By.css('.viewcart')
    await browser.wait(Until.elementIsVisible(viewCart))
    await browser.click(viewCart)
    await browser.wait(Until.urlContains('checkout/cart'))

    const total = By.css('.grand.totals .price')
    await browser.wait(Until.elementIsVisible(total))
    const totalElement = await browser.findElement(total)
    const price = await totalElement.text()
    await browser.takeScreenshot()
    assert(price === '$45.00', 'Has the correct total in the cart')
  })

  step('Test: User goes through the checkout process', async (browser) => {
    await browser.click(By.visibleText('Proceed to Checkout'))
    await browser.wait(Until.urlContains('checkout'))
    // Wait for the form to load
    await browser.wait(
      Until.elementIsVisible(By.visibleText('Shipping Address')),
    )
    // Prepare our inputs
    const values = [
      ['#customer-email', 'you@example.com'],
      ['input[name=firstname]', 'Joe'],
      ['input[name=lastname]', 'LoadTester'],
      ['input[name="street[0]"]', '123 Fake St.'],
      ['input[name="city"]', 'Fakeville'],
      ['input[name="postcode"]', '90210'],
      ['input[name="telephone"]', '+1582582582'],
    ]
    // Fill in all our details
    for (let i = 0; i < values.length; i++) {
      const element = By.css(values[i][0])
      const value = values[i][1]
      await browser.type(element, value)
    }
    // Choose the region
    await browser.selectByText(By.css('select[name=region_id]'), 'California')
    // Choose the shipping option
    await browser.click(
      By.css(
        '.table-checkout-shipping-method tbody .row:first-of-type .col-carrier',
      ),
    )
    await browser.takeScreenshot()

    // Move onto payment
    await browser.click(By.visibleText('Next'))
    // Place the order!
    const placeOrder = By.visibleText('Place Order')
    await browser.wait(Until.elementIsVisible(placeOrder))
    await browser.takeScreenshot()
    await browser.click(placeOrder)
    await browser.takeScreenshot()
  })
}

export const settings: TestSettings = {
  clearCache: true,
  disableCache: true,
}
