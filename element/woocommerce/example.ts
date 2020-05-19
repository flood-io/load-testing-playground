import { step, TestSettings, Until, By } from '@flood/element'

/**
 * The Flood Store
 * Version: 2.0
 */
export default () => {
  step('The Flood Store: Home', async (browser) => {
    await browser.visit('https://wordpress.loadtest.io/')

    const pageTextVerify = By.visibleText('Welcome to the Flood Store')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })

  step('The Flood Store: Click Hoodies', async (browser) => {
    const lnkHoodies = await browser.findElement(By.partialLinkText('Hoodies'))
    await lnkHoodies.click()

    const pageTextVerify = By.visibleText('Hoodie with Logo')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })

  step('The Flood Store: Add To Cart', async (browser) => {
    const addHoodieToCart = await browser.findElement(
      By.xpath('//a[@data-product_id=39]'),
    )
    await addHoodieToCart.click()

    await browser.takeScreenshot()
  })

  step('The Flood Store: View Cart', async (browser) => {
    await browser.visit('https://wordpress.loadtest.io/cart')

    const pageTextVerify1 = By.visibleText('Free shipping')
    await browser.wait(Until.elementIsVisible(pageTextVerify1))

    const pageTextVerify2 = By.visibleText('Hoodie with Logo')
    await browser.wait(Until.elementIsVisible(pageTextVerify2))

    await browser.takeScreenshot()
  })

  step('The Flood Store: Proceed to Checkout', async (browser) => {
    const lnkProceedToCheckout = By.css(
      '#post-14 > div > div > div > div > div > a',
    )
    await browser.wait(Until.elementIsVisible(lnkProceedToCheckout))
    const element = await browser.findElement(lnkProceedToCheckout)
    await element.focus()
    await element.click()

    const pageTextVerify = By.visibleText('Returning customer?')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })

  step('The Flood Store: Checkout Data Entry', async (browser) => {
    //let billingFirstName = await browser.findElement(By.id('billing_first_name'))

    // Fill in text field - billing First Name
    await browser.type(By.id('billing_first_name'), 'Element')

    // Fill in text field - billing First Name
    await browser.type(By.id('billing_last_name'), 'Test')

    // Select from searchable dropdown - billing Country
    const element = await browser.findElement(
      By.id('select2-billing_country-container'),
    )
    await element.focus()
    await element.click()
    await browser.type(
      By.xpath('/html/body/span/span/span[1]/input'),
      'Australia',
    )
    await browser.type(
      By.xpath('/html/body/span/span/span[1]/input'),
      String.fromCharCode(13),
    ) //Simulate Enter key

    // Fill in text field - billing Address 1
    await browser.type(By.id('billing_address_1'), '123 ABC Street')

    // Fill in text field - billing City
    await browser.type(By.id('billing_city'), 'Melbourne')
    await browser.takeScreenshot()

    // Select from searchable dropdown - billing State
    const element_state = await browser.findElement(
      By.xpath(
        '(//span[@class="select2-selection select2-selection--single"])[2]',
      ),
    )
    await element_state.focus()
    await element_state.click()
    await browser.type(
      By.xpath('/html/body/span/span/span[1]/input'),
      'Victoria',
    )
    await browser.type(
      By.xpath('/html/body/span/span/span[1]/input'),
      String.fromCharCode(13),
    ) //Simulate Enter key

    // Fill in text field - billing postcode
    await browser.type(By.id('billing_postcode'), '3000')

    // Fill in text field - billing phone
    await browser.type(By.id('billing_phone'), '0400000123')

    // Fill in text field - billing email
    await browser.type(By.id('billing_email'), 'support@flood.io')

    await browser.takeScreenshot()
  })

  step('The Flood Store: Place Order', async (browser) => {
    const btnPlaceOrder = By.xpath(
      "//button[contains(@name, 'woocommerce_checkout_place_order')]",
    )
    await browser.wait(Until.elementIsVisible(btnPlaceOrder))
    const element = await browser.findElement(btnPlaceOrder)
    await element.focus()
    await element.click()

    //Verify page
    const pageTextVerify = By.visibleText('Order received')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })
}

export const settings: TestSettings = {
  loopCount: -1,
  description: 'The Flood Store - Detailed Tutorial',
  screenshotOnFailure: true,
  disableCache: true,
  clearCache: true,
  clearCookies: true,
  actionDelay: 1.5,
  stepDelay: 2.5,
}
