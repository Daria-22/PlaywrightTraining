// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 

//go to link
test('test2, clicking random elements', async ({ page }) => {
    console.log('Running test2, clicking random elements')
    await page.goto('https://www.hawaii.ee/en/products/summer/bikes');
//check the correctness of link 
    await expect(page).toHaveURL('https://www.hawaii.ee/en/products/summer/bikes');
//get the multitude of products on the page    
    let allProductsThumbs = await page.$$("//div[@class='product-thumb']");
//get the length of the object for getting random number later
    let amountOfFoundObjects = allProductsThumbs.length;
//debugging - understanding correct number is found
    console.log("Found on the page", amountOfFoundObjects, "thumnails of products");
//getting random index number for selecting a random element 
    let RandomElement = Math.floor(Math.random()* amountOfFoundObjects);
//debugging - undertanding that random number generated
    console.log("Index of random element is ", RandomElement);
    // @ts-ignore
//debugging - understanding that it is a number
//    console.log(typeof RandomElement);

//await page.locator(allProductsThumbs[RandomElement]); WRONG,do not use 'locator' here
    await allProductsThumbs[RandomElement].click(); // right
    
    await page.waitForTimeout(3000);
//after clicking - getting the three words which are shown for opened times
    let productHeadings = await page.$$("//div[@class='col-xs-3']");
//debuggin - how many objects did we get - should be three
//    console.log(productHeadings.length);

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
    //    console.log(newValueOfProductHeading);
    //appending each heading to an array
        headingsValuesFound.push(newValueOfProductHeading);
        }
    //debuggin - loggin all found headings
        console.log(headingsValuesFound);
    
      // Compare arrays as JSON strings - the simple way of comparing arrays - the received and the expected headings
      if (JSON.stringify(headingsValuesFound) === JSON.stringify(expectedHeadingsValues)) {
        console.log("Three headings of product card found, random click was successful");
    } else {
        console.log("Values don't match");
    }
    await page.waitForTimeout(3000);
    }
    );

test('test1, counting Classic and Countessa', async ({ page }) => {
console.log("Running test1, Counting Classic and Countessa")
    //going to link
    await page.goto("https://www.hawaii.ee/en/products/summer/bikes/balance-bikes");
//creating variable for array of bikes
    let allBikeHeadings = await page.$$("h4");
//starting counters of Countessa and Classic bikes    
    let countessaNumber = 0;
    let classicBike = 0;
//creating an empty array of all found headings of bikes
    let listOfFoundHeadings = [];
//starting iteration over all objects to extract text
    for(let heading of allBikeHeadings){
//using method .textContent() to get the text from every item of object
        let value = await heading.textContent(); // это выведет текст
        //console.log(value);
        // @ts-ignore
    //adding items to the empty array of found headings
        listOfFoundHeadings.push(value);
        }
//use regex to define the search string - word and i means irrelevant of register
    let re1 = /CLASSIC/i
    let re2 = /CONTESSA/i
// iteration through found objects if re1 found - add to counter of Classic, if re2 found - add to counter of countessa
for (let object of listOfFoundHeadings){
    // @ts-ignore
    if (re1.test(object)){
        classicBike+=1;
    };
    // @ts-ignore
    if(re2.test(object)){
        countessaNumber+=1
    }
} 
await page.waitForTimeout(3000);
console.log("Number of Countessa bike: ", countessaNumber);
console.log("Number of Classic bike: ", classicBike);                

    });

test('test0, finding average of discounted goods', async({page}) => {
await page.goto("https://www.hawaii.ee/en/products/summer/bikes/balance-bikes");
let listOfPrices = [];
let prices = await page.$$("[class$='price win']");


for (let price of prices){
    // @ts-ignore
    let valueOfPrice = (await price.textContent()).trim();
    // @ts-ignore
     console.log(valueOfPrice);
     listOfPrices.push(parseInt(valueOfPrice));  }
     
     console.log(listOfPrices);

let sumOfdiscounts = 0;
for(let price of listOfPrices){
    sumOfdiscounts += price}

console.log(sumOfdiscounts);


});