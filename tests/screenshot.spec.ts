import { expect, test, Page } from "@playwright/test"
test.describe('Screenshot', () => {
    test('image', async ({ page }) => {

        await page.goto('https://www.globalsqa.com/')

        await page.waitForTimeout(1000)

        await page.screenshot({ path: 'Screenshot.png' }) // Take a Screenshot

        await page.screenshot({ path: 'fullpageScreenshot.png', fullPage: true }) // full page Screenshot

        await page.locator("img[alt='GlobalSQA']").screenshot({ path: 'elementScreenshot.png' }) // Element Screenshot.png

        await page.waitForTimeout(2000)

        // await expect(page).toHaveScreenshot("ExpectScreenshot.png"); // Expect the Take a Screenshot

        await page.waitForTimeout(5000)

    })
})
