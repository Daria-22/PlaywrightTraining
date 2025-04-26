
const { test, expect } = require("@playwright/test");

test('checkbox and radio', async({page}) => {

await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');



// >>>>> дополнить код здесь

const locator0 = "[for=radio-1]";

const locator1 = "[for=checkbox-4]";

const locator2 = "[for=checkbox-nested-3]";

const locator3 = "[for=checkbox-nested-4]";

// <<<<<</div>
  await page.locator(locator0).click();
  await page.locator(locator1).click();
  await page.locator(locator2).click();
  await page.locator(locator3).click();



await expect(page.locator(locator0)).toHaveClass(/ui-checkboxradio-checked/);

await expect(page.locator(locator1)).toHaveClass(/ui-checkboxradio-checked/);

await expect(page.locator(locator2)).toHaveClass(/ui-checkboxradio-checked/);

await expect(page.locator(locator3)).toHaveClass(/ui-checkboxradio-checked/);

});