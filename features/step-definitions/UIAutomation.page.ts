import { Given, Then, When } from "@wdio/cucumber-framework";
import CustomerPage from "../pageobjects/customers.page";
import LoginPage from "../pageobjects/login.page";
import Data from "../test-data/data.json"
import suppliersPage from "../pageobjects/suppliers.page";
import adminsPage from "../pageobjects/admins.page";

Given("I would be landing on {string}", async (url) => {
    await LoginPage.openPage(url);
})
When("I enter valid credentials and enter login", async () => {
    await LoginPage.enterCredintials()
    await LoginPage.clickLoginButton()
})
Then("I should land on {string} page", async (urlElement) => {
    await expect(browser).toHaveUrlContaining(urlElement)
})
When("I land on admin dashboard and click on customers", async () => {
    await CustomerPage.clickomCustomerTab()
})
Then("I should land {string} page", async (urlElement) => {
    await expect(browser).toHaveUrlContaining(urlElement)
})
When("I click on add customer and enter all required details", async () => {
    await CustomerPage.clickOnAddCustomerBtn()
    await CustomerPage.setFirstAndLastName()
    await CustomerPage.emailAddress()
    await CustomerPage.setPassword()
    await CustomerPage.setMobileNumber()
    await CustomerPage.clickOnCountry()
    await browser.pause(5000)
    await CustomerPage.setAddress()
    await CustomerPage.setMainSettings(Data.customermainSettings)
    await CustomerPage.clickOnSubmitBtn()
})
Then("I should get the success msg {string}", async (headerText) => {
    await CustomerPage.successMsg.waitForDisplayed
    await expect(CustomerPage.successMsg).toHaveTextContaining(headerText)
    await CustomerPage.clickOnDashboard()
})
When("I click on suppliers page", async () => {
    await suppliersPage.clickOnSuppliers()
})
// Then("I should land on {string} page", async (headerText) => {
//     await expect(suppliersPage.pageHeader).toHaveTextContaining(headerText)
// })
When("I click on add button to add new supplier", async () => {
    await suppliersPage.clickOnAddSupplier()
})
When("I enter all the fields and checkboxes", async () => {
    await suppliersPage.setFirstAndLastName()
    await suppliersPage.emailAddress()
    await suppliersPage.setPassword()
    await suppliersPage.setMobileNo()
    await suppliersPage.clickOnCountry()
    await suppliersPage.setAddress()
    await suppliersPage.setMainSettings(Data.suppliermainSettings)
    await suppliersPage.assignHotelDropDown()
    await suppliersPage.assignToursDropDown()
    await suppliersPage.assignCarsDropDown()
    await suppliersPage.clickCarsCheckBox()
    await suppliersPage.clickHotelsCheckBox()
    await suppliersPage.clickOnSubmitBtn()
})
Then("The success msg {string} will be prompted", async (text) => {
    await suppliersPage.successMsg.waitForDisplayed
    await expect(suppliersPage.successMsg).toHaveTextContaining(text)
    await suppliersPage.clickToRedirectDashboard()
})
When(/^I click on admin tab$/, async () => {
    await adminsPage.clickonAdminTab()
});
Then(/^I should land on \"([^\"]*)\"$/, async (text) => {
    await expect(adminsPage.pageHeader).toHaveTextContaining(text)
});
When(/^I click on add admin button$/, async () => {
    await adminsPage.clickOnAddAdminBtn()
});
When(/^I enter all the fields$/, async () => {
    await adminsPage.setFirstAndLastName()
    await adminsPage.emailAddress()
    await adminsPage.setPassword()
    await adminsPage.setMobileNo()
    await adminsPage.clickOnCountry()
    await adminsPage.setAddress()
    await adminsPage.setMainSettings(Data.adminmainSettings)
    await CustomerPage.clickOnSubmitBtn()

});
Then(/^Success messeage as \"([^\"]*)\" would be displayed$/, async (text) => {
    await adminsPage.successMsg.waitForDisplayed
    await expect(adminsPage.successMsg).toHaveTextContaining(text)
});
