

// @ts-check
const { test, expect } = require('@playwright/test');

test('test1 Password Generation, checking length of password vs actual password', async ({ page }) => {
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

   await page.locator('//label[@class="label-lowercase label-all"]').setChecked(false);
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
   console.log("Generated password only capital letters: ", passwordstring);
   let reg2 = /^[A-Z]+$/
   // @ts-ignore
   let testpassword2 = reg2.test(passwordstring);
   expect(testpassword2).toBeTruthy();

   if (testpassword2){
    console.log("Checked that password contains capital letters. Correct password")
   } else{console.log("Inorrect password")};

   await page.waitForTimeout(2000);
    }
);

// function unclick(page, locator){
//      return  page.locator(locator).setChecked(false)
// }

test('test2 Password Generation, working woth special characters', async ({ page }) => {
    await page.goto("https://www.roboform.com/password-generator");
    await page.locator("label[for='check-uppercase']").setChecked(false);
    await page.locator('//label[@class="label-lowercase label-all"]').setChecked(false);
    await page.locator('//label[@class="label-numeric-register label-all"]').setChecked(false);
    
    await page.waitForTimeout(2000);
    //selecting three random characters
    let specialArr = ["-", "!", ")", "+", "@", "$", "%"];
    

    let newArray = []
    let countOfItems = 0
    do {
        let itemtoAdd = specialArr[Math.floor(Math.random() * specialArr.length)];
        
            if(!newArray.includes(itemtoAdd)) {
                newArray.push(itemtoAdd);}
        }
    while (newArray.length < 3);

    console.log(newArray);
    let charactersToInput = newArray.join("");
    console.log("We input these characters", charactersToInput);

    let characterInputfield = await page.locator('#symbols-character');
    await characterInputfield.fill(charactersToInput);
    await page.waitForTimeout(3000);
    let charactersInputNew = await characterInputfield.inputValue();
    console.log("Character from character field", charactersInputNew);

   if(charactersToInput === charactersInputNew){
    console.log("Well done");
   };

 

})
    test.only('test3 Password Generation, verifying limit of input characters', async ({ page }) => {
        await page.goto("https://www.roboform.com/password-generator");
        //found locator of the input field
        let fieldNumberCharacters = await page.locator('#number-of-characters');
        //assigned value for input
    
        let enteredValue = '513';
        //filled the field with the assigned value
        await fieldNumberCharacters.fill(enteredValue);
        //read the value of the field after input
        let filledNumberCharacters = await fieldNumberCharacters.inputValue();
        //debug - detenmining the type of data
        console.log(`${filledNumberCharacters} is displayed characters, their data type is ${typeof filledNumberCharacters}`);
        console.log(`${enteredValue} is the entered characters, their data type is ${typeof enteredValue}`);
        
        //use expect(received).toBeLess(entered)
        // @ts-ignore
        expect( parseInt(filledNumberCharacters)).toBeLessThan(Number(enteredValue));

    
    }

);

;