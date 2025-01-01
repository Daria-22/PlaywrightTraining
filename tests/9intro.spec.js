// @ts-check
const { test, expect } = require('@playwright/test');

test('test9 Dictionary test', async ({ page }) => {
    await page.goto("https://www.ldoceonline.com/dictionary/buy-into");
    //let languageButton = await page.locator("div[title='Select your dictionary']");
    await page.getByTitle('Select your dictionary').click();
});
    // await expect(languageButton).toContainText("English");
    // //languageButton.click();
    // let languageButtons = await page.$$("//div/a[@class='item']");
    // console.log(typeof languageButtons);
    // for (let button of languageButtons) {
    //     let buttoncontent = button.textContent();
    //     console.log(buttoncontent);