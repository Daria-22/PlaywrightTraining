const { test, expect } = require("@playwright/test");

test("Поиск по сайту", async ({ page }) => {
  // открыть страницу https://www.labirint.ru 
  await page.goto("https://www.labirint.ru");
  // принять политику куки
  await page.locator(".cookie-policy button").click();
  // ввести в строку поиска javascript
  await page.locator("#search-field").fill("javascript");
  // нажать кнопку Enter
  await page.locator("#search-field").press("Enter");
  // запомнили первую карточку товара
  const card = page.locator(".product-card").first();
  // запомнили цену первого товара
  const price = (await card.locator(".product-card__price-current").textContent()).trim();
  // добавить товар в корзину
  await card.locator(".buy-link").click();

  await page.waitForTimeout(3000);
  // перейти в корзину
  await page.goto("https://www.labirint.ru/cart");
  // проверить, что итоговая цена такая же, как на странице результата
  await expect(page.locator(".b-dotted-im-e-val").last()).toHaveText(price);
});

// npx playwright test tests/37intro_labirinth.spec.js  --headed --project chromium 