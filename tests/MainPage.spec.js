import { test, expect } from '@playwright/test';
const { MainPage } = require('./pages/MainPage');

test('Проверка элементов главной', async ({ page }) => {
    const mainPage = new MainPage(page);

    await page.goto('/');

    await expect(mainPage.Catalog).toBeVisible();
    await expect(mainPage.Cart).toBeVisible();
    await expect(mainPage.Wishlist).toBeVisible();
    await expect(mainPage.Signin).toBeVisible();
    await expect(mainPage.Notifications).toBeVisible();
    await expect(mainPage.Brands).toBeVisible();

    await expect(mainPage.Brands).toHaveText('Топ бренды');

    const cartHref = await mainPage.Cart.getAttribute('href');
    expect(cartHref).toBe('/cart');
    await expect(mainPage.Signin).toHaveText('Войти');
});
