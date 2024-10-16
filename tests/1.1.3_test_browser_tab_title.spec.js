// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
})

test('check that the browser tab title dynamically updates to display the title of the current page."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await page.getByText('The 12-Factor App').click()
    await expect(page).toHaveTitle('12-Factor App | Index');
    await page.getByText('Home').nth(0).click()
    await page.getByText('Scaling').nth(3).click()
    await expect(page).toHaveTitle('What is Vertical & Horizontal Scaling in Docker? | Index');
   
})