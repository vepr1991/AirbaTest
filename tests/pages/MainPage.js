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
        this.Profile = page.getByText('Войти');
        this.Notifications = page.getByText('Уведомления');
        this.Footer = page.locator('//html/body/div[1]/div[2]/div[3]/div[2]/div')

    }
    async CheckMainPage() {
        await expect(this.Catalog).toBeVisible()
        await expect(this.Cart).toBeVisible()
        await expect(this.Wishlist).toBeVisible()
        await expect(this.Profile).toBeVisible()
        await expect(this.Notifications).toBeVisible()
        await expect(this.ChangeCity).toHaveText('Алматы')

    }

    async CheckSearch(product) {
        await this.page.goto('/')
        await this.Search.fill(product)
        await this.page.keyboard.press('Enter', {delay:2000})
    }
}