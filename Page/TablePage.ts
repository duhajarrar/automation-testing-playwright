import {Locator, Page} from "@playwright/test";

export class TablePage {
    readonly page: Page;
    readonly tableRows : Locator; 
    readonly editingLocator : Locator;
    readonly editButton : Locator;
    readonly activeStatusLocator : Locator;

    constructor(page: Page) {
        this.page = page;
        this.tableRows = this.page.locator('table tr').filter({hasText: 'Duha'}).first();
        this.activeStatusLocator = this.tableRows.locator('td').filter({hasText: 'Active'});
        this.editingLocator = this.page.getByText('Editing: Duha');
        this.editButton = this.tableRows.locator('td').getByRole('button', {name:'Edit'});
    }

}