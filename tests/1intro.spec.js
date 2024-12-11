// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 


test('assertions', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  let logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  let searchField = await page.locator("#small-searchterms");
  await expect(searchField).toBeEnabled();
 
  //let searchField = await page.locator("#small-searchterms");
  //await expect(searchField).toBeDisabled();

   let maleRadioButton = await page.locator("#gender-male");
   maleRadioButton.click();
   await expect(maleRadioButton).toBeChecked();
   //await expect(!maleRadioButton).toBeFalsy(); 

   let registerButton = await page.locator("#register-button");
   await expect(registerButton).toHaveAttribute("type","submit");
   await expect(registerButton).toHaveText("Register");
   await expect(registerButton).toContainText("Reg");

   let emailField = await page.locator("#Email");
   //await(emailField).fill("daria.k@gmail.com"); //full option
   await page.fill("#Email","daria.k@gmail.com"); //shortened option

   await expect(emailField).toHaveValue("daria.k@gmail.com");

   let monthSelector = await page.locator("select[name='DateOfBirthMonth'] option");
   await expect(monthSelector).toHaveCount(12);



   await page.waitForTimeout(3000);

  // always at the end
  

});
