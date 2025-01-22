//this is the new file added to reporsitory, I want to get it to my local repository
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 
test('Defining the minimum number', async ({ page }) => { 
    await page.goto("https://www.roboform.com/password-generator");
    //starting value of input
    let startingNumber = 400;
    //checking what is the starting number
    console.log(startingNumber);
    //get locator of field for input
    let characterInputfield = await page.locator('#symbols-character');
    //fill the field with input
    await characterInputfield.fill(startingNumber.toString());
    //read what is in the field after input
    let charactersInField = await characterInputfield.inputValue();
    //check what is in the field
    console.log("Character from character field", charactersInField);
    //compare - if input and field after input are the same - increment the value of input
    if(Number(charactersInField) === Number(startingNumber)){
        startingNumber += 50;
       } else {
        console.log('We need to decrease the input')
       }
       console.log(startingNumber);
    }
    
);
