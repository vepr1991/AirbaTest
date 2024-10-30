import { test, expect } from '@playwright/test';
import {CatalogPage} from "./pages/Catalog";

const { MainPage } = require('./pages/MainPage')

test('Поиск женская одежда', async ({ page }) => {
    const mainPage = new MainPage(page)
    const catalogPage = new CatalogPage(page)

    await mainPage.CheckSearch('женская одежда')
    await catalogPage.CheckSearchResultinPLP('женская одежда', page)
});
test('Поиск samsung', async ({ page})   => {
    const mainPage = new MainPage(page)
    const catalogPage = new CatalogPage(page)

    await mainPage.CheckSearch('samsung')
    await catalogPage.CheckSearchResultinPLP('samsung', page)
})