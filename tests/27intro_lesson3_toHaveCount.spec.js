const { test, expect } = require("@playwright/test");



test("check elements count", async ({ page }) => {
  
  await page.goto("https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=120");

  // explanation for locator: list element with class s-item (. means class) and with attribute data-gr4
  //await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(120); WORKS, the syntaxt is simple  element.class[attribut]
  // await expect(page.locator("//li[@class='s-item'][data-gr4]")).toHaveCount(120);  DOES NOT WORK
  await expect(page.locator("//li[contains(@class, 's-item')][@data-gr4]")).toHaveCount(120); // WORKS

  await page.goto("https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=240");
  
 
  await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(240);
  
});