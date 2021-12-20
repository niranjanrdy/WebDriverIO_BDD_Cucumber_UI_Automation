import Data from "../test-data/data.json"
import report from '@wdio/allure-reporter'

class CustomerPage {
    get customerBtn() { return $("//*[@id='content']/div[2]/div[3]/div/div[4]/a/div") }
    async clickomCustomerTab() {
        await this.customerBtn.click()
        report.addStep(`performed click on : ${await this.customerBtn.selector}`)
    }
    get addCustomerElement() { return $("//button[@type='submit']") }
    async clickOnAddCustomerBtn() {
        await this.addCustomerElement.click()
        report.addStep(`performed click on : ${await this.addCustomerElement.selector}`)
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
    async setFirstAndLastName(firstName:any, lastName:any) {
        await this.firstName.setValue(firstName)
        report.addStep(`firstName set to : ${firstName}`)
        await this.lastName.setValue(lastName)
        report.addStep(`lastName set to : ${lastName}`)
    }
    async setPassword(password:any) {
        await this.password.setValue(password)
        report.addStep(`password is set to : ${password}`)
    }
    async setMobileNumber(phoneNumber:any) {
        await this.mobileNo.setValue(phoneNumber)
        report.addStep(`phoneNumber given as : ${phoneNumber}`)
    }
    get dropDownSearchBox(){return $(".select2-input")}
    get allCountriesOption(){return $$(".select2-results>li>div")}
    async clickOnCountry(customerCountry:string) {
        await this.dropDown.click()
        report.addStep(`performed click on : ${await this.dropDown.selector}`)
        await this.dropDownSearchBox.setValue(customerCountry)
        report.addStep(`value is set to : ${customerCountry}`)
        await this.allCountriesOption.forEach(async(option)=>{
            const countryName=await option.getText()
            if(countryName==customerCountry){
                await option.click()
            }
        })
    }
    
    async setAddress(city:string, state:string) {
        await this.address1.setValue(city)
        report.addStep(`address city is set to : ${city}`)
        await this.address2.setValue(state)
        report.addStep(`address state is set to : ${state}`)
    }
    async setMainSettings(balance: string) {
        await this.balance.scrollIntoView()
        await this.balance.setValue(balance)
        report.addStep(`balance is set to : ${balance}`)
    }
    async clickOnSubmitBtn() {
        await this.submitBtn.click()
        report.addStep(`performed click on : ${await this.submitBtn.selector}`)
    }
    async clickOnDashboard() {
        await this.dashboardBtn.click()
        report.addStep(`performed click on : ${await this.dashboardBtn.selector}`)
    }

}
export default new CustomerPage()