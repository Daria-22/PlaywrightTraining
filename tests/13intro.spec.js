// new code refactored
// @ts-check
const { test, expect } = require('@playwright/test');


//start with defining functions
// Function to navigate to the password generator page
async function navigateToPasswordGenerator(page,link) {
    await page.goto(link);
}


// Function to generate an array based on a start value, step size, and a maximum value
function generateInputArray(start, step, max) {
    const array = [];
    for (let value = start; value <= max; value += step) {
        array.push(value);
    }
    return array;
}

// Function to check the maximum allowed number of characters
async function checkMaxCharacters(page, start, step, max) {
    // Generate the input array dynamically, using function generateInputArray
    const inputArray = generateInputArray(start, step, max);
    
    // Get locator for the character input field
    const characterInputField = await page.locator('#number-of-characters');

    for (let input of inputArray) {
        // Fill the field with the current input
        await characterInputField.fill(input.toString());

        // Read and log the value in the input field after filling
        const charactersInField = await characterInputField.inputValue();
        console.log("Character from character field:", charactersInField);

        // Wait to simulate real user behavior
        await page.waitForTimeout(2000);

        // Compare input value with the field value
        if (Number(charactersInField) === Number(input)) {
            console.log('Still can increase by', step);
        } else {
            console.log(charactersInField, 'Looks like this is the max allowed number of characters');
            break;
        }
    }   
}

test('Defining the maximum number', async ({ page }) => {   
    
    await navigateToPasswordGenerator(page, "https://www.roboform.com/password-generator");
    const startValue = 100; // Starting value
    const stepValue = 100;   // Step value
    const maxValue = 600;   // Maximum value

    await checkMaxCharacters(page, startValue, stepValue, maxValue);

}
); 