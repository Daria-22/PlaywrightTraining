// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 

test('assertions', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

///login testing:
    //get locator of "Username" field
    let userNameField = await page.locator("input[placeholder='Username']");
    //fill in the field with "Admin"
    await (userNameField).fill("Admin");
    
    //get locator if "Password" field
    let passwordField = await page.locator("input[placeholder='Password']");
    //fill in the field with password
    await (passwordField).fill("admin123");

    //get locator of "Login" button
    let loginButton = await page.locator("button[type='submit']");
    await page.getByRole('button').click();

    //let dropDownLogged = await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon");
    //await page.getByRole('caret-down-fill').click();\
    ///let logOutButton = await page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)");

    ///get the locator of the text "Dashboard"
    let dashboardText = await page.locator("//h6[normalize-space()='Dashboard']");
    ///check if the text is visible
    await expect(dashboardText).toBeVisible();

    ///get the locator of the dropdown menu
    let userDropDownname = await page.locator(".oxd-userdropdown-name");
    ///get the text of the user dropdown
    let userDropDownText = await userDropDownname.textContent();
    console.log("Name of user: " + userDropDownText);
    // @ts-ignore
    await expect(page.getByText(userDropDownText)).toBeVisible();
    

});