import {Page,Locator} from '@playwright/test';
export class MainPage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page:Page) {
        this.page = page;
        this.heading = this.page.getByRole('heading', {name: '🧪 Playwright Test Lab'})
    }



}