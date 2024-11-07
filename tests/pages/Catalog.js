const { expect, test} = require('@playwright/test');

exports.CatalogPage = class CatalogPage {
//По локаторам заведена задача https://jira.technodom.kz/browse/AMP-726
    constructor(page) {
        this.page = page;
        this.ProductsPLP = page.locator('//html/body/div[1]/div[2]/main/div/div/div[2]/article/div')
        this.ProductTitle = page.locator('//html/body/div[1]/div[2]/main/div[3]/div[2]/div/div[2]/div[3]/div/ul/li[1]/article/div[2]/a/h2')
        this.ProductPrice = page.locator('//html/body/div[1]/div[2]/main/div/div/div[2]/article/div/div/ul/li/article/div[2]/h3')
        this.PLPSorting = page.locator('//html/body/div[1]/div[2]/main/div/div/div[2]/article/div/div/div[1]/div[1]')
    }

    async CheckSearchResultinPLP(searchValue, page) {
        let titles = (await this.ProductTitle.allTextContents())
        for (let title of titles) {
            expect(title.toLowerCase().includes(searchValue)).toBeTruthy()
        }
    }
}