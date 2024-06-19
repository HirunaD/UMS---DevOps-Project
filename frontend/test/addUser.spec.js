// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Add User', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Add User', async function() {
    await driver.get("http://localhost:3000/users")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.id("id")).sendKeys("1")
    await driver.findElement(By.id("id")).click()
    await driver.findElement(By.id("id")).sendKeys("2")
    await driver.findElement(By.id("id")).click()
    {
      const element = await driver.findElement(By.id("id"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("id")).sendKeys("3")
    await driver.findElement(By.id("id")).click()
    await driver.findElement(By.id("id")).sendKeys("4")
    await driver.findElement(By.id("id")).click()
    await driver.findElement(By.id("id")).sendKeys("5")
    await driver.findElement(By.id("id")).click()
    await driver.findElement(By.id("id")).sendKeys("6")
    await driver.findElement(By.id("id")).click()
    await driver.findElement(By.id("id")).sendKeys("7")
    await driver.findElement(By.id("id")).click()
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("Add User")
    await driver.findElement(By.id("nic")).click()
    await driver.findElement(By.id("nic")).sendKeys("123456789V")
    await driver.findElement(By.id("nic")).click()
    await driver.findElement(By.id("nic")).sendKeys("123456788V")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("adduser@gmail.com")
    await driver.findElement(By.id("dob")).click()
    await driver.findElement(By.id("dob")).sendKeys("1990/5/4")
    await driver.findElement(By.id("dob")).sendKeys("1990/6/21")
    await driver.findElement(By.id("gender")).click()
    await driver.findElement(By.id("gender")).sendKeys("Female")
    await driver.findElement(By.id("city")).click()
    await driver.findElement(By.id("city")).sendKeys("Kandy")
    await driver.findElement(By.css(".css-zn9pf-MuiButtonBase-root-MuiButton-root")).click()
    await driver.close()
  })
})