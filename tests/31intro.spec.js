const { test, expect } = require('@playwright/test');

test('Проверяем, что у поля Откуда выпадает подсказка', async ({ page }) => {
  await page.goto('https://www.russianrailways.com/');
      
  
  await page.locator("#fromTextInput").click();
  await page.waitForTimeout(1500);
  //await expect(page.locator(".rr-desktop-autosuggest").first()).toBeVisible();
  await expect(page.locator(".rr-desktop-autosuggest").first()).toBeVisible();
});

//npx playwright test tests/31intro.spec.js  --headed --project chromium 