import { step, TestSettings, Until, By } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  loopCount: -1,
  screenshotOnFailure: true,
  description: 'Select a specific Add to Cart Button',
  actionDelay: 2,
  stepDelay: 2,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  ignoreHTTPSErrors: true,
  //responseTimeMeasurement: 'page'
}

/**
 * Choose from a number of identical Add to cart buttons
 * Version: 1.0
 */
export default () => {
  step('The Flood Store: Home', async (browser) => {
    await browser.visit('https://wordpress.loadtest.io')

    let pageTextVerify = By.visibleText('Welcome to the Flood Store.')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })

  step('The Flood Store: Click the first Add to Cart', async (browser) => {
    /*
			<a href="/" target="_self" class="a-button a-button--full-width a-button--primary js-formsubmit a-button--large">
			<span class="a-buttoninner">Add to cart</span>
			</a>
		*/

    let addToCartButtons = await browser.findElements(
      By.xpath("//span[contains(text(),'Add to cart')]"),
    )
    let chosenAddButton = await browser.findElement(addToCartButtons[0])
    await chosenAddButton.click()

    let pageTextVerify = By.visibleText('has been added to your cart.')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })
}
