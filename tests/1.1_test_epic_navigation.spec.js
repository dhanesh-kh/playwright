// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
    await expect(page.locator('a.p-name.article-title')).toHaveText('NJIT Student Marketplace (NJIT Business)')  

})

test('Site navigation that enables easy access to various topics. Clear labels, structure, and consistent navigation elements."', async ({page}) => {
    await page.goto('http://localhost:4000/')

    //topics & navigation elements
    await page.getByText('Kubernete’s Business Contributions').click()
    await expect(page).toHaveTitle('Business Function & Industry Relevance | Index')
    expect(page.url()).toBe('http://localhost:4000/hexo/kubernetes-role-in-industry/')

    await page.goto('http://localhost:4000/')
    await page.getByText('The 12-Factor App').click()
    await expect(page).toHaveTitle('12-Factor App | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('12-Factor App')   
    expect(page.url()).toBe('http://localhost:4000/hexo/12-factor-app/')

    //clear labels
    await page.goto('http://localhost:4000/')
    await page.isVisible('h3#Environment-Preparation')
    await expect(page.locator('h3#Environment-Preparation')).toHaveText('Environment Preparation')

    await page.isVisible('h3#System-Foundations')
    await expect(page.locator('h3#System-Foundations')).toHaveText('System Foundations')
   
})


