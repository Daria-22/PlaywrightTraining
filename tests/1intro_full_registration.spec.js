// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules of test and expect from playwright 
//{} - because imported part of modules 
import { faker } from '@faker-js/faker';
// npm install @faker-js/faker --save-dev for installing 

test('Navigate to page, verify title and url', async ({ page }) => {
    // go to page and register a user
    // later log in as creat4ed user
    await page.goto("https://demo.nopcommerce.com/register");
    await page.waitForTimeout(2500);
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
    console.log('Title and url tested');
});
test("Positive: enter male user's details, register, verify notification is displayed", async ({page})  =>
{
    
    await page.goto("https://demo.nopcommerce.com/register");
    // locators and inputs
    let radiobuttonMale = await page.locator('#gender-male');
    let firstNamefield = await page.locator('//input[@id="FirstName"]');
    let firstNametoFill = 'Abracadabra';
    let lastNameField = await page.locator('//input[@id="LastName"]');
    let lastNameTofill = 'MagicInTheAir'
    let emailField = await page.locator('//input[@id="Email"]');
    let emailToFill = faker.internet.email();
    let companyField = await page.locator("//input[@id='Company']");
    let inputCompany = 'MinistryOfMagic';
    let tickNewsLetter = await page.locator('#Newsletter');
    let passwordToFill = faker.internet.password({ length: 63, memorable: true, pattern: /[A-Z][a-z][0-9][*^%$#]/, prefix: `${firstNametoFill}` }) 
    let passwordField = await page.locator('#Password');
    let confirmPassfordfield = await page.locator("#ConfirmPassword");
    let registerButton = await page.locator("#register-button");
    let registrationNotification = await page.locator("//div[@class='result']");


    // click radio button gender
    radiobuttonMale.click();
    await page.waitForTimeout(2500);
    expect(radiobuttonMale).toBeChecked();
    await page.waitForTimeout(2500);
    console.log('Gender radio button checked');

    // fill in first name
    await firstNamefield.fill(firstNametoFill);
    await page.waitForTimeout(2500);
    //expect(firstNamefield).toBeFocused();
    //await page.waitForTimeout(4000);

    let textInFirstName =  await firstNamefield.inputValue();; // does not work??
    console.log("This is text in first name:", textInFirstName); // empty??
    await page.waitForTimeout(2500);
    console.log('First name filled');

    // fill in last name
    await lastNameField.fill(lastNameTofill);
    await page.waitForTimeout(2500);
    console.log('Last name filled');

    // fill in email
    await emailField.fill(emailToFill);
    await page.waitForTimeout(2500);
    console.log('Email filled');

    // fill in company
    await companyField.fill(inputCompany);
    await page.waitForTimeout(2500);
    console.log('Company input filled');

    // unticking checkbox
    await tickNewsLetter.click();
    await page.waitForTimeout(2500);
    expect(tickNewsLetter).not.toBeChecked();
    console.log("Unticked the box and confirmed it is not ticked");

    // fillling in password
    await passwordField.fill(passwordToFill);
    await page.waitForTimeout(2500);

    //confirming the password
    await confirmPassfordfield.fill(passwordToFill);
    await page.waitForTimeout(2500);

    //click 'Register'
    registerButton.click();
    await page.waitForTimeout(2500);
    console.log('Registration button clicked');

    // confirming notification is displayed
    let textOfNotification = await registrationNotification.textContent();
    console.log(textOfNotification);
    expect(textOfNotification).toBe('Your registration completed');

});

test ("Creation of account with repeated email results in failure to register", async ({page}) => {

});

test("Negative: enter wrong data, verify notification about right data is displayed", async ({page}) => {

})

// npx playwright test tests/1intro_full_registration.spec.js  --headed --project chromium