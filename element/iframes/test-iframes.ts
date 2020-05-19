import {
  step,
  TestSettings,
  Browser,
  TestData,
  Until,
  By,
} from '@flood/element'

/**
 * iframes object example
 * Version: 2.0
 */

export const settings: TestSettings = {
  loopCount: -1,
  description: 'iframes',
  screenshotOnFailure: false,
  disableCache: true,
  clearCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  actionDelay: 6.5,
  stepDelay: 6.5,
}

export default () => {
  step('Event Page', async (browser) => {
    await browser.visit('https://event.videostream.com/test')

    //wait for media player to load and play within an iframe
    const page = (browser as any).page
    //lets declare the iframe object and identify it from a unique part of the url present in it's src tag
    const framePlayer = page
      .frames()
      .find((frame) => frame.url().includes('faqvideotest.jsp'))
    //lets wait for an object within the iframe
    await framePlayer.waitForSelector('#top-control-bar > div > div')

    await browser.takeScreenshot()
  })

  step('Event Page', async (browser) => {
    await browser.takeScreenshot()
  })

  for (var i = 1; i < 500; i++) {
    //waits a while viewing the video stream
    step('Watch Video ' + i, async (browser) => {
      await browser.wait(20)
      await browser.takeScreenshot()
    })
  }
}
