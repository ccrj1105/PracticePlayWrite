import { Page, Locator } from "@playwright/test";

export class HomePage {
    private page: Page;
    private registerCVButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.registerCVButton = page.getByRole("button", { name: 'Registrar hoja de vida' });

    }

    async navigate() {
        await this.page.goto('');
    }

    async clickRegisterCVButton() {
        await this.registerCVButton.click();

    }
}
