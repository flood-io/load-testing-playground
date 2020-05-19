import { step, TestSettings, Until, By } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  loopCount: -1,
  screenshotOnFailure: true,
  description: 'Browser Back button demo',
  actionDelay: 2,
  stepDelay: 2,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  ignoreHTTPSErrors: true,
  //responseTimeMeasurement: 'page'
}

/**
 * Browser Back button demo
 * Version: 1.0
 */
export default () => {
  step('The Flood Store: Home', async (browser) => {
    await browser.visit('https://wordpress.loadtest.io')

    let pageTextVerify = By.visibleText('Welcome to the Flood Store.')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })

  step('The Flood Store: Click Hoodies', async (browser) => {
    let lnkHoodies = await browser.findElement(By.partialLinkText('Hoodies'))
    await lnkHoodies.click()

    let pageTextVerify = By.visibleText('Hoodie with Logo')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })

  step('The Flood Store: Page Back', async (browser) => {
    const page = (browser as any).page
    await page.goBack()

    await browser.wait(5)

    await browser.takeScreenshot()
  })
}
