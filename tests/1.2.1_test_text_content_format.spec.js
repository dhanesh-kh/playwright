// @ts-check
const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('check if hexo exists', async ({page}) => {

    await page.goto('http://localhost:4000/')
    await expect(page).toHaveTitle('Index')
})

//checks the text in a list matches the text passed as argument. essentially checks existence for a list overall and its text. 
test('1.2.1 - check Text is broken up into bullet points and numbered lists as appropriate, rather than large paragraph blocks."', async ({page}) => {
    await page.goto('http://localhost:4000/');
    await page.getByText('Kernel & Threads').click();
    expect(page.url()).toBe('http://localhost:4000/hexo/kernel-thread/');
    await expect (page.getByRole('listitem').filter({ hasText: 'It connects apps and hardware, like the CPU and memory.'})).toHaveCount(1);    
    await expect (page.getByRole('listitem').filter({ hasText: 'A thread is a set of instructions sent to the CPU to execute.'})).toHaveCount(1);    
    await page.goto('http://localhost:4000/');
    await expect (page.getByRole('listitem').filter({ hasText: 'System Foundations'})).toHaveCount(1);    

   
})


//******************INCOMPLETEEE************************************
test('check Different sections are labeled with various fonts, bold, or underlined text to clearly divide content."', async ({page}) => {
    await page.goto('http://localhost:4000/')
    await page.getByText('Setting up GitHub').click()
    expect(page.url()).toBe('http://localhost:4000/hexo/github-setup/')
    await page.isVisible('a#main-nav-toggle')
})