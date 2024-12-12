

// @ts-check
 const { test, expect } = require('@playwright/test');
 const { assert } = require('console');
// //imported modules  
// //{} because imported part of modules 
// test('test1', async ({ page }) => {
// await page.goto('https://wise.jobs/jobs'); //open the site
// await page.getByRole('button', { name: 'Team ' }).click(); //click team
// await page.getByLabel('People').click();
// await page.getByLabel('Product').click();
// await page.getByRole('button', { name: 'Office ' }).click();
// await page.getByLabel('Tallin').click();
// await page.getByRole('button', { name: 'Apply' }).click();
// });

test('test2 job search Sydney', async ({ page }) => {
///part 1 open the site
await page.goto('https://wise.jobs/jobs');

/// part 2 - selecting roles
await page.getByRole('button', { name: 'Team ' }).click(); //click team
await page.getByLabel('People').click();
//get text from option People
let peopleContent = await page.getByLabel('People').textContent();
await page.getByLabel('Product').click(); 
//get test from option Product
let productContent = await page.getByLabel('Product').textContent();
console.log(peopleContent,productContent);

// @ts-ignore
let regexPeople = peopleContent.replace(/\(.*$/, "");
console.log(regexPeople);

// @ts-ignore
let regexProduct = productContent.replace(/\(.*$/, "");
console.log(regexProduct);


// if separately select getByLabel('People') and getByLabel("Product") - then the code works, ^^^
// if the below code is used - does not work WHY???

//let selectionOfChoices = await page.$$('//div[@class="optionfiltergroup category-opened"]/ul/li//span[@class="filter-text"]');
// for(let selection of selectionOfChoices){
// let selectionValue = await selection.textContent();
// //console.log("Text content:", selectionValue);
// // work well up to here
// await page.waitForTimeout(1500);
// let regexp = /^P/;
// // @ts-ignore
// if (selectionValue && regexp.test(selectionValue)){
// await selection.click();
// console.log("Roles selected",selectionValue); 

// work well up to here

//part3 - clicking the city/team
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Office' }).click();
await page.waitForTimeout(1500);

//await page.locator("span[aria-label='Tallinn'] span[class='filter-text']").click();
await page.getByLabel('Tallinn').click();
await page.getByRole('button', { name: 'Apply' }).click();
await page.waitForTimeout(2000);

//await page.locator('(//div[@class="Horizontal search-filters-widget__filter-list"]//ul/div[@class="apply-filters-btn-container"]//button[@class="apply-filters-btn btn"])[2]').click();

 
//  // @ts-ignore
// console.log("Count of found locators:", applyCitySelection.count());

// ///await page.waitForTimeout(1000); 
// ///await applyCitySelection.click(); 
// ///await page.waitForTimeout(1000); 

let citiesFound = await page.$$("//div[@class='attrax-vacancy-tile__location-freetext attrax-vacancy-tile__item']");
//console.log(typeof(citiesFound));
//await page.waitForTimeout(4000);
//console.log(citiesFound);

for (let city of citiesFound){
let cityValue = await city.textContent();
//console.log(cityValue);
const regex = /Tallinn/
if (cityValue && regex.test(cityValue)){
//console.log("The found result contains the correct city", regex);
}
}

let teamFound = await page.$$('//div[@class="attrax-vacancy-tile__option-team-valueset attrax-vacancy-tile__item-valueset"]//p[@class="attrax-vacancy-tile__item-value"]');
await page.waitForTimeout(4000);
for (let team of teamFound){
  // @ts-ignore
await page.waitForTimeout(1500);
  let valueTeam = await team.textContent();

  //creating a check
  let flag = true;
  //console.log(valueTeam);  
  // @ts-ignore
  //console.log(valueTeam.trim());

  if (!valueTeam.trim() == regexPeople || !valueTeam.trim() == regexProduct){
    flag = false;
    //console.log("The output matches the search"); 
  }
  await expect(flag).toBeTruthy(); //returns 
  //await expect(flag).toBeFalsy();
   
}

await page.waitForTimeout(4000);
}

);