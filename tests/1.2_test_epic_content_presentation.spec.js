// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
    await expect(page.locator('a.p-name.article-title')).toHaveText('NJIT Student Marketplace (NJIT Business)')  

})

test('check Content is organized and formatted for easy comprehension and engagement. Different structures for text"', async ({page}) => {
    // by organized, formatted, & structures,  check for things like title, subheadings, bullets, etc. 
    await page.goto('http://localhost:4000/')
    await page.getByText('Docker Overview').click()
    await expect(page).toHaveTitle('Docker Guide | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('Docker Guide')   
})

test('check use of graphics', async ({page}) => {
//graphics
    await page.goto('http://localhost:4000/')
    await page.getByText('Docker vs. Kubernetes').click()
    await expect(page).toHaveTitle('What is Docker? | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('What is Docker?')   
    await page.$(`img[alt="Docker Architecture"]`) !== null;
    await page.getByAltText('Docker Architecture').click();})


test('check variety in topics', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await expect(page.locator('h4#Why-Learn-Git')).toHaveText('Why Learn Git?')
    await expect(page.locator('a[href="kernel-thread"]')).toHaveText('Kernel & Threads')
    const factorText = await (page.locator('a[href="kernel-thread"]')).textContent();
    const docText = await (page.locator('a[href="12-factor-app"]')).textContent();
    //check no two topics are the same(equal)
    expect(factorText).not.toEqual(docText)
    ;})
    