import {test, expect} from '@playwright/test';
test.describe('IFrame',()=>{
    test('Iframe', async({page}, testInfo)=>{
        page.goto(testInfo.project.use.baseURL+'');
        await page.getByPlaceholder('Secret code').fill('12345');
        await page.getByRole('button', {name: 'Submit'}).click();
        await expect(page.getByText('Waiting...'));


    });

});
