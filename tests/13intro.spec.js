//this is the new file added to reporsitory, I want to get it to my local repository
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 
test('Defining the minimum number', async ({ page }) => { 
    await page.goto("https://www.roboform.com/password-generator");
    //starting value of input
    let inputArray = [400, 450, 500, 550, 600, 650, 700, 750, 800];
    //checking what is the starting number
    console.log(inputArray);
    //get locator of field for input
    let characterInputfield = await page.locator('#number-of-characters');
    
    for(let input of inputArray) {
    
        //fill the field with input
    await characterInputfield.fill(input.toString());
        //read what is in the field after input
    let charactersInField = await characterInputfield.inputValue();
        //check what is in the field
    console.log("Character from character field", charactersInField);
    await page.waitForTimeout(2000);
       //compare - if input and field after input are the same - increment the value of input
    if(Number(charactersInField) === Number(input)){
        console.log('Still can increase by 50')
       } else {
        console.log(charactersInField, 'Looks like this is the max allowed number of characters');
        break;
       }
    }
}
);