

// @ts-check
const { test, expect } = require('@playwright/test');
const { assert } = require('console');

test('test1 Open the page', async ({ page }) => {
await page.goto("https://www.producthunt.com");
//5 locators of reviews number
//locator1
const locator1 = await page.locator("(//div[@class='text-14 font-semibold text-dark-gray leading-none text-gray-700'])[1]");
await page.waitForTimeout(3000);
// @ts-ignore
let number1 = parseInt(await locator1.textContent());
console.log(typeof(number1), number1);

//locator2
const locator2 = await page.locator("(//div[@class='text-14 font-semibold text-dark-gray leading-none text-gray-700'])[3]");
await page.waitForTimeout(3000);
// @ts-ignore
let number2 = parseInt(await locator2.textContent());
console.log(typeof(number2),number2);

//locator3
const locator3 = await page.locator("(//div[@class='text-14 font-semibold text-dark-gray leading-none text-gray-700'])[5]");
await page.waitForTimeout(3000);
// @ts-ignore
let number3 = parseInt(await locator3.textContent());
console.log(typeof(number3),number3);

//locator4
const locator4 = await page.locator("(//div[@class='text-14 font-semibold text-dark-gray leading-none text-gray-700'])[7]");
await page.waitForTimeout(3000);
// @ts-ignore
let number4 = parseInt(await locator4.textContent());
console.log(typeof(number4),number4);

//locator5
const locator5 = await page.locator("(//div[@class='text-14 font-semibold text-dark-gray leading-none text-gray-700'])[9]");
await page.waitForTimeout(3000);
// @ts-ignore
let number5 = parseInt(await locator5.textContent());
console.log(typeof(number5),number5);

// @ts-ignore
let sumOfReviews = number1 + number2 + number3 + number4 + number5;
// @ts-ignore
let averageReviews = sumOfReviews/5;

console.log("The average number of reviews on the site:", averageReviews);

}
);



