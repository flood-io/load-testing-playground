import { step, TestSettings, Until, By } from '@flood/element'

export const settings: TestSettings = {
  loopCount: -1,
  launchArgs: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
  ],
  screenshotOnFailure: true,
  description: 'Test - Live Stream',
  actionDelay: 8,
  stepDelay: 8,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  waitTimeout: 120,
}

export default () => {
  step('Open and Connect', async browser => {
    // visit instructs the browser to launch, open a page, and navigate to https://talk-loadtesting.testapp.com
    // we need to disable the microphone pop-up otherwise we can't progress any further in loading the page
    await browser.visit('https://talk-loadtesting.testapp.com')

    const pageTextVerify = By.visibleText('Welcome to the site.')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })
}
