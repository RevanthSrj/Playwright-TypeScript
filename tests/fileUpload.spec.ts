import { Expect, test, Page, chromium } from "@playwright/test"
test.describe('file upload', () => {

    test('demo', async ({ }) => {

        const browsers = await chromium.launch()

        const context = await browsers.newContext({ viewport: { width: 1536, height: 695 } })

        const page = await context.newPage()

        await page.goto('https://demo.automationtesting.in/FileUpload.html')

        const fileUpload = page.locator('[type="file"]')

        // Single File upload
        await fileUpload.setInputFiles('C:\\Users\\Revanth\\Downloads\\r.png');

        await page.waitForTimeout(3000)

        const videoUpload = page.locator('[type="file"]')

        // Multi File upload
        await videoUpload.setInputFiles(['C:\\Users\\Revanth\\Downloads\\r.png', 'C:\\Users\\Revanth\\Downloads\\logo.mp4']);

        await page.waitForTimeout(5000)
    })

})
