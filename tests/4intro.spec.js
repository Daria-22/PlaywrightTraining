// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //await page.click("#web-languageselect-ru");

  let adminCopied = await page.locator("//p[normalize-space()='Username : Admin']").textContent();
  console.log(adminCopied);

  let extractAdmin = adminCopied.replace("Username : ","");
  console.log(extractAdmin);

  let passwrdCopied = await page.locator("//p[normalize-space()='Password : admin123']").textContent();
  console.log(passwrdCopied);

  let extractPswrd = passwrdCopied.replace("Password : ", "");
  console.log(extractPswrd);

  let userNameField = await page.locator("input[placeholder='Username']");
    //fill in the field with "Admin" cutout from above
    await (userNameField).fill(extractAdmin);
    
    //get locator if "Password" field
    let passwordField = await page.locator("input[placeholder='Password']");
    //fill in the field with password cutout from above
    await (passwordField).fill(extractPswrd);

    //get locator of "Login" button
    let loginButton = await page.locator("button[type='submit']");
    await page.getByRole('button').click();

    let directoryLinkClick = await page.locator("//span[normalize-space()='Directory']").click();
    await page.waitForTimeout(2000);

    let currentNumberUsers = await page.locator("//span[@class='oxd-text oxd-text--span']").textContent();
    console.log(currentNumberUsers);

    let extractNumberUsers = currentNumberUsers.replace(/\D/g, "");
    console.log(extractNumberUsers);

    
    
    await elementHandle.scrollIntoViewIfNeeded();



    await page.waitForTimeout(3000);


}); 