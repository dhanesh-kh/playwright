const {test, expect} = require('@playwright/test');

test('My first test', async ({page})=>{
   await page.goto('https://google.com')
   await expect(page).toHaveTitle('Google') 
})
// const {hello, helloworld} = require('./demo/hello');
// import {hello, helloworld}  from './demo/hello';

// console.log(hello());
// console.log(helloworld());