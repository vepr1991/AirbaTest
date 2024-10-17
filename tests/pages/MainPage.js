const { expect, test} = require('@playwright/test');

exports.MainPage = class MainPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {

        this.page = page;
        this.CatalogButton = page.getByText('Каталог');
        this.SearchInput = page.locator('[name="search_query"]');
        this.ChangeCity = page.getByText('Алматы');
        this.WishlistButton = page.locator('[href="/wishlist"]');
        this.CartButton = page.locator('[href="/cart"]');
        this.ProfileButton = page.getByText('Войти');
        this.NotificationsButton = page.getByText('Уведомления');

    }
    //проверки
    async CheckMainPage() {
        await expect(this.CatalogButton).toBeVisible()
        await expect(this.CartButton).toBeVisible()
        await expect(this.WishlistButton).toBeVisible()
        await expect(this.ProfileButton).toBeVisible()
        await expect(this.NotificationsButton).toBeVisible()


    }
}