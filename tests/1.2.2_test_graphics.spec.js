// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
    await expect(page.locator('a.p-name.article-title')).toHaveText('NJIT Student Marketplace (NJIT Business)')  

})

test('check Images are included on relevant pages to enhance content understanding based on alt text. also check image has descriptive alt text to define the content it represents."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await page.getByText('Setting up Docker').click()
    await expect(page).toHaveTitle('Docker Setup | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('Docker Setup')
    expect(page.url()).toBe('http://localhost:4000/hexo/docker-setup/')
    await page.$(`img[alt="Docker For Windows"]`) !== null;
    await page.getByAltText('Docker For Windows').click();

})

