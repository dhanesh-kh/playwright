// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
})

test('Site navigation that enables easy access to various topics. Clear labels, structure, and consistent navigation elements."', async ({page}) => {
    await page.goto('http://localhost:4000/')

    //topics & navigation elements
    await page.getByText('Kubernete’s Business Contributions').click()
    expect(page.url()).toBe('http://localhost:4000/hexo/kubernetes-role-in-industry/')

    await page.goto('http://localhost:4000/')
    await page.getByText('The 12-Factor App').click()
    expect(page.url()).toBe('http://localhost:4000/hexo/12-factor-app/')

    //clear labels
    await page.goto('http://localhost:4000/')
    await page.isVisible('h3#Environment-Preparation')
    await expect(page.locator('h3#Environment-Preparation')).toHaveText('Environment Preparation')

    await page.isVisible('h3#System-Foundations')
    await expect(page.locator('h3#System-Foundations')).toHaveText('System Foundations')
   
})


