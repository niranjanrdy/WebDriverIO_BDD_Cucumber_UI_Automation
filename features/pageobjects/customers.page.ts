import faker from "faker"

class CustomerPage{
    //get customerElement(){ return $("//a[@href='https://phptravels.net/api/admin/accounts/customers/']//div")}
    get customerBtn(){return $("//*[@id='content']/div[2]/div[3]/div/div[4]/a/div")}
    async clickomCustomerTab(){
        await this.customerBtn.click()
    }
    get addCustomerElement(){ return $("//button[@type='submit']")}
    async clickOnAddCustomerBtn(){
        await this.addCustomerElement.click()
    }
    get firstName(){return $("//input[@name='fname']")}
    get lastName(){return $("//input[@name='lname']")}
    get email(){return $("//input[@name='email']")}
    get password(){return $("//input[@name='password']")}
    get mobileNo(){return $("//input[@name='mobile']")}
    get address1(){return $("//input[@name='address1']")}
    get address2(){return $("//input[@name='address2']")}
    get balance(){return $("//input[@name='balance']")}
    get dropDown(){return $("//*[@id='select2-drop']/ul/li[4]/div/span")}
    //get dropDown(){return $("//*[@id='select2-drop-mask']")}
    //get selectDropDown(){return $(".select2-search")}
    //get dropDown(){return $(".select2-search")}
    get submitBtn(){return $("//button[text()='Submit']")}
    get successMsg(){return $("//h4[@class='ui-pnotify-title']")}
    get dashboardBtn(){return $("//a[@href='https://phptravels.net/api/admin']")}
    async setFirstAndLastName(customernames:{firstName:string, lastName:string}){
        await this.firstName.setValue(customernames.firstName)
        await this.lastName.setValue(customernames.lastName)
    }
    async emailAddress() {
        const email = faker.internet.email();
        console.log(email);
        await this.email.setValue(email);
    }
    async setPassword(password: string) {
            await this.password.setValue(password)
        }
    async setAddress(customeraddress:{MobileNo:string,Address1:string, Address2:string}){
        await this.mobileNo.setValue(customeraddress.MobileNo)
        await this.address1.setValue(customeraddress.Address1)
        await this.address1.setValue(customeraddress.Address1)
    }
    async setMainSettings(customermainSettings:{balance:string}){
        await this.balance.setValue(customermainSettings.balance)
    }
    async clickOnCountry(){
        await this.dropDown.waitForClickable()
        await this.dropDown.selectByVisibleText("Algeria")
    }
    async clickOnSubmitBtn(){
        await this.submitBtn.click()
    }
    async clickOnDashboard(){
        await this.dashboardBtn.click()
    }

}
export default new CustomerPage()