import { test, expect } from '../fixture';
import { requestLogin } from './api/method';
import {MainPage} from "./pages/MainPage";

let token;

test.beforeEach(async ({ context, DefaultUser }) => {
    // Получаем токен через функцию логина, передавая `context.request`
    token = await requestLogin(context.request, DefaultUser);

    // Добавляем токен в куки для авторизации
    await context.addCookies([{
        name: 'auth_token',
        value: token,
        domain: 'airba.com', // Замените на ваш домен
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'Lax'
    }]);

    const page = await context.newPage();
    await page.goto('/');
});


test('Проверка профиля пользователя', async ({ page }) => {
    // Пример теста, использующего авторизацию через куки
    await page.goto('/profile')
    await expect(page.getByText('Профиль')).toBeVisible()
});
