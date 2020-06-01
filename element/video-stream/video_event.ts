import { step, TestSettings, Until, By } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  loopCount: -1,
  screenshotOnFailure: true,
  description: 'Test - Live Stream',
  actionDelay: 8,
  stepDelay: 8,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  waitTimeout: 60,
}

/**
 * Watch Live Stream
 * Version: 1.0
 */
export default () => {
  step('Home', async browser => {
    await browser.visit(
      'https://live-demo.abigevent.com/live/stream-entry-3.html',
    )

    let pageTextVerify = By.visibleText(
      'Streaming content is best supported on modern browsers',
    )
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })

  step('Home: Click Play', async browser => {
    //play the video
    let obj_btn_Play = By.xpath('//*[@id="player-node"]/button')
    await browser.wait(Until.elementIsVisible(obj_btn_Play))
    let element7 = await browser.findElement(obj_btn_Play)
    await element7.click()

    await browser.takeScreenshot()
  })

  for (var i = 1; i < 500; i++) {
    //waits a while viewing the video stream
    step('Watch Video ' + i, async browser => {
      await browser.wait(20)
      await browser.takeScreenshot()
    })
  }
}
