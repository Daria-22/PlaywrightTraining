///log to site and verify thyat emails have gmail domain

//npx playwright test tests/15intro.spec.js --headed
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 


test('test1: verifying that gmail is in the emails', async ({ page }) => { 
    //opening the link, grabbing text for login
    await page.goto('https://the-internet.herokuapp.com/tables');
    //getting the array of values
    let emailsObject = await page.$$("//tr/td[3]");
    let emailsStrings = []
    for(let email of emailsObject) {
        let valueOfEmail = await email.textContent();
        emailsStrings.push(valueOfEmail);    
    }
    console.log(emailsStrings); /// check what we get from the object

    function verifyEmail (domain, array) {
        //array.some(element => element.includes(sometring))
        return array.some(element => element.includes(domain)); 
        }    
    
    let result = verifyEmail('gmmail.com', emailsStrings);

    console.log(`It's ${result} that the emails include this domain`);
    expect(result).toBeTruthy();
    await page.waitForTimeout(3000);
});
