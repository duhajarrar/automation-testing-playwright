import {test, expect} from '@playwright/test';
test('Local Storage', async({page}, testInfo)=>{
    await page.goto(testInfo.project.use.baseURL+'');
    await page.getByPlaceholder('dark').fill('dark');
    await page.getByRole('button',{name:'Save theme'}).click();
    await expect(page.getByText('Stored theme: dark')).toBeVisible();
    const theme = await page.localStorage.getItem('theme');
    await expect(theme).toBe('dark');


});