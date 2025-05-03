const { test, expect } = require("@playwright/test");

const fs = require("fs");  // module for file system

test("скриншот всей страницы", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/sampleapp");

  // >>>>> дополнить код здесь
  await page.locator("body").screenshot({path:'body.png'}); // saves the file in the root directory of tests
  await page.locator("section").screenshot({path:'container.png'}); // saves the file in the root directory of tests
  // <<<<<

  expect(fs.existsSync("body.png")).toBe(true);
  expect(fs.existsSync("container.png")).toBe(true);
});