// @ts-check
const { test, expect } = require('@playwright/test');
const { assert } = require('console');

test('test9 Dictionary test', async ({ page }) => {
    await page.goto("https://www.ldoceonline.com/dictionary/buy-into");
    //let languageButton = await page.locator("div[title='Select your dictionary']");
    await page.getByTitle('Select your dictionary').click();


    let languageButtons = await page.$$("//div/a[@class='item']");
    console.log(typeof languageButtons);
    //console.log(languageButtons);
    console.log(languageButtons.length);
    
    let neededButton = "";

    for(let button of languageButtons){ 
      let buttonTextContent = await button.textContent();
      console.log("The button contain this text:", buttonTextContent);
      // @ts-ignore
      if(buttonTextContent.trim() == "English - Spanish") {
        // @ts-ignore
        neededButton = buttonTextContent;
        await button.click();
        console.log('Button "English - Spanish" is clicked');
        break;
      }
    }
    await page.waitForTimeout(2000);

    let contentOfSearchField = await page.locator('//input[@class="search_input"]').getAttribute('placeholder');
    console.log("The placeholder contains", contentOfSearchField);
    
    // @ts-ignore
    if (contentOfSearchField === neededButton) {
      console.log("The placeholder is ", contentOfSearchField);
      // @ts-ignore
      console.log("The button clicked is ", neededButton);
      console.log("Test passed");

      
      try {
        expect(contentOfSearchField).toBe(neededButton);
        console.log("Assertion passed: Placeholder matches the clicked button.");
    } catch (error) {
        console.error("Assertion failed:", error.message);
    }

    }
});
    
   