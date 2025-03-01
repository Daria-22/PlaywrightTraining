//npx playwright test tests/15intro.spec.js --headed
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 


test('test1', async ({ page }) => { 
    //opening the link, grabbing text for login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(3000);
    
    let grabLogin = await page.locator("//p[@class='oxd-text oxd-text--p'][1]");
    let textValueGrabLogin = await grabLogin.textContent();
    //console.log(textValueGrabLogin);
    let theLoginTrimmed = textValueGrabLogin?.replace('Username : ','');
    console.log(theLoginTrimmed);

    let grabPassword = await page.locator("//p[@class='oxd-text oxd-text--p'][2]");
    let textValueGrabPassword = await grabPassword.textContent();
    //console.log(textValueGrabPassword);
    let thePasswordTrimmed = textValueGrabPassword?.replace('Password : ','');
    console.log(thePasswordTrimmed);

//     //getting locators for login and password fields, entering them
   //let userNameField = await page.locator('(//div/input[@class="oxd-input oxd-input--active"])[1]');
    let userNameField = await page.locator("input[placeholder='username']")
    //let passwordField = await page.locator('(//div/input[@class="oxd-input oxd-input--active"])[2]');
    let passwordField = await page.locator("input[placeholder='password']")
    // @ts-ignore
    await userNameField.fill(theLoginTrimmed);
    await page.waitForTimeout(2000);
    
    let inputNamecheck = await userNameField.inputValue();
    console.log(inputNamecheck);

//      @ts-ignore
    passwordField.fill(thePasswordTrimmed);
    await page.waitForTimeout(2000);

    await page.getByRole('button').click();
    await page.waitForTimeout(3000);
//click admin button
    let adminButton = await page.locator("//ul//li[@class='oxd-main-menu-item-wrapper'][1]")
    adminButton.click();
//clicking sorting by username
    await page.locator('(//div/i[@class="oxd-icon bi-sort-alpha-down oxd-icon-button__icon oxd-table-header-sort-icon"][1])[1]').click();
    //clicking sorting in descending order
    await page.locator('(//li[@class="oxd-table-header-sort-dropdown-item"][2])[1]').click();
    await page.waitForTimeout(4000);
    
    //get the array of sorted items
    let sortedListNames = await page.$$('//div[@class="oxd-table-cell oxd-padding-cell"][2]');
    
    //create new array to put here strings of names
    let newListSorted = [];
    // @ts-ignore
    for (let nameItem of sortedListNames){
      // @ts-ignore
      let nameValue = await nameItem.textContent();
      //console.log(nameValue);
      newListSorted.push(nameValue);
    }
    console.log(newListSorted);

    let sorted = true;
    for (let i = 1; i < newListSorted.length; i++) {
    // @ts-ignore
    //currentstring.localeCompare(comparedString)
    // if 0 is returned - the same, newListSorted[i] = newListSorted[i-1]
    // if 1 is returned - current is after: newListSorted[i] > newListSorted[i-1]
    //  if (-1) is returned - then current string is before the compared string: newListSorted[i] < newListSorted[i-1]
    if (newListSorted[i].localeCompare(newListSorted[i-1]) >= 0) { 
    sorted = false;
    break; 
    }

    expect(sorted).toBeTruthy();
    //expect(sorted).toBeFalsy();
}

//deleting a record after sorting
let recordFound = await page.locator("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] span[class='oxd-text oxd-text--span']");
let valueOfRecordFound = await recordFound.textContent();
console.log(valueOfRecordFound);// logs (7) Records found
///extract number from Record founf
const numberExtracted = parseInt(valueOfRecordFound, 10);
console.log(numberExtracted); // Output: 7 (as a number)
    await page.waitForTimeout(4000);
    

}


);

