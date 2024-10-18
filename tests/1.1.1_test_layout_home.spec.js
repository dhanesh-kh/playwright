// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
    await expect(page.locator('a.p-name.article-title')).toHaveText('NJIT Student Marketplace (NJIT Business)')  
})


test('1.1.1 - check Home page provides an overview of the site and an index for main sections."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await page.isVisible('h2#Introduction')
    await expect(page.locator('h2#Introduction')).toHaveText('Introduction')
    await expect(page.locator('p').nth(1)).toHaveText('A dedicated platform for NJIT students to buy and sell textbooks, lab coats,PC parts, and more — essentially a student-only version of Craigslist.')


})

test('Links that lead to each major topic page are clearly marked and easy to navigate.', async ({page}) => {
    await page.goto('http://localhost:4000/')
    const linkSelector = 'a[href="docker"]';  // link's selector for introduction section link for example
    // Check if the link is visible and enabled, and that its actually a link with href (clickable)
    const isVisible = await page.isVisible(linkSelector); 
    const isEnabled = await page.isEnabled(linkSelector);
    const hasHref = await page.getAttribute(linkSelector, 'href') !== null;
    await page.getByText('Docker Overview').click()
    await expect(page).toHaveTitle('Docker Guide | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('Docker Guide') 
    expect(page.url()).toBe('http://localhost:4000/hexo/docker/')

    await page.goto('http://localhost:4000/')
    const linkSelector2 = 'a[href="kubernetes-role-in-industry"]';  // link's selector for introduction section link for example
    // Check if the link is visible and enabled, and that its actually a link with href (clickable)
    const isVisible2 = await page.isVisible(linkSelector); 
    const isEnabled2 = await page.isEnabled(linkSelector);
    const hasHref2 = await page.getAttribute(linkSelector, 'href') !== null;
    await page.getByText('Kubernete’s Business Contributions').click()
    await expect(page).toHaveTitle('Business Function & Industry Relevance | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('Business Function & Industry Relevance') 
    expect(page.url()).toBe('http://localhost:4000/hexo/kubernetes-role-in-industry/')
})
