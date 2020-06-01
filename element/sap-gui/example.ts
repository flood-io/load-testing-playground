import {
  Browser,
  step,
  TestSettings,
  By,
  Until,
  Key,
  Locator,
  ElementHandle,
  TestData,
} from '@flood/element'
import assert from 'assert'
export const settings: TestSettings = {
  waitUntil: 'visible',
  ignoreHTTPSErrors: true,
  waitTimeout: 120,
  actionDelay: 5,
  chromeVersion: 'stable',
}

async function pressButton(b: Browser, locator: Locator) {
  let handle = await b.findElement(locator)
  await b.wait(1)
  await handle.focus()
  await b.mouse.click(handle)
}

export default () => {
  interface UserData {
    id: string
    username: string
    password: string
  }
  TestData.fromCSV<UserData>('users.csv')
    .filter((line, index, browserID) => line.id === globalBrowserID)
    .circular()

  step('Login', async (b: Browser, data: UserData) => {
    let { username, password } = data

    try {
      await b.visit(
        'https://sap43.tricentis.com/sap/bc/gui/sap/its/webgui?sap-client=001',
        {
          waitUntil: 'domcontentloaded',
        },
      )
    } catch {}
    let usernameInput = await b.findElement(By.id('sap-user'))
    await b.wait(Until.elementIsVisible(usernameInput))
    await usernameInput.type(username)
    let passwordInput = await b.findElement(By.id('sap-password'))
    await passwordInput.type(password)
    // Press logon button
    await pressButton(b, By.css('#LOGON_BUTTON'))
    await b.takeScreenshot()
  })

  step('Open Workplace', async b => {
    await b.wait(15)
    await b.wait(Until.elementLocated(By.id('ITSFRAME1')))
    await b.switchTo().frame('ITSFRAME1')
    await b.wait(Until.elementIsVisible(By.css('#webguiPageLayout')))
    // Press workplace button
    await pressButton(b, By.xpath('//*[@id="M0:37::btn[36]"]'))
    await b.takeScreenshot()
  })

  step('Compose message', async b => {
    // Press new message button
    await pressButton(b, By.visibleText('New message'))
    let title = await b.findElement(By.xpath('//*[@id="M0:46:1:1::0:7"]'))
    await title.type('Hello Chris, this is a robot')
    await b.keyboard.press(Key.TAB, { delay: 200 })
    await b.keyboard.press(Key.TAB, { delay: 200 })
    await b.keyboard.type('Good day sir!', { delay: 50 })
    await b.wait(5)
    await b.takeScreenshot()
  })
}
