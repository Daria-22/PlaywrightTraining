const { test, expect } = require("@playwright/test");
 test("1 box checked and 2 box unchecked", async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    let checkboxes = page.locator('//input[@type="checkbox"]'); //all checkboxes 
    // or const checkboxes = page.locator('input[type="checkbox"]');
    let checkbox1 = checkboxes.nth(0);  // the first checkbox
    let checkbox2 = checkboxes.nth(1);  // the second checkbox
    await checkbox1.check(); // check the 1 checkbox
    await page.waitForTimeout(1500);  
    await checkbox2.uncheck(); // check the 2 checkbox
    await page.waitForTimeout(1500);
     
    // testing the action of checking and unckecking was applied
    expect(checkbox1).toBeChecked();
    expect(checkbox2).not.toBeChecked();


 });

//input[@type='checkbox']
