
const {test, expect} = require ('@playwright/test');

test('WaitUntil tests', async ({page}) => {
  await page.goto("https://habr.com/ru/feed/", {waitUntil: 'load'}); //wait till all page and dependancies load
  //await page.goto("https://habr.com/ru/feed/", {waitUntil: 'domcontentloaded'}); //wait till all page and dependancies load
  //await page.goto("https://habr.com/ru/feed/", {waitUntil: 'commit'}); //wait till all page and dependancies load
  await expect(page.locator('.tm-section-name__text')).toHaveText('Моя лента');
  
});

