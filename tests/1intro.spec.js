// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 


test('Assertions', async ({ page }) => {
  // page.goto(locator) - to open a page
  await page.goto('https://demo.nopcommerce.com/register');
  // expect(page).toHaveUrl(url) - to confirm url
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
 // expect(page).toHaveTitle(string of title) - to confirm the title of page
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

 // make a variable to store locator object for ".header-logo"
  let logoElement = await page.locator(".header-logo");
 // expect(locatorObject).toBeVisible() - to confirm it is visible for DOM, not necessariliy in view
  await expect(logoElement).toBeVisible();
  // save locator object to variable searchField 
  let searchField = await page.locator("#small-searchterms");
  // verify the search field is in enabled state
  await expect(searchField).toBeEnabled();
 
  //let searchField = await page.locator("#small-searchterms");
  //await expect(searchField).toBeDisabled();

   let maleRadioButton = await page.locator("#gender-male");
   maleRadioButton.click();
   // checkig that the button was checked
   await expect(maleRadioButton).toBeChecked();
   //await expect(!maleRadioButton).toBeFalsy(); 

   let registerButton = await page.locator("#register-button");
   await expect(registerButton).toHaveAttribute("type","submit");
   // exact match
   await expect(registerButton).toHaveText("Register");
   // not exact match
   await expect(registerButton).toContainText("Reg");

   let emailField = await page.locator("#Email");
   //await(emailField).fill("daria.k@gmail.com"); //full option
   await page.fill("#Email","daria.k@gmail.com"); //shortened option

   await expect(emailField).toHaveValue("daria.k@gmail.com");
   
   // not presen on site now
   //let monthSelector = await page.locator("select[name='DateOfBirthMonth'] option");
   //await expect(monthSelector).toHaveCount(12);



   await page.waitForTimeout(3000);

  // always at the end
  // npx playwright test tests/1intro.spec.spec.js  --headed --project chromium  
  

});


