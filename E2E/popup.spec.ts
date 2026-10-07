import {test, expect, defineConfig} from '@playwright/test';
import { PopupPage } from '../Page/PopupPage';
test.describe('Popup', () =>{
test("Popup test", async ({page}, testInfo)=>{
    // test.setTimeout(200_000);

    page.goto(testInfo.project.use.baseURL+'');
    const popupPage = new PopupPage(page);

    await popupPage.popupButton.click();
    
    const popupPromise = page.waitForEvent('popup');
    const popupPagePromise = await popupPromise;
    const popupPage2 = new PopupPage(popupPagePromise);

    await expect(popupPage2.popupDetails).toBeVisible({timeout: 200_000});


});




});