

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

//    await page.locator('//label[@class="label-lowercase label-all"]').setChecked(false);
   await unclick(page,'//label[@class="label-lowercase label-all"]');
   await page.locator('//label[@class="label-numeric-register label-all"]').setChecked(false);
   await page.locator('//label[@class="label-character label-all"]').setChecked(false);
   await page.waitForTimeout(2000);
   await page.locator('#button-password').click();
   await page.waitForTimeout(1500);
   let generatedPswr2letters = await page.$$("//li[@class='password-letter']");
   let generatedPswr2 = [];
   for (let letter of generatedPswr2letters) {
    let letterValue = await letter.textContent();
    generatedPswr2.push(letterValue);
   };
   let passwordstring = generatedPswr2.join("");
   console.log(passwordstring);
   let reg2 = /^[A-Z]+$/
   // @ts-ignore
   let testpassword2 = reg2.test(passwordstring);
   expect(testpassword2).toBeTruthy();

   if (testpassword2){
    console.log("Correct password")
   } else{console.log("Inorrect password")};

   await page.waitForTimeout(2000);


    }
);

function unclick(page, locator){
     return  page.locator(locator).setChecked(false)
}

// await unclick(page, "label[for='check-lowercase']");




