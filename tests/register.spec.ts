import { faker, Faker } from "@faker-js/faker";
import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

test('user can register', async ({ page }) => {

    const loginPage = new LoginPage(page);
    loginPage.navigate();
    await loginPage.clickRegisterLink();
    const registerPage = new RegisterPage(page);
    await registerPage.fillUserName(faker.internet.username());
    await registerPage.fillPassword(faker.internet.password());
    await registerPage.fillRepeatPassword(faker.internet.password());
    await registerPage.selectGender('M');
    await registerPage.fillAdress(faker.location.streetAddress());
    await registerPage.fillBillingAddress(faker.location.secondaryAddress());
    await registerPage.selectState('Kerala');
    await registerPage.clickAgree();

    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Registered Successfully');
        await dialog.accept();
    });

   await registerPage.clickRegisterButton();

});