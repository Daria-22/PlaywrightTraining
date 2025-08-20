
const {test, expect} = require ('@playwright/test');

test ('Verification of random choice', async ({page}) =>
{
    await page.goto('https://rus.auto24.ee/');
    let allCars = await page.locator("//ul[@class='create-columns make category-search']/li/a");
    console.log(await allCars.count());
   
    let count = await allCars.count();  
    // generate index in the array
    let randomCarIndex =  Math.floor(Math.random() * count);
    console.log('Random car index', randomCarIndex); // prints index
    
    //locator  like in locator('//ul[@class=\'create-columns make category-search\']/li').nth(5)
    
    // get the text of randomly selected car
    let target = allCars.nth(randomCarIndex);
    let selectedCar = await target.textContent();
    console.log(selectedCar);

    // accept cookie
    await page.locator("#onetrust-accept-btn-handler").click();
    await page.waitForTimeout(3000);

    // clicking the random car make
    await target.click();
    
    // clicking random car model
    let allRandomModels = await page.locator("//ul[@class='b-makesList -models']/li");
    await page.waitForTimeout(1500);
    let randomCarModelcount = await allRandomModels.count();
    console.log('This is how many models we found', randomCarModelcount);
    let randomCarModelIndex = Math.floor(Math.random() * randomCarModelcount); // Math.floor(Math.random() * somenumber)
    console.log('This is the index of random model', randomCarModelIndex);
    let targetModel = allRandomModels.nth(randomCarModelIndex);
    let selectedModel = await targetModel.textContent();
    console.log("Selected model is", selectedModel);
    await targetModel.click({timeout:4000});
    
    // confirming what car was selected in console
    let carMakeAndModel =  selectedCar + ' ' + selectedModel;
    console.log('Selected car make and model:', carMakeAndModel);
    
    
    // clicking 'See all"
    //let seeAll = await page.locator(`//div[@id='model-${selectedModel}']//a[@class='all'][contains(text(),'посмотреть все')]`);
    let seeAll  = await page.locator(`//h3[span[@class='name' and text()='${selectedModel}']]/following-sibling::ul[1]//a[contains(text(), 'посмотреть все')]`);
    await seeAll.click();
    
    // verifying all serach result contain the seelcted car
    // let allFoundCars = await page.locator("//div[@class='description']").all();
    // console.log("We found", allFoundCars.count());
    
    // let correctCarNames = false;
    // for (let carname in allFoundCars){
    //     let extractedname = carname.textContent();
    //     console.log(extractedname);
    // }
    await page.waitForTimeout(5000);
    
    }

);
