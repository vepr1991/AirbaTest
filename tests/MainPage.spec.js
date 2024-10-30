import { test, expect } from '@playwright/test';
const { MainPage } = require('./pages/MainPage');

test('Проверка элементов главной', async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto('');
    await mainPage.CheckMainPage()
});