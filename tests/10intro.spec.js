// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 

//go to link
test('clicking random elements', async ({ page }) => {
    await page.goto('https://www.hawaii.ee/en/products/summer/bikes');
//check the correctness of link 
    await expect(page).toHaveURL('https://www.hawaii.ee/en/products/summer/bikes');
//get the multitude of products on the page    
    let allProductsThumbs = await page.$$("//div[@class='product-thumb']");
//get the length of the object for getting random number later
    let amountOfFoundObjects = allProductsThumbs.length;
//debugging - understanding correct number is found
    console.log(amountOfFoundObjects);
//getting random index number for selecting a random element 
    let RandomElement = Math.floor(Math.random()* amountOfFoundObjects);
//debugging - undertanding that random number generated
    console.log(RandomElement);
    // @ts-ignore
//debugging - understanding that it is a number
    console.log(typeof RandomElement);

//await page.locator(allProductsThumbs[RandomElement]); WRONG
    await allProductsThumbs[RandomElement].click(); // right
    
    await page.waitForTimeout(3000);
//after clicking - getting the three words which are shown for opened times
    let productHeadings = await page.$$("//div[@class='col-xs-3']");
//debuggin - how many objects did we get - should be three
    console.log(productHeadings.length);

//empty array for adding found headings
    let headingsValuesFound = [];
//expected array of headings
    let expectedHeadingsValues = ['Brand','Product Code','Tags' ];
//iteration through found headings and trimming them of : and spaces
    for (let i = 0; i < productHeadings.length; i++)
        {
        let valueOfProductHeading = await productHeadings[i].textContent();
        // @ts-ignore
        let newValueOfProductHeading = valueOfProductHeading.replace(":","").trim();
    //debugging - logging each received heading
        console.log(newValueOfProductHeading);
    //appending each heading to an array
        headingsValuesFound.push(newValueOfProductHeading);
        }
    //debuggin - loggin all found headings
        console.log(headingsValuesFound);
    
      // Compare arrays as JSON strings - the simple way of comparing arrays - the received and the expected headings
      if (JSON.stringify(headingsValuesFound) === JSON.stringify(expectedHeadingsValues)) {
        console.log("Pass");
    } else {
        console.log("Values don't match");
    }
    
    }
    );

