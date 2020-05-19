import { step, TestSettings, Until, By } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  loopCount: -1,
  screenshotOnFailure: true,
  description: 'Flooded Headers - Check Header Values',
  actionDelay: 7,
  stepDelay: 7,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  ignoreHTTPSErrors: true,
  extraHTTPHeaders: { Authorization: 'Basic dGVzdDp0ZXN0' },
}

/**
 * Flooded Headers
 * Version: 1.0
 */
export default () => {
  step('Trigger Event: Shop Home', async (browser) => {
    await browser.visit('https://wordpress.loadtest.io/shop/')

    await browser.takeScreenshot()
  })

  step('Trigger Event: Change', async (browser) => {
    const elementHandle = await browser.page.$('body')
    browser.page.evaluate(
      (element) => $(element).trigger('change'),
      elementHandle,
    )

    await browser.takeScreenshot()
  })
}
