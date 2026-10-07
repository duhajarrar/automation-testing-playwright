import {Page, Locator} from '@playwright/test';

export class PopupPage{
    readonly page:Page;
    readonly popupButton:Locator;
    readonly popupDetails:Locator;


    constructor(page:Page){
        this.page = page;
        this.popupButton = this.page.getByRole('link', { name: 'Open details popup' });
        this.popupDetails = this.page.getByRole('heading', {name: 'Popup Details'});
    }


}