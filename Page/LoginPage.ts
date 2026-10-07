import {Page, Locator} from '@playwright/test';
export class LoginPage {
    readonly page:Page;

    readonly username : Locator;
    readonly password : Locator;    
    readonly loginButton : Locator;
    readonly logoutButton : Locator;
    readonly loginSuccessMessage : Locator;
    readonly loginFailureMessage : Locator;
    readonly dashboard : Locator;
    readonly dashboardWelcomeMessage : Locator;
    readonly logoutMessage : Locator;

    constructor(page:Page){
        this.page=page;
        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', {name: 'Login'});
        this.logoutButton = this.page.getByRole('button', {name: 'Logout'});
        this.loginSuccessMessage = this.page.getByText('Login successful');
        this.loginFailureMessage = this.page.getByText('Invalid username or password');
        this.dashboard = this.page.getByRole('heading', { name: 'Dashboard' });
        this.dashboardWelcomeMessage = this.page.getByText('Welcome to the practice dashboard.');
        this.logoutMessage = this.page.getByText('Logged out');

    }
    
}
