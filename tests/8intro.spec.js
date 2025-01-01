

// @ts-check
const { test, expect } = require('@playwright/test');

test('test1 Passwrod', async ({ page }) => {
    await page.goto("https://www.roboform.com/password-generator");
    //get the value of the characters which should be used in password
    let numberPswrChar = await page.locator('#number-of-characters').inputValue();
    //logging the target number
    console.log("The number of characters which should be used: ", numberPswrChar);

await page.waitForTimeout(2000);
   //getting what was generated in the genertor field
   let generatedPswr = await page.locator('//div[@class="text-password strong-color"]').textContent();
   //printing out what was generated
   console.log("Generated password is:", generatedPswr);
   // @ts-ignore
   //getting length of the password and logging it
   let lengthGenPswr = generatedPswr.length;
   console.log("The length of the generated password with spaces is:", lengthGenPswr);
   //getting rid of spaces
   let trimmedPswrd = generatedPswr?.trim();
   // @ts-ignore
   //logging the length of password without spaces
   console.log("The length of generted password without spaces is:", trimmedPswrd.length);
   console.log("The generated password is: ", trimmedPswrd);

    }
);




