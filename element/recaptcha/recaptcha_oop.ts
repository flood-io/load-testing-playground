import { step, TestSettings, Until, By } from '@flood/element'
import * as assert from 'assert'
export const settings: TestSettings = {
  loopCount: -1,
  clearCache: true,
  disableCache: true,
  actionDelay: 2,
  stepDelay: 2,
  screenshotOnFailure: true,
  chromeVersion: 'stable',
  ignoreHTTPSErrors: true,
  launchArgs: ['--disable-features=site-per-process'],
}
export default () => {
  step('01_Home', async browser => {
    //Navigate to homepage.
    await browser.visit('https://nicolevanderhoeven.com/recaptcha-live')

    //Validate text
    let validation = By.visibleText('Name')
    await browser.wait(Until.elementIsVisible(validation))

    await browser.takeScreenshot()
  })

  step('02_TypeAndRecaptcha', async browser => {
    //Type name.
    await browser.type(By.id('input_name'), 'Nicole')

    // PLEASE NOTE: This site uses an OOP (Out of Process) iframe which launches the iframe in a seperate process.
    // We disable this by using the launch arg site-per-process in the test settings.
    const frameReCAPTCHA = browser.page
      .frames()
      .find(frame => frame.url().includes('www.google.com/recaptcha/api2'))

    let cssReCAPTCHA = '#recaptcha-anchor > div.recaptcha-checkbox-border'

    //let's wait for an object within the iframe
    await frameReCAPTCHA.waitForSelector(cssReCAPTCHA)

    //click on the ReCAPTCHA checkbox
    await frameReCAPTCHA.click(cssReCAPTCHA)
  })
}
