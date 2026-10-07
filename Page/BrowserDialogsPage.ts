import {Page, Locator} from '@playwright/test';
export class BrowserDialogsPage {
    readonly page: Page;
    readonly openConfirmButton: Locator;
    readonly openPromptButton: Locator;
    readonly confirmResult: Locator;
    readonly acceptDialog;
    readonly dismissDialog;


    constructor(page:Page){
        this.page=page;
        this.openConfirmButton = this.page.getByRole('button', {name: 'Open confirm'});
        this.openPromptButton = this.page.getByRole('button', {name: 'Open prompt'});
        this.confirmResult = this.page.getByTestId('confirmResult');
        this.acceptDialog = this.page.on('dialog', dialog => dialog.accept());
        this.dismissDialog = this.page.on('dialog', dialog => dialog.dismiss())
    }

}