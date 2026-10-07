import {Page, Locator} from '@playwright/test';
export class DynamicUIPage {
    readonly page: Page;
    readonly showDelayedMessageButton: Locator;
    readonly delayedMessage: Locator;

    constructor(page:Page){
        this.page=page;
        this.showDelayedMessageButton = this.page.getByRole('button', {name: 'Show delayed message'});
        this.delayedMessage = this.page.getByText('✅ Dynamic');
    }
}