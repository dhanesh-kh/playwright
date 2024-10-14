// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
})

test('check various headers for different named topics', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await expect(page.locator('h4').nth(1)).toHaveText('Why Learn Docker?')

   
})


test('Links leading to various sections/pages dedicated to specific topics, utilizing boldness, underlining, italicization, and more to convey information', async ({page}) => {
    await page.goto('http://localhost:4000/')
    const linkSelector = 'a[href="#introduction"]';  // link's selector for introduction section link for example
    // Check if the link is visible and enabled, and that its actually a link with href (clickable)
    const isVisible = await page.isVisible(linkSelector); 
    const isEnabled = await page.isEnabled(linkSelector);
    const hasHref = await page.getAttribute(linkSelector, 'href') !== null;
})
