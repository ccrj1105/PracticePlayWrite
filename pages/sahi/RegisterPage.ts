import { Page, Locator } from "@playwright/test";

export class RegisterPage {

    private userNameInput: Locator;
    private passwordInput: Locator;
    private repeatPasswordInput: Locator;
    private genderMaleCheck: Locator;
    private genderFemalecheck: Locator;
    private addressTextArea: Locator;
    private billingAddressTextArea: Locator;
    private stateDropDown: Locator;
    private iAgreeTermCheck: Locator;
    private buttonRegister: Locator;

    constructor(page: Page) {
        this.userNameInput = page.locator('#uid');
        this.passwordInput = page.locator('#pid');
        this.repeatPasswordInput = page.locator('#pid2');
        this.genderMaleCheck = page.locator('input[value="M"]');
        this.genderFemalecheck = page.locator('input[value="F"]');
        this.addressTextArea = page.locator('#taid');
        this.billingAddressTextArea = page.locator('#btaid');
        this.stateDropDown = page.locator('select[name="state"]');
        this.iAgreeTermCheck = page.locator('input[name="agree"]');
        this.buttonRegister = page.locator('input[value="Register"]');

    }

    async fillUserName(username: string) {
        await this.userNameInput.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async fillRepeatPassword(password: string) {
        await this.repeatPasswordInput.fill(password);
    }

    async selectGender(gender: 'M' | 'F') {
        if (gender === 'M') {
            await this.genderMaleCheck.click();
        } else {
            await this.genderFemalecheck.click();
        }
    }

    async fillAdress(address: string) {
        await this.addressTextArea.fill(address);
    }

    async fillBillingAddress(billingAddress: string) {
        await this.billingAddressTextArea.fill(billingAddress);
    }

    async selectState(state: string) {
        await this.stateDropDown.selectOption(state);
    }

    async clickAgree() {
        await this.iAgreeTermCheck.click();
    }

    async clickRegisterButton() {
        await this.buttonRegister.click();
    }

}
