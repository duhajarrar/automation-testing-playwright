import {test, expect} from '@playwright/test';
test('api test routing', async ({page}, testInfo)=>{
    await page.goto(testInfo.project.use.baseURL+'');
    await page.route('/api/profile', async route =>{
        const response = await route.fetch();
        const json = await response.json();
        console.log(response);
        await route.fulfill({ response, json });


    });

});