import { expect } from '@playwright/test';

export const requestLogin = async (request, data) => {

    const response = await request.post('https://api.airba.kz/sso/api/v1/auth/signin/phone', {
        data: JSON.stringify(data),
    });

    expect(response.ok()).toBeTruthy();

    // Извлекаем и возвращаем токен из ответа
    const responseData = await response.json();
    return responseData.access_token;
};
