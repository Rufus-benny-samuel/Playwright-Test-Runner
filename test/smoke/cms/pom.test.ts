import { expect } from "@fixtures/basePages";
import test from "@fixtures/basePages";
import * as data from "../../../data/login.cred.json";


test.describe("POM - TC001", () => {

    test("Login positive", async ({ headerPage, loginPage, commonPage, page }) => {
        await page.goto("https://letcode.in/")
        expect(page.url()).toBe("https://letcode.in/")
        await headerPage.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await loginPage.enterUserName(data.email);
        await loginPage.enterUserPassword(data.pass);
        await loginPage.clickLoginBtn();
        const toaster = await commonPage.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await page.reload();
        await headerPage.clickSignOutLink();
    });
    test.only("Login again", async ({ headerPage, page, loginPage }) => {
        await page.goto("https://in.bookmyshow.com/explore/home/chennai")
        // await page.waitForLoadState("load")
        // await page.locator("//span[text()='Chennai']").click()
        await page.locator("//span[text()='Search for Movies, Events, Plays, Sports and Activities']").click()
        await page.fill("//input[@class='bwc__sc-1iyhybo-6 ilhhay']", 'Leo')
        await page.locator("(//div[@class='bwc__sc-3t17w7-15 ddrnsU'])[1]").click()

        // await headerPage.clickLoginLink();
        // await loginPage.login("koushik350@gmail.com", data.pass);
        // await page.waitForNavigation();
        // expect(page.url()).toBe("https://letcode.in/")
    })
})