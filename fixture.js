import { test as baseTest, expect, request } from "@playwright/test";

export const test = baseTest.extend({
    DefaultUser: async ({}, use) => {
        const user = { phone: "77774889937", password: "Qq123456" };
        await use(user);
    }
});

export { expect, request };
