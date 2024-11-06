import { test, expect } from '../fixture';
import { MainPage } from "./pages/MainPage";

test.beforeEach(async ({ context, addAuthToken }) => {
    const page = await context.newPage();
    await page.goto('/');
});

test('Проверка профиля пользователя', async ({ page }) => {
    await page.goto('/profile');

    // Проверка на наличие текста "Профиль"
    await expect(page.getByText('Профиль')).toBeVisible();
    await expect(page.getByText('Личные данные')).toBeVisible()
    await expect(page.getByText('Мои адреса')).toBeVisible()
    await expect(page.getByText('Выйти')).toBeVisible()
});
