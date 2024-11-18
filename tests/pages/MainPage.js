const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Локаторы
        this.CityModalClose = page.locator('//html/body/div[2]/div/div/button');
        this.Catalog = page.getByText('Каталог');
        this.Search = page.locator('[name="search_query"]');
        this.Wishlist = page.locator('[href="/wishlist"]');
        this.Cart = page.locator('[href="/cart"]');
        this.Signin = page.getByText('Войти');
        this.Notifications = page.getByText('Уведомления');
        this.Brands = page.getByText('Топ бренды');
    }

    async closeCityModal() {
        await this.CityModalClose.waitFor({ state: 'visible' });
        if (await this.CityModalClose.isVisible()) {
            await this.CityModalClose.click();
        }
    }

    async CheckSearch(product) {
        await this.page.goto('/');
        await this.Search.fill(product);
        await this.page.keyboard.press('Enter');
    }
};
