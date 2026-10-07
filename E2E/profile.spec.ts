import {test, expect, defineConfig} from '@playwright/test';
import {ProfilePage} from '../Page/ProfilePage';

test.describe('Profile Page',() => {

  // test.beforeAll(async()=>{
  //   console.log('Before All');
  // });

  // test.afterEach(async()=>{
  //   console.log('After Each');
  // });

  
  // [
  //   {name: 'Duha', email:'duha@jar.com', country: 'Palestine', subscribe: true},
  //   {name: 'John', email:'john@jar.com', country: 'Jordan', subscribe: true},

  // ].forEach(({name, email, country, subscribe}) => {
  //   test(`Profile form- ${name}`, async ({page}, testInfo)=>{
  //     const profilePage = new ProfilePage(page);
  //     await page.goto(testInfo.project.use.baseURL+'');
  //     await profilePage.name.fill(name);
  //     await profilePage.email.fill(email);
  //     await profilePage.country.selectOption(country);
      
  //     if(subscribe){  
  //       await profilePage.subscribe.check();
  //     }else{
  //       await profilePage.subscribe.uncheck();
  //     }

  //     await profilePage.saveButton.click();
      
  //     await expect(profilePage.savedSuccessMessage).toBeVisible();
  //     // await expect(profilePage.savedName).toBeVisible();
  //     // await expect(profilePage.savedEmail).toBeVisible();
  //     // await expect(profilePage.savedSubscribe).toBeVisible();
  //     // await expect(profilePage.savedCountry).toBeVisible();
  //     const savedText = profilePage.savedText;
      
  //     await expect(savedText.filter({hasText: 'Name: '+name}));
  //     await expect(savedText.filter({hasText: 'Email: '+email}));
  //     await expect(savedText.filter({hasText: 'Country: '+country}));
  //     await expect(savedText.filter({hasText: 'Newsletter: '+(subscribe ? 'yes' : 'no')}));

  //   });

  // });

});