import faker from "faker"

class CustomerPage {
    get customerBtn() { return $("//*[@id='content']/div[2]/div[3]/div/div[4]/a/div") }
    async clickomCustomerTab() {
        await this.customerBtn.click()
    }
    get addCustomerElement() { return $("//button[@type='submit']") }
    async clickOnAddCustomerBtn() {
        await this.addCustomerElement.click()
    }
    get firstName() { return $("//input[@name='fname']") }
    get lastName() { return $("//input[@name='lname']") }
    get email() { return $("//input[@name='email']") }
    get password() { return $("//input[@name='password']") }
    get mobileNo() { return $("//input[@name='mobile']") }
    get address1() { return $("//input[@name='address1']") }
    get address2() { return $("//input[@name='address2']") }
    get balance() { return $("//input[@name='balance']") }
    get dropDown() { return $("//span[text()='Please Select']") }
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
    async setMobileNumber() {
        await this.mobileNo.setValue(faker.phone.phoneNumber())
    }
    get dropDownSearchBox(){return $(".select2-input")}
    get allCountriesOption(){return $$(".select2-results>li>div")}
    async clickOnCountry() {
        await this.dropDown.click()
        await this.dropDownSearchBox.setValue("India")
        await this.allCountriesOption.forEach(async(option)=>{
            const countryName=await option.getText()
            if(countryName=="India"){
                await option.click()
            }
        })
    }
    
    async setAddress() {
        await this.address1.setValue(faker.address.city())
        await this.address2.setValue(faker.address.state())
    }
    async setMainSettings(customermainSettings: { balance: string }) {
        await this.balance.setValue(customermainSettings.balance)
    }
    async clickOnSubmitBtn() {
        await this.submitBtn.click()
    }
    async clickOnDashboard() {
        await this.dashboardBtn.click()
    }

}
export default new CustomerPage()