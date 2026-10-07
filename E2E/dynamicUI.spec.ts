import {test,expect} from '@playwright/test';
import {DynamicUIPage} from '../Page/DynamicUIPage';

test('Dynamic UI', async ({page}, testInfo)=>{
    // test.setTimeout(200_000);
    await page.goto(testInfo.project.use.baseURL+'');
    const dynamicUIPage = new DynamicUIPage(page);
    await dynamicUIPage.showDelayedMessageButton.click();
    await expect(dynamicUIPage.delayedMessage).toBeVisible({timeout: 15_000});
});