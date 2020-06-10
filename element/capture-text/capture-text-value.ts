import { setup, step, TestSettings, By, Until } from '@flood/element'

export const settings: TestSettings = {
  clearCache: true,
  clearCookies: true,
  actionDelay: 3,
  stepDelay: 3,
  loopCount: 1,
  waitUntil: 'visible',
  chromeVersion: 'stable',
}

export default () => {
  setup({ waitTimeout: 100 })
  step('Open home Page', async browser => {
    await browser.visit('https://www.onlinemetals.com/')
    await browser.takeScreenshot()
    await browser.wait(
      Until.elementIsVisible(By.xpath("//a[@id='js_signin' and @class]")),
    )
  })

  step('Get Discount Code', async browser => {
    //declare the full text object CSS selector
    let objDiscountCodeText =
      '#evergage-tooltip-ambTMPFl > div > span > span:nth-child(3) > span > span > b > span > span:nth-child(3) > span > span > span:nth-child(2)'

    //find the text CSS selector within the page
    await browser.wait(Until.elementIsVisible(By.css(objDiscountCodeText)))
    let valueDiscountCode = await browser.findElement(
      By.css(objDiscountCodeText),
    )

    //save the text value to a string
    let discountCode = await valueDiscountCode.text()

    //output the text value to the console log
    console.log('The discount code is: ' + discountCode)
  })
}
