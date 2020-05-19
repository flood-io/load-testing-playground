import { step, TestSettings, Until, By } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  loopCount: -1,
  screenshotOnFailure: true,
  description: 'Page Authentication',
  actionDelay: 2,
  stepDelay: 2,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  ignoreHTTPSErrors: true,
}

/**
 * Flooded.io Authentication
 * Version: 1.0
 */
export default () => {
  step('Authentication: Home', async (browser) => {
    const page = (browser as any).page
    await page.authenticate('https://www.test.mydomain.com/', [
      'user',
      'password',
    ])
    await browser.visit('https://www.test.mydomain.com/')

    await browser.takeScreenshot()
  })
}
