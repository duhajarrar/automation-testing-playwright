import {test,expect} from '@playwright/test';
import { MainPage } from '../Page/MainPage';
test.describe('test main',()=>{
    test('test main',async({page}, testInfo)=>{
        const mainPage = new MainPage(page);
        await page.goto(testInfo.project.use.baseURL+'');
        await expect(mainPage.heading).toBeVisible();
        await expect(page).toHaveTitle('Playwright Final Test Lab');
    });

});