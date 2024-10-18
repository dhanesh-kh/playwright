// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
    await expect(page.locator('a.p-name.article-title')).toHaveText('NJIT Student Marketplace (NJIT Business)')  

})

test('check navbar important sections, such as "Home," "Archives," and "Documentation."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await expect(page.locator('a.main-nav-link').nth(0)).toHaveText('Home')
    await expect(page.locator('a.main-nav-link').nth(1)).toHaveText('Archives')
    await expect(page.locator('a.main-nav-link').nth(2)).toHaveText('Documentation')
   
})


test('1.1.2 - check navbar Navigation bar remains visible consistently across all pages."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await page.getByText('Setting up GitHub').click()
    await expect(page).toHaveTitle('GitHub Setup | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('GitHub Setup') 
    expect(page.url()).toBe('http://localhost:4000/hexo/github-setup/')
    await page.isVisible('a#main-nav-toggle')
   
    await page.goto('http://localhost:4000/')
    await page.getByText('Docker’s Business Contributions').click()
    await expect(page).toHaveTitle('Business Function & Industry Relevance | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('Business Function & Industry Relevance') 
    expect(page.url()).toBe('http://localhost:4000/hexo/docker-role-in-industry/')
    await page.isVisible('a#main-nav-toggle')
})