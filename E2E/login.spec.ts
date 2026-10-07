import {test, expect, defineConfig} from '@playwright/test';
import {LoginPage} from '../Page/LoginPage';

test.describe('Login Page',() => {

  test.beforeAll(async()=>{
    console.log('Before All');
  });

  test.afterEach(async()=>{
    console.log('After Each');
  });


  test('Login with valid credentials', async ({page}, testInfo)=>{
    const loginPage = new LoginPage(page);

    await page.goto(testInfo.project.use.baseURL+'');
    await loginPage.username.fill('duha');
    await loginPage.password.fill('playwright');
    await loginPage.loginButton.click();
    
    await expect(loginPage.loginSuccessMessage).toBeVisible();
    await expect(loginPage.dashboard).toBeVisible();
    await expect(loginPage.dashboardWelcomeMessage).toBeVisible();
    await expect(loginPage.logoutButton).toBeVisible();

  });


  test('Login with invalid credentials', async ({page}, testInfo)=>{
    const loginPage = new LoginPage(page);
    
    await page.goto(testInfo.project.use.baseURL+'');
    await loginPage.username.fill('duha1');
    await loginPage.password.fill('playwright');
    await loginPage.loginButton.click();
    
    await expect(loginPage.loginFailureMessage).toBeVisible();
    await expect(loginPage.dashboard).toBeHidden();
    await expect(loginPage.dashboardWelcomeMessage).toBeHidden();
    await expect(loginPage.logoutButton).toBeHidden();

  });


  test('Logout', async ({page}, testInfo)=>{
    const loginPage = new LoginPage(page);

    await page.goto(testInfo.project.use.baseURL+'');
    await loginPage.username.fill('duha');
    await loginPage.password.fill('playwright');
    await loginPage.loginButton.click();

    await expect(loginPage.logoutButton).toBeVisible();
    await loginPage.logoutButton.click();

    await expect(loginPage.loginSuccessMessage).toBeHidden();
    await expect(loginPage.logoutMessage).toBeVisible();
    await expect(loginPage.dashboard).toBeHidden();
    await expect(loginPage.logoutButton).toBeHidden();

  });




});