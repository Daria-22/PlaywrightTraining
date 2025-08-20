

const { test, expect } = require('@playwright/test');

test('Проверяем пустой результат поиска на сайте', async ({ page }) => {
    const url = 'https://www.selenium.dev/documentation/'
    await page.goto(url);
        
    await page.locator(".DocSearch-Button-Placeholder").first().click()
    await page.locator("#docsearch-input").fill("playwright")
    
    await expect(page.locator(".DocSearch-Title")).toHaveText('No results for "playwright" :(');
  });

  //npx playwright test -g   -to runindebug