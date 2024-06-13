import { Expect, test, Page, expect } from "@playwright/test"
test.describe('frame class', () => {
    test('frame', async ({ page }) => {

        await page.goto('https://www.google.co.in/')

        await page.click('[aria-label="Google apps"]')

        await page.waitForTimeout(1000)

        const noframe = page.frame
        console.log('no of frame= ' + noframe.length)   // Calculate the Frame

        // This is Frame ,use name
        const fr = page.frame('app')

        await fr?.locator('text=Gmail').click();

        await page.waitForTimeout(1000)

        await expect(page).toHaveScreenshot("Gmail.png")

        await page.goBack()

        await page.waitForTimeout(1000)

        await page.click('[aria-label="Google apps"]')

        // This is Frame, Anthor Way 
        const frame = page.frameLocator("//iframe[@name='app']")

        await frame.locator("//span[text()='Gmail']").click();

        await page.waitForTimeout(3000)
    })

})
