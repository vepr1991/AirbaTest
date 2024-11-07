import { test, expect } from '@playwright/test';
const { MainPage } = require('./pages/MainPage');

test('Проверка элементов главной', async ({ page }) => {
    const mainPage = new MainPage(page);

    await page.goto('/');

    await Promise.all([
        expect(mainPage.Catalog).toBeVisible(),
        expect(mainPage.Cart).toBeVisible(),
        expect(mainPage.Wishlist).toBeVisible(),
        expect(mainPage.Signin).toBeVisible(),
        expect(mainPage.Notifications).toBeVisible(),
        expect(mainPage.ChangeCity).toHaveText('Алматы'),
        expect(mainPage.Brands).toHaveText('Топ бренды'),
    ]);
});
