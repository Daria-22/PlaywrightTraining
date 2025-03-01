///Objective of test:
/// go to site
/// log in
/// select Admin
// check the number of records displayed
// delete the record
/// verify that the record was deleted

// to run
//npx playwright test tests/18intro.spec.js --headed --project chromium
//npx playwright test tests/18intro.spec.js --ui  



// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 

test('test1', async ({ page }) => { 
    // opening the link, grabbing text for login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(3000);
    
    // work on copying and pasting login and password
    // copy and trim login
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
    
    //click Admin button
    //let adminButton = await page.locator("//div/ul/li[@class='oxd-main-menu-item-wrapper'][.='Admin']");
    await page.click("//div/ul/li[@class='oxd-main-menu-item-wrapper'][.='Admin']");
    await page.waitForTimeout(2000);

    // checkign the record found before deleting
    let recordFound = await page.locator('(//span[@class="oxd-text oxd-text--span"])[1]');
    let valueOfRecord = await recordFound.textContent();
    console.log(valueOfRecord);

    // deleting the first record
    let checkboxFirst = await page.locator("(//input[@type='checkbox'])[@value='1']");
    await checkboxFirst.click();
    await page.waitForTimeout(2000);
    await page.click("(//i[@class='oxd-icon bi-trash'])[1]");

    //checking the record number after deleting

    // assertion to confirm that found records before deleting is a bigger number
    


}


);

