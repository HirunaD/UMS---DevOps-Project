// // Generated by Selenium IDE
// const { Builder, By, Key, until } = require('selenium-webdriver')
// const assert = require('assert')

// describe('Edit User', function() {
//   this.timeout(30000)
//   let driver
//   let vars
//   beforeEach(async function() {
//     driver = await new Builder().forBrowser('chrome').build()
//     vars = {}
//   })
//   afterEach(async function() {
//     await driver.quit();
//   })
//   it('Edit User', async function() {
//     await driver.get("http://localhost:3000/users")
//     await driver.manage().window().setRect({ width: 1552, height: 832 })
//     await driver.findElement(By.css(".MuiTableRow-root:nth-child(7) > .MuiTableCell-root:nth-child(8) > .MuiButtonBase-root")).click()
//     await driver.findElement(By.id("name")).click()
//     await driver.findElement(By.css(".MuiGrid-root:nth-child(3)")).click()
//     {
//       const element = await driver.findElement(By.css(".css-zn9pf-MuiButtonBase-root-MuiButton-root"))
//       await driver.actions({ bridge: true }).moveToElement(element).perform()
//     }
//     await driver.findElement(By.id("name")).sendKeys("Delete User")
//     await driver.findElement(By.css(".css-zn9pf-MuiButtonBase-root-MuiButton-root")).click()
//     {
//       const element = await driver.findElement(By.CSS_SELECTOR, "body")
//       await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
//     }
//   })
// })
