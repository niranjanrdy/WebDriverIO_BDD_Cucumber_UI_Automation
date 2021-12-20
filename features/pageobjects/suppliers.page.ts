import report from "@wdio/allure-reporter"

class SupplierPage {
    get suppliers() { return $("//a[@href='https://phptravels.net/api/admin/accounts/suppliers/']//div") }
    get pageHeader() { return $("//div[text()='Suppliers Management']") }
    get addSupplier() { return $("//button[@type='submit']") }
    get firstName() { return $("//input[@name='fname']") }
    get lastName() { return $("//input[@name='lname']") }
    get email() { return $("//input[@name='email']") }
    get password() { return $("//input[@name='password']") }
    get mobileNo() { return $("//input[@name='mobile']") }
    get address1() { return $("//input[@name='address1']") }
    get address2() { return $("//input[@name='address2']") }
    get itemName() { return $("//input[@name='itemname']") }
    get comission() { return $("//input[@name='commission']") }
    get balance() { return $("//input[@name='balance']") }
    get addCars() { return $("//input[@value='addCars']") }
    get addHotels() { return $("//input[@value='addHotels']") }
    get submitBtn() { return $("//button[text()='Submit']") }
    get successMsg() { return $("//h4[@class='ui-pnotify-title']") }
    get homeBtn() { return $("//a[@href='https://phptravels.net/api/admin']") }
    async clickOnSuppliers() {
        this.suppliers.click()
        report.addStep(`performed click on : ${await this.suppliers.selector}`)
    }
    async clickOnAddSupplier() {
        this.addSupplier.click()
        report.addStep(`performed click on : ${await this.addSupplier.selector}`)
    }
    async setFirstAndLastName(firstName: any, lastName: any) {
        await this.firstName.setValue(firstName)
        report.addStep(`firstName set to : ${firstName}`)
        await this.lastName.setValue(lastName)
        report.addStep(`lastName set to : ${lastName}`)
    }
    async setPassword(password: any) {
        await this.password.setValue(password)
        report.addStep(`password is set to : ${password}`)
    }
    async setMobileNo(phoneNumber: any) {
        await this.mobileNo.setValue(phoneNumber)
        report.addStep(`phoneNumber given as : ${phoneNumber}`)
    }
    get dropDown() { return $("//span[text()='Please Select']") }
    get dropDownSearchBox() { return $(".select2-input") }
    get allCountriesOption() { return $$(".select2-results>li>div") }
    async clickOnCountry(supplierCountry: string) {
        await this.dropDown.click()
        report.addStep(`performed click on : ${await this.dropDown.selector}`)
        await this.dropDownSearchBox.setValue(supplierCountry)
        report.addStep(`value is set to : ${supplierCountry}`)
        await this.allCountriesOption.forEach(async (option) => {
            const countryName = await option.getText()
            if (countryName == supplierCountry) {
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
    async setItemName(name: string) {
        await this.itemName.setValue(name)
    }
    async setMainSettings(comission: string, balance: string) {
        await this.comission.scrollIntoView()
        await this.comission.setValue(comission)
        report.addStep(`comission is set to : ${comission}`)
        await this.balance.setValue(balance)
        report.addStep(`balance is set to : ${balance}`)
    }
    async clickCarsCheckBox() {
        await this.addCars.click()
        report.addStep(`performed click on : ${await this.addCars.selector}`)
    }
    async clickHotelsCheckBox() {
        await this.addHotels.click()
        report.addStep(`performed click on : ${await this.addHotels.selector}`)
    }
    async clickOnSubmitBtn() {
        await this.submitBtn.click()
        report.addStep(`performed click on : ${await this.submitBtn.selector}`)
    }
    async clickToRedirectDashboard() {
        await this.homeBtn.click()
        report.addStep(`performed click on : ${await this.homeBtn.selector}`)
    }
}
export default new SupplierPage()