import {Page, Locator} from '@playwright/test';
export class ProfilePage {
    readonly page:Page;

    readonly name : Locator;
    readonly email : Locator;    
    readonly country : Locator;
    readonly saveButton : Locator;
    readonly subscribe : Locator;
    readonly savedSuccessMessage : Locator;
    readonly savedText : Locator;
    // readonly savedName : Locator;
    // readonly savedEmail : Locator;
    // readonly savedCountry : Locator;
    // readonly savedSubscribe : Locator;
    
    constructor(page:Page){
        this.page=page;
        this.name = this.page.getByPlaceholder('Full name');
        this.email = this.page.getByPlaceholder('name@example.com');
        this.country = this.page.getByLabel('Country');
        this.subscribe = this.page.getByLabel(' Subscribe to newsletter');
        this.saveButton = this.page.getByRole('button', {name: 'Save profile'});
        
        this.savedSuccessMessage = this.page.getByRole('heading', { name: 'Saved summary' });
        this.savedText = this.page.getByText('Name:');
        // this.savedName = this.page.getByText('Name: Duha');
        // this.savedEmail = this.page.getByText('Email: duha@example.com');
        // this.savedCountry = this.page.getByText('Country: PS');
        // this.savedSubscribe = this.page.getByText('Newsletter: yes');
    }
    
}
