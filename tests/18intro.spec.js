///log to site and verify thyat emails have gmail domain

//npx playwright test tests/15intro.spec.js --headed
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 

test('test1', async ({ page }) => { 
    //opening the link, grabbing text for login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(3000);
    //copy and trim login
    let grabLogin = await page.locator("//p[@class='oxd-text oxd-text--p'][1]");
    let textValueGrabLogin = await grabLogin.textContent();
    //console.log(textValueGrabLogin);
    // @ts-ignore
    let theLoginTrimmed = textValueGrabLogin.replace('Username : ','');
    console.log(theLoginTrimmed);

    //copy and trim password
    let grabPassword = await page.locator("//p[@class='oxd-text oxd-text--p'][2]");
    let textValueGrabPassword = await grabPassword.textContent();
    // @ts-ignore
    let thePasswordTrimmed = textValueGrabPassword.replace('Password : ','');
    console.log(thePasswordTrimmed);

    ///get where to paste copied password ans login 
    let userNameField = await page.locator("input[placeholder='Username']")
    let passwordField = await page.locator("input[placeholder='Password']")
    // @ts-ignore
    //pasting copied password and login
    await userNameField.fill(theLoginTrimmed);
    await page.waitForTimeout(2000);
    let inputNamecheck = await userNameField.inputValue();
    //console.log(inputNamecheck);
    //  @ts-ignore
    passwordField.fill(thePasswordTrimmed);
    await page.waitForTimeout(2000);
    
    //clicking button
    await page.getByRole('button').click();
    await page.waitForTimeout(3000);
    
    //click admin button
    //let adminButton = await page.locator("//div/ul/li[@class='oxd-main-menu-item-wrapper'][.='Admin']");
    await page.click("//div/ul/li[@class='oxd-main-menu-item-wrapper'][.='Admin']");

    let recordFound = await page.locator('(//span[@class="oxd-text oxd-text--span"])[1]');
    let valueOfRecord = await recordFound.textContent();
    console.log(recordFound);

}


);

