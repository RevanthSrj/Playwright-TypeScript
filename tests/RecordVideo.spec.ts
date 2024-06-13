import { test, Page, expect, chromium } from '@playwright/test'
test.describe('Record Video', () => {
    test('video', async ({ }) => {

        const browsers = await chromium.launch()
        const context = await browsers.newContext({ recordVideo: { dir: "./Record/" } }) // This is record cmd line
        const page = await context.newPage()

        await page.goto('https://www.globalsqa.com/')

        const sample = page.locator("(//a[text()='Tester’s Hub'])[1]");

        await sample.hover();

        await page.click('text=Sample Page Test')

        await page.locator('#g2599-name').type('Mohith Kumar')

        await page.locator('#g2599-email').type('mohithkumar555@gmail.com')

        await page.locator('#g2599-website').type('https://www.globalsqa.com/')
    })

})
