///hotels filters

const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 


test('test1: verifying that rating 7+ was selected and getting 4 stars of found hotels', async ({ page }) => {
    await page.goto('https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-03-17/2025-03-19/2adults;map?ucs=1hbg50o&sort=rank_a');
    //accept the cookies
    await page.click('//div[text()="Accept all"]');
    console.log('Clicked Accept cookies')
     //click review score
    await page.click("//div/span[.='Review score']");
    console.log("Clicked review score");
   //select rating 7 and above
    await page.click("//div[text()='7+']");
    //click button 'apply'
    await page.click("//div[text()='Apply']");
    //wait 2sec
    await page.waitForTimeout(2000);
    
   
    ///grab all ratings
    let allRatings = await page.$$('//div[@class="opAh-rating-review-score"]');
    //make a flag, asserting that rating is correct
    let correctRating = true;
    for(let rating of allRatings){
        let valueOfRating = await rating.textContent();
        if(Number(valueOfRating) < 7) {
            correctRating = false; //if value of rating below 7, the flag becomes false
        }
    }
    expect(correctRating).toBeTruthy(); //assertion - value of flag should be truthy, >7
    //expect(correctRating).toBeFalsy();
    await page.waitForTimeout(2000);
});

test('test2: verifying that we get  4 stars', async ({ page }) => {
    await page.goto('https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-03-17/2025-03-19/2adults;map?ucs=1hbg50o&sort=rank_a');
    
    //accept the cookies
    await page.click('//div[text()="Accept all"]');
    
    //click the stars selection 4+
    await page.click("//div[contains(text(),'Hotel class')]");
     //clicking 4 stars
     await page.click("//div[@class='HNDy-label'][normalize-space()='4']");
     //grabbing the array of divisions where stars are,their role is img
    let divsOfStars = await page.$$("//div[@role='img']");

    //iteration on array with stars and getting spans in which stars are
    for (let div of divsOfStars) {
  
    let spansSvgStars = await div.$$('//span[@class="O3Yc-star O3Yc-mod-black-active"]'); // Get all span elements inside the div
    console.log('Array of stars contains', divsOfStars.length)
    let numberOfStars = spansSvgStars.length;
    console.log(`Stars in this div: ${numberOfStars}`); // Count the spans
    
    expect(spansSvgStars.length).toBeGreaterThan(3);
}
});