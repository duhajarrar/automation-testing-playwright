import {test, expect, defineConfig} from '@playwright/test';
test('test drag & drop', async({page}, testInfo) =>{
    await page.goto(testInfo.project.use.baseURL+'');
    await page.getByText('Drag me').dragTo(page.getByText('Drop here'));
    await expect(page.getByText("Drop successful")).toBeVisible();


});