//this is the new file added to reporsitory, I want to get it to my local repository
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 


test('Counting the number of links', async ({ page }) => { 
    await page.goto("https://news.ycombinator.com/jobs");
    let allNeededLinks = await page.$$("//a/span[@class='sitestr']");
    
    let counter = 0;

    for (let item of allNeededLinks) {
        let valueOfItem = await item.textContent(); 
        let searchedString =  'ycombinator.com';
        
        if (valueOfItem === searchedString) {
            counter ++;
        } 
    }
    console.log(counter);
}


);

test.only('Sorting type1', async ({ page }) => {
    await page.goto("https://news.ycombinator.com/newest");
    let foundAttributes = [];

    for(let numberOfclicks = 0; numberOfclicks <4; numberOfclicks ++) {
    
    let datelocators = await page.$$("span[class='age']");
    
    for( let datelocator of datelocators) {  
      let atributeValue =  await datelocator.getAttribute('title');
      //console.log(atributeValue); 
      foundAttributes.push(atributeValue);
      if (foundAttributes.length >= 100) {
        break;
      }
    }
    
   await page.locator(".morelink").click();
}
console.log(foundAttributes.length);
console.log(foundAttributes);
let foundAttributesClean = [];

for (let attribute of foundAttributes){ 
  const result = attribute.replace(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}).*/, "$1");
  foundAttributesClean.push(result);
}
console.log(foundAttributesClean);

// let sortedArray = foundAttributesClean.sort();
// console.log(sortedArray);

let sorted = true;

for (let i=1; i < foundAttributesClean.length; i++){
 let previousValue = foundAttributesClean[i-1];
 console.log(previousValue);
 console.log(typeof previousValue);
 let currentValue = foundAttributesClean[i];
 
 console.log(currentValue);
 console.log(typeof currentValue);
 if (currentValue < previousValue){
  sorted = false;
  break;
 }
 expect(sorted).toBeTruthy();
}
}
);

