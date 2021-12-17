import faker from "faker"

class AdminPage {
    get adminBtn() { return $("//*[@id='content']/div[2]/div[3]/div/div[1]/a/div") }
    async clickonAdminTab() {
        await this.adminBtn.click()
    }
    get pageHeader() { return $("//div[text()='Admins Management']") }
    get addAdmin() { return $("//button[@type='submit']") }
    async clickOnAddAdminBtn() {
        await this.addAdmin.click()
    }
    get firstName() { return $("//input[@name='fname']") }
    get lastName() { return $("//input[@name='lname']") }
    get email() { return $("//input[@name='email']") }
    get password() { return $("//input[@name='password']") }
    get mobileNo() { return $("//input[@name='mobile']") }
    get address1() { return $("//input[@name='address1']") }
    get address2() { return $("//input[@name='address2']") }
    get balance() { return $("//input[@name='balance']") }
    get countryDropDown() { return $("//*[@id='select2-drop']/ul/li[4]/div/span") }
    get submitBtn() { return $("//button[text()='Submit']") }
    get successMsg() { return $("//h4[@class='ui-pnotify-title']") }
    get dashboardBtn() { return $("//a[@href='https://phptravels.net/api/admin']") }
    async setFirstAndLastName() {
        await this.firstName.setValue(faker.name.firstName())
        await this.lastName.setValue(faker.name.lastName())
    }
    async emailAddress() {
        const email = faker.internet.email();
        console.log(email);
        await this.email.setValue(email);
    }
    async setPassword() {
        await this.password.setValue(faker.internet.password(8))
    }
    async setMobileNo() {
        await this.mobileNo.setValue(faker.phone.phoneNumber())
    }
    async clickForCountry() {
        await this.countryDropDown.waitForClickable()
        await this.countryDropDown.selectByVisibleText("Algeria")
    }
    async setAddress() {
        await this.address1.setValue(faker.address.city())
        await this.address2.setValue(faker.address.state())
    }
    async setMainSettings(adminmainSettings: { balance: string }) {
        await this.balance.setValue(adminmainSettings.balance)
    }
    async clickOnSubmitBtn() {
        await this.submitBtn.click()
    }
}
export default new AdminPage()