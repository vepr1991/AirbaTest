import { test as baseTest, expect, request } from "@playwright/test";
import { requestLogin } from "./tests/api/method";

export const test = baseTest.extend({
    // Пользователь по умолчанию
    DefaultUser: async ({}, use) => {
        const user = { phone: "77774889937", password: "Qq123456" };
        await use(user);
    },
    // Добавление токена в куки перед тестами
    addAuthToken: async ({ context, DefaultUser }, use) => {
        const token = await requestLogin(context.request, DefaultUser);

        await context.addCookies([{
            name: 'auth_token',
            value: token,
            domain: 'airba.kz',
            path: '/',
        }]);

        await use(token);
    },
    // Метод для закрытия модального окна
    closeCityModal: async ({ page }, use) => {

        const CityModalClose = page.locator('//html/body/div[2]/div/div/button');
        await CityModalClose.waitFor({ state: 'visible' });
        await CityModalClose.click();
        await use();
    }
});

export { expect, request };
