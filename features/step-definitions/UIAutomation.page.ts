import { Given, Then, When } from "@wdio/cucumber-framework";
import CustomerPage from "../pageobjects/customers.page";
import LoginPage from "../pageobjects/login.page";

Given("I would be landing on {string}", async (url)=>{
    await LoginPage.openPage(url);
})
When("I enter valid credentials and enter login", async()=>{
    await LoginPage.enterCredintials()
    await LoginPage.clickLoginButton()
})
Then("I should land on admin page",async ()=>{
    await expect(browser).toHaveUrlContaining("/admin")
})
When("I land on admin dashboard and click on customers", async()=>{
    await CustomerPage.clickomCustomerTab()
})
Then("I should land {string} page",async(urlElement)=>{
    await expect(browser).toHaveUrlContaining(urlElement)
})
When("I click on add customer and enter all required details", async()=>{
    await CustomerPage.clickOnAddCustomerBtn()
})