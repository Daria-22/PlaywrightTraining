import {expect, test} from "@playwright/test";

test('Verify Javascrip search results', async ({page})=> {
    await page.goto('https://www.litres.ru/');
    await page.getByTestId('search__input').fill('javascript');
    await page.getByTestId('search__button').click();
    await page.waitForTimeout(2000);
    const locatorSearchresult = await page.locator('#pageTitle').textContent();
    console.log('This is what is written in the header', locatorSearchresult);
    await page.waitForTimeout(2000);

    expect(locatorSearchresult).toBe('Результаты поиска «javascript»');

}
); 

// npx playwright test tests/30intro.les3_getByTestId.spec.js  --headed --project chromium 

// Takeaway:
// you can search by testId - getByTestId('search_input')
// it is a good idea to ask developers to include testId


//here is the inzhenerka solution :
// const { test, expect } = require('@playwright/test');

// test('litres test', async ({ page }) => {

//   await page.goto('https://www.litres.ru');
//   await page.getByTestId("search__input").fill("javascript");
//   await page.getByTestId("search__button").click();
  
//   // вот эту строчку оставить без изменений
//   await page.waitForSelector("h1[data-testid='search-title__wrapper']", {timeout: 30000}); - did not work for me!!!

//   await expect(page.getByTestId("search-title__wrapper")).toHaveText("Результаты поиска «javascript»")
// });