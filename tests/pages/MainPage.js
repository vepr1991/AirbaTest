const { expect} = require('@playwright/test');

exports.MainPage = class MainPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {

        this.page = page;
        this.Catalog = page.getByText('Каталог');
        this.Search = page.locator('[name="search_query"]');
        this.ChangeCity = page.getByText('Алматы');
        this.Wishlist = page.locator('[href="/wishlist"]');
        this.Cart = page.locator('[href="/cart"]');
        this.Signin = page.getByText('Войти');
        this.Notifications = page.getByText('Уведомления');
        this.Brands = page.getByText('Топ бренды')

    }

    async CheckSearch(product) {
        await this.page.goto('/')
        await this.Search.fill(product)
        await this.page.keyboard.press('Enter')


    }
}