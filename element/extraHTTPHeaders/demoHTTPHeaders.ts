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
  step('Check Headers: Home', async (browser) => {
    await browser.visit('https://flooded.io/headers')

    await browser.takeScreenshot()
  })
}
