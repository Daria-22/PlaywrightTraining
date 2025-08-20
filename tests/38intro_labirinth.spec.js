const {test, expect} = require('@playwright/test'); // import only part of module
const fs = require ('fs'); // import all module

test ('Empty basket validation', async ({page}) =>
{
    // nagivating to the site
    let urlshop = 'https://www.labirint.ru'
    await page.goto(urlshop);
    
    // accepting cookies 
    let acceptcookies = '.cookie-policy__button.js-cookie-policy-agree'; 
    await page.locator(acceptcookies).click({timeout: 3000});
    
    // searching the non-existent title
    let searhfield = '#search-field';  // locator of search field
    let search = 'DariaKozak'; //the searched title string
    await page.locator(searhfield).fill(search, {timeout: 2000}); // filling the search text

    await page.getByText('Искать').click(); // clicking the search button to start the search

    await page.waitForTimeout(2000);
    const text = await page.locator("//h1[@class='index-top-title']").textContent();
    console.log('The is the test I see in h1:', text);

    // verification of received and expected result
    // the string from the site has spaces and carets, to ignore them use toHaveText()
    expect(page.locator("//h1[@class='index-top-title']")).toHaveText('Все, что мы нашли в Лабиринте по запросу «DariaKozak»',{ normalizeWhitespace: true, timeout: 2000, });
    
    // checking the shopping cart
    await page.locator("//span[@class='b-header-b-personal-e-icon-count-m-cart basket-in-cart-a j-cart-count']").click();
    await page.waitForTimeout(1500);
    await page.locator("//div[@class='g-alttext-middle g-alttext-grey ov-hidden']").screenshot({path:'screenshot.png'});
    await page.screenshot({path: 'screenshotfull.png', fullPage: true});

    expect(fs.existsSync('./screenshot.png')).toBe(true);
    expect(fs.existsSync('./screenshotfull.png')).toBe(true);
    
    expect(page.locator("(//span[@class='g-alttext-small g-alttext-grey g-alttext-head'])[1]")).toHaveText('Ваша корзина пуста. Почему?');

}); 



// npx playwright test tests/38intro.spec.js  --headed --project chromium 


// alternative :
// const { test, expect } = require("@playwright/test");

// test("Поиск по сайту. Пустая выдача", async ({ page }) => {
//   await page.goto("https://www.labirint.ru");
//   await page.locator(".cookie-policy button").click();
//   await page.locator("#search-field").fill("Эйяфьядлайёкюдль");
//   await page.locator("#search-field").press("Enter"); // I did not now about this option!

//   await expect(page.locator("h1").first()).toHaveText("Все, что мы нашли в Лабиринте по запросу «<вот тут ваш текст из шага 3>»)

//   await page.goto("https://www.labirint.ru/cart");
//   await expect(page.locator("#basket-step1-default .g-alttext-small.g-alttext-grey.g-alttext-head").first()).toHaveText("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?", {ignoreCase: true})
// });


// npx playwright test tests/38intro_labirinth.spec.js  --headed --project chromium 