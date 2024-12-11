

// @ts-check
const { test, expect } = require('@playwright/test');
const { assert } = require('console');
//imported modules  
//{} because imported part of modules 
test('test', async ({ page }) => {
    await page.goto('https://wise.jobs/jobs');
    await page.getByRole('button', { name: 'Team ' }).click();
    await page.getByLabel('People').click();
    await page.getByLabel('Product').click();
    await page.getByRole('button', { name: 'Office ' }).click();
    await page.getByLabel('Tallinn').click();
    await page.getByRole('button', { name: 'Apply' }).click();
  });

test('test job search Tallinn', async ({ page }) => {
 
    ///part 1 - opening the site
  await page.goto('https://wise.jobs/jobs');
  await page.waitForTimeout(2000);

  //part3 - clicking the city
let startCitySearch = await page.locator("div[id='jobfilters'] div:nth-child(2) div:nth-child(1) h3:nth-child(1)");
await startCitySearch.click();

let cityTallin = await page.locator("//ul[@class='option-display-list']/li[@class='filter-option']/span[@aria-label='Tallinn']");
let valueOfCity = await cityTallin.textContent();
console.log("City selected", valueOfCity);
 // @ts-ignore
 await cityTallin.click(); ///can be passed as object
 // @ts-ignore
 //await cityTallin.click();
 // @ts-ignore
 //await city.click();

let applyCitySelection = await page.locator('(//div[@class="Horizontal search-filters-widget__filter-list"]//ul/div[@class="apply-filters-btn-container"]//button[@class="apply-filters-btn btn"])[2]');
 // @ts-ignore
console.log("Count of found locators:", applyCitySelection.count());

///await page.waitForTimeout(1000); 
///await applyCitySelection.click(); 
///await page.waitForTimeout(1000); 



/// part 2 - selecting roles
await page.locator('(//div[@class="option-type-header"])[1]').click(); 
await page.waitForTimeout(2000);
let selectionOfChoices = await page.$$('//div[@class="optionfiltergroup category-opened"]/ul/li//span[@class="filter-text"]');

if (selectionOfChoices.length === 0) {
  console.log('No elements found!');
  return;
}

for(let selection of selectionOfChoices){
      
let selectionValue = await selection.textContent();
  //console.log("Text content:", selectionValue);
  
let regexp = /^P/;
  // @ts-ignore
  
if (selectionValue && regexp.test(selectionValue)){
     console.log("Roles selected",selectionValue);
     await selection.click();
  }
}
 
let applyRoleSelection = await page.locator("ul[id='b8f6b27d-b7ba-46f4-03ef-08dbfa50089d'] button[class='apply-filters-btn btn']");
await applyRoleSelection.click();

await page.waitForTimeout(4000);


}

);