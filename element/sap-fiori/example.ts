import { step, TestSettings, Until, By, Device, Key } from '@flood/element'
import * as assert from 'assert'
import { internet } from 'faker'

export const settings: TestSettings = {
  clearCache: true,
  disableCache: true,
  waitTimeout: 30,
  stepDelay: 5.0,
  actionDelay: 1.0,
  loopCount: -1,
}

/**
 * fiori
 * @version 1.0
 */
export default () => {
  const randEmail = internet.email()

  step('Test: Start', async (browser) => {
    await browser.visit(
      'https://www.sapfioritrial.com/sites?helpset=trial&sap-client=001#',
    )

    let iAgreeBtn = By.xpath("//span[contains(text(),'I agree')]")
    await browser.wait(Until.elementIsVisible(iAgreeBtn))

    var button = await browser.findElement(iAgreeBtn)
    assert.ok(await button.isDisplayed(), 'Button is visible')
    await button.click()

    await browser.takeScreenshot()
  })

  step('Click on My Tasks', async (browser) => {
    let myTasks = By.visibleText('My Tasks')
    await browser.wait(Until.elementIsVisible(myTasks))

    let myTasksBtn = await browser.findElement(
      By.xpath("//div[@id='__tile13' and contains(@title, 'My Tasks')]"),
    )
    await myTasksBtn.click()

    let searchInput = By.xpath("//input[contains(@placeholder, 'Search')]")
    await browser.wait(Until.elementIsVisible(searchInput))

    await browser.takeScreenshot()
  })

  step('Create a new task and save it', async (browser) => {
    await browser.press(Key.F6)
    await browser.press(Key.F6)
    await browser.press(Key.F6)
    await browser.press(Key.TAB)
    await browser.press(Key.TAB)
    await browser.press(Key.ENTER)

    let titleInput = By.xpath('//div[5]//div[1]//textarea[1]')
    await browser.wait(Until.elementIsVisible(titleInput))
    await browser.type(titleInput, 'Something from ' + randEmail)
    console.log('surname was: ' + randEmail)

    let notesInput = By.xpath("//textarea[@id='__xmlview4--noteTa-inner']")
    await browser.type(notesInput, 'testing from flood')

    await browser.press(Key.F6)
    await browser.press(Key.ENTER)

    await browser.wait(10)

    await browser.takeScreenshot()
  })

  step('Go back to My Tasks', async (browser) => {
    await browser.press(Key.ENTER)

    let searchInput = By.xpath("//input[contains(@placeholder, 'Search')]")
    await browser.wait(Until.elementIsVisible(searchInput))

    await browser.takeScreenshot()
  })

  step('Search for the created task', async (browser) => {
    let searchInput = By.xpath("//input[contains(@placeholder, 'Search')]")
    await browser.type(searchInput, 'Something from ' + randEmail)

    await browser.press(Key.ENTER)

    let pageTextVerify = By.visibleText('Something from ' + randEmail)
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    await browser.takeScreenshot()
  })
}
