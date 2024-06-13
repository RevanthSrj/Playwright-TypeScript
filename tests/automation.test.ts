import { test, Frame, chromium, expect } from '@playwright/test'
test.describe('gmailValidation', () => {
    test('testing', async ({ }) => {

        const browsers = await chromium.launch({ headless: false })
        const context = await browsers.newContext({
            viewport: { width: 1536, height: 695 }, recordVideo: {
                dir: './videos/',
                size: { width: 1536, height: 695 }
            }
        })
        const page = await context.newPage()

        await page.goto('https://www.google.co.in/')

        await page.click('[aria-label="Google apps"]')

        await page.waitForTimeout(1000)

        const noframe = page.frame
        console.log('no of frame= ' + noframe.length)

        const fr = page.frame('app')

        await fr?.locator('text=Gmail').click();
        try {
            await page.locator('text=Sign in').click();
            console.log('This is Sign page')
        }
        catch {
            console.log('No Sign page')
        }
        await page.getByLabel("Email or phone").type("Dharakasundar4@gmail.com");

        await page.locator('text=Next').click();

        await page.getByLabel("Enter your password").fill("SUNDAR1234");

        await page.click('text=Next');

        await page.waitForTimeout(3000)

        await page.locator('text=Compose').click();

        await page.getByLabel('To recipients').click();

        await page.fill("[aria-label='To recipients']", "revanthsrj004@gmail.com");

        await page.press("[aria-label='To recipients']", "Enter");

        await page.getByPlaceholder("Subject").type("Testing purpose in Playwright");

        await page.locator("//div[@aria-label='Message Body']").type("This is normal mail for Testing process in Playwright with Typescript");

        await expect(page).toHaveScreenshot("Gmail.png")

        await page.click("//div[text()='Send']");

        await page.waitForTimeout(5000);

        await browsers.close();

    })

    test('Sample Test Page', async ({ page }) => {

        await page.goto("https://www.globalsqa.com/");

        await page.waitForTimeout(500)

        const sample = page.locator("(//a[text()='Tester’s Hub'])[1]");

        await sample.hover();

        await page.click('text=Sample Page Test')

        await page.locator('#g2599-name').type('Mohith Kumar')

        await page.locator('#g2599-email').type('mohithkumar555@gmail.com')

        await page.locator('#g2599-website').type('https://www.globalsqa.com/')

        // await page.click('#g2599-experienceinyears')

        await page.selectOption('#g2599-experienceinyears', { label: '3-5' })

        await page.locator('text= Functional Testing').check()

        await page.locator('text=  Automation Testing').check()

        await page.locator('text=  Manual Testing ').check()

        await page.locator("//input[@value='Graduate']").click()

        await page.locator('text=  Alert Box : Click Here ').click()

        const file = page.locator("//input[@name='file-553']")

        await file.setInputFiles('C:\\Users\\Revanth\\Pictures\\Screenshots\\Screenshot (1).png');

        await page.locator("//textarea[@name='g2599-comment']").type('Essay topics in English can be difficult to come up with. While writing essays, many college and high school students face writer’s block and have a hard time to think about topics and ideas for an essay. In this article, we will list out many good essay topics from different categories like argumentative essays, essays on technology, environment essays for students from 5th, 6th, 7th, 8th grades. Following list of essay topics are for all – from kids to college students. We have the largest collection of essays. An essay is nothing but a piece of content which is written from the perception of writer or author.')

        await page.click('text=Submit')

        await page.waitForTimeout(3000);

    })


})
