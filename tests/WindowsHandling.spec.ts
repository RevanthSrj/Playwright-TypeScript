import { expect, test, Page, chromium } from "playwright/test"
test.describe('', () => {
    test('', async ({ }) => {

        const browsers = await chromium.launch()

        const context = await browsers.newContext({
            viewport: { width: 1536, height: 695 },
            recordVideo: { dir: "./recordVideos", size: { width: 1536, height: 695 } }
        })

        const page = await context.newPage()

        await page.goto("https://www.flipkart.com/")

        await page.click('text=Mobiles')

        await page.waitForTimeout(1000)

        await page.locator('input[placeholder="Search for products, brands and more"]').type('iPhone')

        await page.keyboard.press('Enter')

        // await page.click('text=Apple iPhone 15 (Black, 128 GB)')

        //   Window Handling this is One Way   Ex:1

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click('text=Apple iPhone 15 (Black, 128 GB)'),])

        // const newPage = await context.waitForEvent('page')      // Change to the next page, This is Another Way

        await newPage.waitForLoadState()

        await newPage.click('text=Buy Now')

        await newPage.waitForTimeout(1000)

        await newPage.goBack()

        await newPage.waitForTimeout(1000)

        await newPage.close()

        await page.click('text=Apple iPhone 15 (Blue, 128 GB)')

        const newPage1: Page = await context.waitForEvent('page')   // Change to the next page, Ex:2

        await newPage1.waitForLoadState()

        await newPage1.click('text=Buy Now')

        await newPage1.waitForTimeout(3000)

        await newPage1.goBack()

        await newPage1.waitForTimeout(1000)

        await newPage1.close()

        for (var i = 0; i < 2; i++) {
            await page.goBack()
            await page.waitForTimeout(1000)
        }

        await page.waitForTimeout(2000)
    })

})
