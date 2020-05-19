import { step } from '@flood/element'

export default () => {
  step('Homepage', async (browser) => {
    await browser.visit('https://wordpress.loadtest.io')
    await browser.takeScreenshot()
  })
}
