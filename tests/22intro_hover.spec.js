const { test, expect } = require("@playwright/test");

test("get image caption", async ({ page }) => {
  // open the page
  await page.goto("http://the-internet.herokuapp.com/hovers");
  // locator of the page
  // div[@class='figure'] - locator of 3 images
  // (".figure").nth(1) - locator of the second image
  const image = page.locator(".figure").nth(1); //the second image
  console.log(typeof image)

  // >>>>> hovering over the element
  await image.hover();

  // verify that the hover works, on hover captions are displayed
  await expect(image.locator(".figcaption h5")).toBeVisible();
  // verify that the hover of user 2 shows text 'user 2'
  await expect(image.locator(".figcaption h5")).toHaveText('name: user2')

});
