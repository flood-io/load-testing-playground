import { step, TestSettings, Until, By } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  loopCount: 1,
  screenshotOnFailure: true,
  description: 'ReCAPTCHA Demo - Element',
  actionDelay: 2,
  stepDelay: 2,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  ignoreHTTPSErrors: true,
}

/**
 * ReCAPTCHA Demo
 * Version: 1.0
 */
export default () => {
  step('ReCAPTCHA: Google Demo Site', async (browser) => {
    //Please Note: ReCAPTCHA must be in TEST Mode
    await browser.visit('https://www.google.com/recaptcha/api2/demo')

    //lets declare the iframe object and identify it from a unique part of the url present in it's src tag
    const frameReCAPTCHA = browser.page
      .frames()
      .find((frame) => frame.url().includes('api2/anchor?ar=1&k'))

    let cssReCAPTCHA = '#recaptcha-anchor > div.recaptcha-checkbox-border'

    //lets wait for an object within the iframe
    await frameReCAPTCHA.waitForSelector(cssReCAPTCHA)

    //click on the ReCAPTCHA checkbox
    await frameReCAPTCHA.click(cssReCAPTCHA)

    await browser.wait(5)
    await browser.takeScreenshot()
  })
}
