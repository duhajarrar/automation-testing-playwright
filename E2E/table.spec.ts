import {test,expect, defineConfig} from '@playwright/test';
import {TablePage} from '../Page/TablePage';

test('Get table rows', async ({page}, testInfo)=>{
    const tablePage = new TablePage(page);
    await page.goto(testInfo.project.use.baseURL+'');
    // await expect(profilePage.tableRows).toHaveCount(3);
    await expect(tablePage.activeStatusLocator).toBeVisible();
    await tablePage.editButton.click();
    await expect(tablePage.editingLocator).toBeVisible();
  });