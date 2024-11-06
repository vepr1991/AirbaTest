import { expect } from '@playwright/test';

export const requestLogin = async (request, data) => {
    // Используем `request` для отправки POST-запроса
    const response = await request.post('https://api.airba.kz/sso/api/v1/auth/signin/phone', {
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.6.0'
        }
    });

    expect(response.ok()).toBeTruthy();

    // Извлекаем и возвращаем токен из ответа
    const responseData = await response.json();
    return responseData.access_token;
};