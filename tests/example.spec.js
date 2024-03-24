// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://biletyna.pl/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /Bilety online - Kup bilet na dowolne Wydarzenie - biletyna.pl/
  );
});

test("Kontakt", async ({ page }) => {
  await page.goto("https://biletyna.pl/");
  await page.setViewportSize({ width: 1200, height: 800 });

  // Check the text 'Newsletter'
  await page.getByRole("button", { name: "ZAPISZ SIĘ NA NEWSLETTER" }).click();
});
