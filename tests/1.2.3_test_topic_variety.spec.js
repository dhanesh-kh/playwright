// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
    await expect(page.locator('a.p-name.article-title')).toHaveText('NJIT Student Marketplace (NJIT Business)')  

})

test('check Multiple headers throughout the pages indicate different topics."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await page.isVisible('h4#GitHub-Setup')
    await expect(page.locator('h4#GitHub-Setup')).toHaveText('GitHub Setup')

    await page.isVisible('h3#System-Foundations')
    await expect(page.locator('h3#Architecture-Scaling')).toHaveText('Architecture & Scaling')
   
})


test('check headers are distinct, descriptive, and a list of these headers is included in the index for reference.."', async ({page}) => {
    //Check distinc, descriptive headers
    await page.goto('http://localhost:4000/')
    await page.isVisible('h2#Guidelines-for-Development-and-Deployment')
    await expect(page.locator('h2#Guidelines-for-Development-and-Deployment')).toHaveText('Guidelines for Development and Deployment')

    await page.isVisible('h3#Documentation-References')
    await expect(page.locator('h3#Documentation-References')).toHaveText('Documentation & References')

        //Check ordered list of headers
    await page.locator('ol').isVisible();

    const listItems = ['Introduction', 'Getting Started', 'System Foundations', 'Architecture & Scaling', 'Business Function & Industry Relevance', 'Documentation & References'];
    for (const item of listItems) {
    await page.locator(`ul li:has-text("${item}")`).isVisible();
    }
})