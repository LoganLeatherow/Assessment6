import { Builder, Capabilities, By } from "selenium-webdriver"
import { elementIsEnabled } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    driver.sleep(3000)
})

test('draw button bringing up choices div',async () => {
await driver.findElement(By.id('draw')).click()
driver.sleep(3000)
const choices = await driver.findElement(By.id('choices'))
const displayed = await choices.isDisplayed()
expect(displayed).toBe(true)
driver.sleep(5000)
})

test('add to duo button bringing up player duo div',async () => {
    await driver.findElement(By.xpath('//*[@id="draw"]')).click()
    driver.sleep(8000)
    const choices = await driver.findElement(By.id('choices'))
     await driver.findElement(By.xpath('//*[@id="choices"]/div[1]/button')).click()
     driver.sleep(8000)
     const displayed = await driver.findElement(By.xpath('//*[@id="player-duo"]')).isDisplayed()
     driver.sleep(8000)
     expect(displayed).toBe(true)
     driver.sleep(8000)
})


// test("duo is hidden)", () => {
//     render(<SummaryForm />);
//     const nullPopover = screen.queryByText(/No ice cream will be delivered/i);
//     expect(nullPopover).not.toBeVisible();
//   });
// });


// test('add to duo button bringing up player duo div',async () => {
//     await driver.findElement(By.id('draw')).click()
//     driver.sleep(3000)
//         await driver.findElement(By.xpath("text()=['bot-btn')".click()
//         driver.sleep(3000)
//         await driver.findElement(By.id('player-duo'))
//         const displayed = await player-duo.isDisplayed()
//         expect(displayed).toBe(true)
//         driver.sleep(5000)
// })