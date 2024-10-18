
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
    await expect(page.locator('a.p-name.article-title')).toHaveText('NJIT Student Marketplace (NJIT Business)')  

})

//checks the text in a list matches the text passed as argument. essentially checks existence for a list overall and its text. 
test('1.2.1 - check Text is broken up into bullet points and numbered lists as appropriate, rather than large paragraph blocks."', async ({page}) => {
    await page.goto('http://localhost:4000/');
    await page.getByText('Kernel & Threads').click();
    await expect(page).toHaveTitle('What is a Kernel? | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('What is a Kernel?') 
    expect(page.url()).toBe('http://localhost:4000/hexo/kernel-thread/');
    await expect (page.getByRole('listitem').filter({ hasText: 'It connects apps and hardware, like the CPU and memory.'})).toHaveCount(1);    
    await expect (page.getByRole('listitem').filter({ hasText: 'A thread is a set of instructions sent to the CPU to execute.'})).toHaveCount(1);    
    await page.goto('http://localhost:4000/');
    await expect (page.getByRole('listitem').filter({ hasText: 'System Foundations'})).toHaveCount(1);    

   
})


test('check Different sections are labeled with boldness, or underlined text to clearly divide content."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await page.getByText('Setting up GitHub').click()
    await expect(page).toHaveTitle('GitHub Setup | Index')
    await expect(page.locator('h1.p-name.article-title')).toHaveText('GitHub Setup') 
    expect(page.url()).toBe('http://localhost:4000/hexo/github-setup/')

    //check boldness in github setup section
    const selector = '#local strong'
    const strongTextContent = await page.locator(selector).textContent() || "";
    const specificText = "local"; 
    const hasSpecificText = strongTextContent.includes(specificText);
    expect(hasSpecificText).toBe(true); 

    await page.click('a.main-nav-link:has-text("Home")')
    //check underline in scaling section

    await page.click('a[href="scaling"]')

    const selector2 = 'ins:has-text("number")'
    const underlineTextContent = await page.locator(selector2).textContent() || "";
    const specificText2 = "number"; 
    const hasSpecificText2 = underlineTextContent.includes(specificText2);
    expect(hasSpecificText2).toBe(true); 
})

