const {Builder, Capabiliies} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder(). withCapabilities(Capabiliies.chrome()).build()

beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

afterAll(async () => {
    await driver.quit()
})

test('I can serach Google', async () => {

    let searchBar = await (await driver).findElement(By.name('q'))
    await searchBar.sendKeys('LOTR\n')
    await driver.sleep(2000)

    searchBar = await driver.findElement(By.name('q'))
    await searchBar.clear()
    await searchBar.sendKeys('Kittens\n')
})

