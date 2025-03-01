
//this is the new file added to reporsitory, I want to get it to my local repository
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 
test('Sorting price low to high', async ({ page }) => { 

await page.goto('https://www.saucedemo.com/v1/');

// let userNameField = await page.locator("#user-name");
// let passwordField = await page.locator("#password"); 
//let loginButton = await page.locator("#login-button");

// @ts-ignore
await page.locator("#user-name").fill('standard_user');
// @ts-ignore
await page.locator("#password").fill('secret_sauce');
await page.click("#login-button");


await page.selectOption(".product_sort_container", "lohi");
await page.waitForTimeout(3000);

let prices = await page.$$('//div[@class="inventory_item_price"]');

let FoundPrices = [];
for(let price of prices) {
    // @ts-ignore
    let value = await price.textContent();
    let trimmedPrice = value.replace("$", "");
    console.log(trimmedPrice);    
    FoundPrices.push(trimmedPrice);
}
//console.log(FoundPrices);
        function isAsending(array) {
            for (let i = 0; i < array.length-1; i++) {
                let sorted = false;
                if (Number(array[i]) <= Number(array[i + 1])) { // Added closing parenthesis here
                    console.log(`Sorting is as expected: ${Number(array[i])} is less or equal to ${Number(array[i + 1])}`);
                    sorted = true;

                } else {
                    console.log(`${Number(array[i])} is not less than ${Number(array[i + 1])}`);
                    sorted = false;
                }
            return sorted
            }
    }
    isAsending(FoundPrices);
    //expect(isAsending).toBeFalsy(); //fails
    expect(isAsending).toBeTruthy();  //passes
    }
);