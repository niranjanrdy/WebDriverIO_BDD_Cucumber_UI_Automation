import report from "@wdio/allure-reporter"

class AdminPage {
    get adminBtn() { return $("//a[@href='https://phptravels.net/api/admin/accounts/admins/']/div") }
    async clickonAdminTab() {
        await this.adminBtn.click()
        report.addStep(`performed click on : ${await this.adminBtn.selector}`)
    }
    get pageHeader() { return $("//div[text()='Admins Management']") }
    get addAdmin() { return $("//button[@type='submit']") }
    async clickOnAddAdminBtn() {
        await this.addAdmin.click()
        report.addStep(`performed click on : ${await this.addAdmin.selector}`)
    }
    get firstName() { return $("//input[@name='fname']") }
    get lastName() { return $("//input[@name='lname']") }
    get email() { return $("//input[@name='email']") }
    get password() { return $("//input[@name='password']") }
    get mobileNo() { return $("//input[@name='mobile']") }
    get dropDown() { return $("//span[text()='Please Select']") }
    get address1() { return $("//input[@name='address1']") }
    get address2() { return $("//input[@name='address2']") }
    get balance() { return $("//input[@name='balance']") }
    get submitBtn() { return $("//button[@class='btn btn-primary btn-block btn-lg']") }
    get successMsg() { return $("//h4[@class='ui-pnotify-title']") }
    get homeBtn() { return $("//a[@href='https://phptravels.net/api/admin']") }
    async setFirstAndLastName(firstName: any, lastName: any) {
        await this.firstName.setValue(firstName)
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.firstName.setValue(lastName)
    }
    async setPassword(password: any) {
        await this.password.setValue(password)
        report.addStep(`password is set to : ${password}`)
    }
    async setMobileNo(phoneNumber: any) {
        await this.mobileNo.setValue(phoneNumber)
        report.addStep(`phoneNumber given as : ${phoneNumber}`)
    }
    get dropDownSearchBox() { return $(".select2-input") }
    get allCountriesOption() { return $$(".select2-results>li>div") }
    async clickOnCountry(adminCountry: string) {
        await this.dropDown.click()
        report.addStep(`performed click on : ${await this.dropDown.selector}`)
        await this.dropDownSearchBox.setValue(adminCountry)
        report.addStep(`value is set to : ${adminCountry}`)
        await this.allCountriesOption.forEach(async (option) => {
            const countryName = await option.getText()
            if (countryName == adminCountry) {
                await option.click()
            }
        })
    }
    async setAddress(city: string, state: string) {
        await this.address1.setValue(city)
        report.addStep(`address city is set to : ${city}`)
        await this.address2.setValue(state)
        report.addStep(`address state is set to : ${state}`)
    }
    async setMainSettings(balance: string) {
        await this.balance.setValue(balance)
        report.addStep(`balance is set to : ${balance}`)
    }
    async clickOnSubmitBtn() {
        await this.submitBtn.waitForClickable()
        await this.submitBtn.click()
        report.addStep(`performed click on : ${await this.submitBtn.selector}`)
    }
    async clickToRedirectDashboard() {
        await this.homeBtn.click()
        report.addStep(`performed click on : ${await this.homeBtn.selector}`)
    }
}
export default new AdminPage()