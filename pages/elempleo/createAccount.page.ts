import { Page,Locator } from "@playwright/test";

export class CreateAccountPage{
    private page:Page;
    private namesInput:Locator;
    private lastNamesInput:Locator;
    private typeDocumentDropDown:Locator;
    private numberDocumentInput:Locator;
    private numberPhoneInput:Locator;

    constructor(page:Page){
        this.page=page;
        this.namesInput=page.getByPlaceholder('Nombres');
        this.lastNamesInput=page.getByPlaceholder('Apellidos');
        this.typeDocumentDropDown=page.locator('select[name="IdentificationType.SelectedIds"]');
        this.numberDocumentInput=page.locator("input[name='IdentificationNumber']");
        this.numberPhoneInput=page.locator("input[name='Phone']");
    }


    async navigate(){
        await this.page.goto('');
    }

    async createCV(){
        await this.namesInput.fill('21321');
        await this.lastNamesInput.fill('jfjsjfjsd');
    }
}
