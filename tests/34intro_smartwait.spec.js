const {test, expect} = require ('@playwright/test');

test('Smart wait', async ({page})=>
  {
    await page.goto("http://uitestingplayground.com/ajax");
    await page.locator("#ajaxButton").click();
    //let appearingText = await page.locator("//div[@id='content']//p[1]").textContent({timeout:20000});
    let appearingText = await page.locator("//div[@id='content']//p[1]").textContent();
    expect(appearingText).toBe("Data loaded with AJAX get request.")
  })

// npx playwright test tests/34intro_smartwait.spec.js  --headed --project chromium 