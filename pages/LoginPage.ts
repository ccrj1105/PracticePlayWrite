import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage:Locator;
    private linkRegister:Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="user"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[type="submit"]');
        this.errorMessage = page.locator('#errorMessage');
        this.linkRegister=page.getByRole('link',{name:'Register'});
        
    }

    async navigate() {
        await this.page.goto('');
    }

    async login(username: string,password:string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();    
    }

    getErrorMessage(){
        return this.errorMessage;
    }

    async clickRegisterLink(){
        await this.linkRegister.click();
    }


}