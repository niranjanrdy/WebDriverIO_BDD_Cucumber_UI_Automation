import { Given, Then, When } from "@wdio/cucumber-framework";
import CustomerPage from "../pageobjects/customers.page";
import LoginPage from "../pageobjects/login.page";
import Data from "../test-data/data.json"
import suppliersPage from "../pageobjects/suppliers.page";
import adminsPage from "../pageobjects/admins.page";
import faker from "faker"

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
When("I click on add customer and enter all required details", async () => {
    await CustomerPage.clickOnAddCustomerBtn()
    await CustomerPage.setFirstAndLastName(faker.name.firstName(), faker.name.lastName())
    await CustomerPage.email.setValue(faker.internet.email())
    await CustomerPage.setPassword(faker.internet.password())
    await CustomerPage.setMobileNumber(faker.phone.phoneNumber)
    await CustomerPage.clickOnCountry()
    await CustomerPage.setAddress(faker.address.city(), faker.address.state())
    await CustomerPage.setMainSettings(Data.customermainSettings.balance)
    await CustomerPage.clickOnSubmitBtn()
})
Then("I should get the success msg {string}", async (headerText) => {
    await CustomerPage.successMsg.waitForDisplayed()
    await expect(CustomerPage.successMsg).toHaveTextContaining(headerText)
    await CustomerPage.clickOnDashboard()
})
When("I click on suppliers page", async () => {
    await suppliersPage.clickOnSuppliers()
})
When("I click on add button to add new supplier", async () => {
    await suppliersPage.clickOnAddSupplier()
})
When("I enter all the fields and checkboxes", async () => {
    await suppliersPage.setFirstAndLastName(faker.name.firstName(),faker.name.lastName())
    await suppliersPage.email.setValue(faker.internet.email())
    await suppliersPage.setPassword(faker.internet.password())
    await suppliersPage.setMobileNo(faker.phone.phoneNumber())
    await suppliersPage.clickOnCountry()
    await suppliersPage.setAddress(faker.address.city(), faker.address.state())
    await suppliersPage.itemName.setValue(faker.name.jobTitle())
    await suppliersPage.assignHotelDropDown()
    await suppliersPage.assignToursDropDown()
    await suppliersPage.assignCarsDropDown()
    await suppliersPage.setMainSettings(Data.suppliermainSettings.balance, Data.suppliermainSettings.comission)
    await suppliersPage.clickCarsCheckBox()
    await suppliersPage.clickHotelsCheckBox()
    await suppliersPage.clickOnSubmitBtn()
})
Then("The success msg {string} will be prompted", async (text) => {
    await suppliersPage.successMsg.waitForDisplayed()
    await expect(suppliersPage.successMsg).toHaveTextContaining(text)
    await suppliersPage.clickToRedirectDashboard()
})
When(/^I click on admin tab$/, async () => {
    await adminsPage.clickonAdminTab()
});
When(/^I click on add admin button$/, async () => {
    await adminsPage.clickOnAddAdminBtn()
});
When(/^I enter all the fields$/, async () => {
    await adminsPage.setFirstAndLastName(faker.name.firstName(), faker.name.lastName())
    await adminsPage.email.setValue(faker.internet.email())
    await adminsPage.setPassword(faker.internet.password())
    await adminsPage.setMobileNo(faker.phone.phoneNumber())
    await adminsPage.clickOnCountry()
    await adminsPage.setAddress(faker.address.city(), faker.address.state())
    await adminsPage.setMainSettings(Data.adminmainSettings.balance)
    await CustomerPage.clickOnSubmitBtn()

});
Then(/^Success messeage as \"([^\"]*)\" would be displayed$/, async (text) => {
    await adminsPage.successMsg.waitForDisplayed()
    await expect(adminsPage.successMsg).toHaveTextContaining(text)
});
