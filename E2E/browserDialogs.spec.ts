import {test,expect} from '@playwright/test';
import {BrowserDialogsPage} from '../Page/BrowserDialogsPage';
[
  {accept: true},
  {accept: false}
].forEach(({accept})=>{
  test(`Browser Dialogs - ${accept}`, async ({page}, testInfo)=>{
    await page.goto(testInfo.project.use.baseURL+'');
    
    const browserDialogsPage = new BrowserDialogsPage(page);

    if(accept){
    await browserDialogsPage.acceptDialog;
    }else{
    await browserDialogsPage.dismissDialog;
    }
    await browserDialogsPage.openConfirmButton.click();
    let a = accept ? 'accepted':'dismissed';
    await expect(page.getByText(`Confirm result: ${a}`)).toBeVisible();
  });
});

test('Browser Dialogs - Prompt', async ({page}, testInfo)=>{
  await page.goto(testInfo.project.use.baseURL+'');
    const browserDialogsPage = new BrowserDialogsPage(page);

  await page.on('dialog', dialog => dialog.accept('Duha'));
  await browserDialogsPage.openConfirmButton.click();

});