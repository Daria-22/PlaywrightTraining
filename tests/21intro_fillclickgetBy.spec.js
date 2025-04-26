const { test, expect } = require('@playwright/test');

test('auth test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
    
// >>>>> testing that login takes place when correct creads are used
  const login = "Dashunka" 
  const password = "pwd"

  await page.getByPlaceholder('User Name').fill(login);
  await page.waitForTimeout(1500);
  await page.getByPlaceholder("********").fill(password); 
  await page.waitForTimeout(1500);
  await page.locator('//button[@id="login"]').click();
  await page.waitForTimeout(1500);
// <<<<<
    
  await expect(page.locator("#loginstatus")).toHaveText(`Welcome, ${login}!`)
});