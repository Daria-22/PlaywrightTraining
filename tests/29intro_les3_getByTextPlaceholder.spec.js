const {test, expect} = require('@playwright/test');
const login = 'standard_user'
const password = 'secret_sauce'
test('Verify the new page opens', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(login);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByText('Login').click(); // I forgot to click the button and the test failed! Shame on me :)
    await page.waitForTimeout(2000);
    expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

    await page.waitForTimeout(2000);


})



// npx playwright test tests/29intro_les3_getByTextPlaceholder.spec.js  --headed --project chromium  