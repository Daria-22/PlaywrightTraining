// @ts-check, start of test
const { test, expect } = require('@playwright/test');

//starting test - indication of page address
test('verify that result is present - no result or selection of buses', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  
//get locator of wherefrom field
  let whereFrom = page.locator("#src");
  //fill the field with the strating point
  await (whereFrom).fill("Bangalore")
  //delay next step for 1 second to let it load
  await page.waitForTimeout(1000);

  //get xpath from hub, $$ means array of locators
  let fromLocators = await page.$$('//ul[@class="sc-dnqmqq dZhbJF"]/li/div/text[1]')
  //console.log(fromLocators);
  //$$ array of locators
  //let iteration through array of locators
  for (let from of fromLocators){
    let value = await from.textContent();
    console.log("The chosen starting point is", value);
    // @ts-ignore
    if (value.includes("Bangalore")){
        await from.click();
        break;
    } 
    }
  
  let destination = page.locator("#dest"); 
  await (destination).fill("Mumbai");
  //important to do waitForTimeout() as otherwise it's not working
  await page.waitForTimeout(1000);
  //unordered list with class "sc-dnqmqq dZhbJF", then go to "li" items, then
  //to div with class @class="sc-gZMcBi hviMLb"]/text[1]' and then find the first text tag
  //<div class="sc-gZMcBi hviMLb">
  //<text class="placeHolderMainText" style="" xpath="3">Kurla</text>
  //<text class="placeholderSubText"> Mumbai</text></div>
  let destinations = await page.$$('//ul[@class="sc-dnqmqq dZhbJF"]/li/div[@class="sc-gZMcBi hviMLb"]/text[1]');
  //now iterate through the array we got after filling "Mumbai", print 
  //every item
  for(let destination of destinations){
    let valueDestination = await destination.textContent();
    
    // @ts-ignore
    if(valueDestination == "Mumbai International Airport"){
     // @ts-ignore
     console.log("The chosen destination is:", valueDestination);
     await destination.click();  
     break;  
    }
  }
  //after these actions we clicked the correct cities and now can select the date




  //get the locator of calendar and click on it
  let date = await page.locator(".sc-cSHVUG.NyvQv.icon.icon-datev2"); 
  await (date).click();

  //!!!!!//get locator of forward button - ASK Vitalii to show HOW he gets this locator
  let forwardArrowButton = await page.locator("div[class='DayNavigator__CalendarHeader-qj8jdz-1 fxvMrr'] div:nth-child(3)");
  forwardArrowButton.click();
  await page.waitForTimeout(1000);
  forwardArrowButton.click();
  await page.waitForTimeout(1000);
  forwardArrowButton.click();

  let dateSelected = await page.locator('(//div[@class="DayTiles__CalendarDaysBlock-sc-1xum02u-0 isgDNj"]/span[text()="1"])[2]');
  //I just don't see this span!! I am able to see it only in Safari in console log <span class="DayTiles__CalendarDaysSpan-sc-1xum02u-1 fgdqFw">4</span>
  await page.waitForTimeout(3000);
  dateSelected.click();
  console.log("Selected date of trip:", dateSelected.textContent())
  
  let searchButton = await page.locator("#search_button");
  searchButton.click();
  await page.waitForTimeout(4000);

  let negativeResult = await page.locator("//div[@class='oops-wrapper new_oops_wrapper']");
  let negResultText = await negativeResult.textContent();
  
  await page.waitForTimeout(2000);
  if (negResultText == "Oops! No buses found.Oops! No buses found."||negResultText == "Oops! No buses found.Oops!"){
    console.log("No result test - pass")
  }
  console.log(negResultText);


  await page.waitForTimeout(5000);




 ///test 2 - for some result with dates near to now
  await page.goto('https://www.redbus.in/'); 
  await page.waitForTimeout(4000);
  await (whereFrom).fill("Mumbai");
  //delay next step for 1 second to let it load
  await page.waitForTimeout(1000);
  let fromLocators2 = await page.$$('//ul[@class="sc-dnqmqq dZhbJF"]/li/div/text[1]')
  for (let from2 of fromLocators2){
    let value2 = await from2.textContent();
    
    // @ts-ignore
    if (value2.includes("Mumbai International Airport")){
        await from2.click();
        await page.waitForTimeout(1000);
        console.log("The chosen starting point2 is", value2);
        await page.waitForTimeout(1000);
        break;
    } 
    }
    await page.click('(//div[@class="sc-gqjmRU giWxzf"])[2]');
    await page.waitForTimeout(1500);
    await page.fill("#dest", "Kurla");
    await page.waitForTimeout(1000);
    
    let destinations2 = await page.$$("//ul[@class='sc-dnqmqq dZhbJF']/li/div/text[1]");
    for(let destination2 of destinations2) {
      let valueDestination2 = await destination2.textContent();
      if(valueDestination2 == "Kurla West") {
        //await page.waitForTimeout(1500); failed with it
        await destination2.click();
        //await page.waitForTimeout(1500); - failed with it
        console.log('Destination2 is', valueDestination2)
        break;
      }
    }
    
    //date selection
    ///get the locator of back button - no idea how Vitali gets it and there was no explanation actually
    let backwardButton = await page.locator("(//div[@class='DayNavigator__IconBlock-qj8jdz-2 iZpveD'])[1]");
    
    let clickTimes = 5;
      do {
      backwardButton.click();
      clickTimes-=1;
          }
    while(clickTimes>0)
  

    //let backwardButton = await page.locator("//i[@class='sc-cSHVUG NyvQv icon icon-datev2']")
    
    //await page.waitForTimeout(1500);
    //click button submit 
   // let searchButton2 = await page.locator("search_button");
    //await page.waitForTimeout(1500);
    //searchButton2.click();
    
    
    await page.waitForTimeout(4000);

 //i[@class='sc-cSHVUG NyvQv icon icon-datev2'] 
 //copied from Selectorhub - copy relative xpath
 //body/section[@id='rh_main']/div[@id='mBWrapper']/main[@class='rh_content']/div[@id='homeV2-root']/div[@class='topSection']/div[@id='autoSuggestContainer']/div[@class='sc-hSdWYo cMISeA']/div[@class='sc-jWBwVP hyJWPH']/div[@id='onwardCal']/div[@class='labelCalendarContainer']/div[@class='sc-jzJRlG hrJoeL']/div[@class='DatePicker__CalendarContainer-sc-1kf43k8-0 jQCNYF']/div[@class='DatePicker__MainBlock-sc-1kf43k8-1 hHKFiR']/div[@class='DayNavigator__CalendarHeader-qj8jdz-1 fxvMrr']/div[1]//*[name()='svg']
 // cope absolute xpth 
 ///html[1]/body[1]/section[1]/div[2]/main[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]

}
 );