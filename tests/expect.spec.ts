import { test, Page, expect } from "@playwright/test"
test.describe('', () => {
    test('', async ({ page }) => {

        await page.goto('https://www.globalsqa.com/')

        await expect(page).toHaveTitle(/Home - GlobalSQA/); //  Check Same Title

        await expect(page).toHaveURL("https://www.globalsqa.com/"); // Check same URl

        await expect(page).toHaveScreenshot("img.png")  // Take a Screenshot

        await page.pause()

    })

})
