// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
})

test('check text on various topics of containerization, development, and deployment of software applications for novices.', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await expect(page.locator('a[href="virtualization-containerization"]')).toHaveText('Virtualization & Containerization')
    await expect(page.locator('a[href="12-factor-app"]')).toHaveText('The 12-Factor App')
    const factorText = (page.locator('a[href="12-factor-app"]')).textContent();
    const docText = (page.locator('a[href="documentation"]')).textContent();
    //check no two topics are the same(equal)
    expect(factorText).not.toEqual(docText);

   
})


test('Links that lead to various sections/pages dedicated to specific topics, utilizing boldness, underlining, and more to convey information.', async ({page}) => {
    await page.goto('http://localhost:4000/')
    const linkSelector = 'a[href="#Docker-Setup"]';  // link's selector for introduction section link for example
    // Check if the link is visible and enabled, and that its actually a link with href (clickable)
    const isVisible = await page.isVisible(linkSelector); 
    const isEnabled = await page.isEnabled(linkSelector);
    await page.getByText('Setting up Docker').click()
    expect(page.url()).toBe('http://localhost:4000/hexo/docker-setup/');
    await page.goto('http://localhost:4000/')
    const selector = '#Intro strong'
    const strongTextContent = await page.locator(selector).textContent() || "";
    const specificText = "buy and sell"; 
    const hasSpecificText = strongTextContent.includes(specificText);
    expect(hasSpecificText).toBe(true); 
    await page.getByText('Setting up Docker').click()
    expect(page.url()).toBe('http://localhost:4000/hexo/docker-setup/');

    const selector2 = '#prereqs ins'
    const underlineTextContent = await page.locator(selector2).textContent() || "";
    const specificText2 = "Ensure"; 
    const hasSpecificText2 = underlineTextContent.includes(specificText2);
    expect(hasSpecificText2).toBe(true); })

    test('Checks relevant content, legible fonts, concise text paragraphs, terms with explanations, and graphics.', async ({page}) => {
        await page.goto('http://localhost:4000/')
        await expect(page.locator('h3#Getting-Started')).toHaveText('Getting Started')
        await expect(page.locator('p').nth(3)).toHaveText('Before diving into the development of the NJIT Student Marketplace,it’s important to understand the foundational tools that will makecollaboration and deployment easier: Git and Docker.These tools not only streamline the development processbut are also widely used across the tech industry,making them essential skills to have.');

        await page.getByText('Kernel & Threads').click()
        expect(page.url()).toBe('http://localhost:4000/hexo/kernel-thread/')
        await page.$(`img[alt="Kernel Diagram"]`) !== null;
        await page.getByAltText('Kernel Diagram').click();
});
