import Data from "../test-data/data.json"

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
    async setFirstAndLastName(firstName:any, lastName:any) {
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
    }
    async setPassword(password:any) {
        await this.password.setValue(password)
    }
    async setMobileNumber(phoneNumber:any) {
        await this.mobileNo.setValue(phoneNumber)
    }
    get dropDownSearchBox(){return $(".select2-input")}
    get allCountriesOption(){return $$(".select2-results>li>div")}
    async clickOnCountry() {
        await this.dropDown.click()
        await this.dropDownSearchBox.setValue(Data.customerCountry.setValue)
        await this.allCountriesOption.forEach(async(option)=>{
            const countryName=await option.getText()
            if(countryName==Data.customerCountry.setValue){
                await option.click()
            }
        })
    }
    
    async setAddress(city:string, state:string) {
        await this.address1.setValue(city)
        await this.address2.setValue(state)
    }
    async setMainSettings(balance: string) {
        await this.balance.scrollIntoView()
        await this.balance.setValue(balance)
    }
    async clickOnSubmitBtn() {
        await this.submitBtn.click()
    }
    async clickOnDashboard() {
        await this.dashboardBtn.click()
    }

}
export default new CustomerPage()