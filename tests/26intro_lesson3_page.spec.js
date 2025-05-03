import {test, expect} from '@playwright/test'
//const { test, expect } = require('@playwright/test');

test ("Verify new tab url", async ({page}) => {
    await page.goto("http://habr.ru ");
    await expect(page).toHaveURL('https://habr.com/en/feed/');
    await expect(page).toHaveTitle("Publications / My feed / Habr");
});


test('Contains text', async ({ page }) => {
  await page.goto('https://www.3plearning.com/');
  await expect(page.locator("h1")).toContainText("Discover a better way for children to learn ");
  await expect(page.locator("//a[@href='#community']")).toContainText("Learn more");
});

test.only("Contains text Inzhenerka", async ({page}) =>{
    await page.goto("https://inzhenerka.tech.");
    await expect(page.locator("h2.tn-atom").first()).toHaveText("Делаем обучение интересным, сохраняя авторский подход, и помогаем специалистам повысить востребованность на рынке труда");
    await expect(page.locator('h1')).toContainText('айтишников');
})