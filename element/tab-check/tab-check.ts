import { step, TestSettings, Until, By } from '@flood/element'

export const settings: TestSettings = {
  loopCount: -1,
  screenshotOnFailure: true,
  description: 'Chrome Tabs Check',
  actionDelay: 2,
  stepDelay: 2,
  disableCache: true,
  clearCookies: true,
  chromeVersion: 'stable',
  waitTimeout: 60,
}

/**
 * Chrome Tab Content Verification
 * Version: 1.0
 */

export default () => {
  step('Home', async (browser) => {
    const page = (browser as any).page
    const pages = (browser as any).pages

    await page.goto('https://wordpress.loadtest.io', { waitUntil: 'load' })

    await page.click('#post-1457 > div > div > a:nth-child(1)')

    await browser.wait(5)

    // get all the currently open pages as an array
    //let pages = (browser as any).pages;
    console.log(pages)

    // get the last element of the array (third in my case) and do some
    // hucus-pocus to get it as JSON...
    // const aHandle = await pages[0].evaluateHandle(() => document.body);

    /*
        const resultHandle = await pages[0].evaluateHandle(body =>
          body.innerHTML, aHandle);

        // get the JSON value of the page.
        let jsonValue = await resultHandle.jsonValue();
        */
  })
}
