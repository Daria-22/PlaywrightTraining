

// @ts-check
const { test, expect } = require('@playwright/test');

test('test1 Open the page', async ({ page }) => {
    await page.goto("https://www.producthunt.com");

    // Get all buttons matching the selector
    const allButtons = await page.$$('//div[@class="text-14 font-semibold text-dark-gray leading-none text-gray-700"]');
    
    let collectedValues = [];
    let count = 0; //track how many buttons we've collected

    // Iterate through buttons starting from index 0
    for (let i = 0; i < allButtons.length && count < 5; i += 2) {
        let valueOfButton = parseInt(await allButtons[i].textContent()); // Get text content
        console.log(valueOfButton); // Log the value
        console.log(typeof(valueOfButton));
        collectedValues.push(valueOfButton); // Add to collected values
        count++; // Increment the counter
    }
    console.log('First 5 Odd Buttons Starting from Index 0:', collectedValues);
    let sum = 0
        for(let i = 0; i < collectedValues.length; i++){
        sum += collectedValues[i];
        console.log(collectedValues[i])
        console.log(sum);
    }
    let averageReviews = sum/collectedValues.length;
    console.log("Average number of reviews:", averageReviews);
    }
);




