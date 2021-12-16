import faker from "faker"

class AdminPage{
    //get customerElement(){ return $("//a[@href='https://phptravels.net/api/admin/accounts/customers/']//div")}
    get adminBtn(){return $("//*[@id='content']/div[2]/div[3]/div/div[1]/a/div")}
    async clickonAdminTab(){
        await this.adminBtn.click()
    }
    get pageHeader(){return $("//div[text()='Admins Management']")}
    get addAdmin(){ return $("//button[@type='submit']")}
    async clickOnAddAdminBtn(){
        await this.addAdmin.click()
    }
    get firstName(){return $("//input[@name='fname']")}
    get lastName(){return $("//input[@name='lname']")}
    get email(){return $("//input[@name='email']")}
    get password(){return $("//input[@name='password']")}
    get mobileNo(){return $("//input[@name='mobile']")}
    get address1(){return $("//input[@name='address1']")}
    get address2(){return $("//input[@name='address2']")}
    get balance(){return $("//input[@name='balance']")}
    get countryDropDown(){return $("//*[@id='select2-drop']/ul/li[4]/div/span")}
    //get dropDown(){return $("//*[@id='select2-drop-mask']")}
    //get selectDropDown(){return $(".select2-search")}
    //get dropDown(){return $(".select2-search")}
    get submitBtn(){return $("//button[text()='Submit']")}
    get successMsg(){return $("//h4[@class='ui-pnotify-title']")}
    get dashboardBtn(){return $("//a[@href='https://phptravels.net/api/admin']")}
    async setFirstAndLastName(adminnames:{firstName:string, lastName:string}){
        await this.firstName.setValue(adminnames.firstName)
        await this.lastName.setValue(adminnames.lastName)
    }
    async emailAddress() {
        const email = faker.internet.email();
        console.log(email);
        await this.email.setValue(email);
    }
    async setPassword(password: string) {
            await this.password.setValue(password)
        }
    async setAddress(adminaddress:{MobileNo:string,Address1:string, Address2:string}){
        await this.mobileNo.setValue(adminaddress.MobileNo)
        await this.address1.setValue(adminaddress.Address1)
        await this.address1.setValue(adminaddress.Address1)
    }
    async setMainSettings(adminmainSettings:{balance:string}){
        await this.balance.setValue(adminmainSettings.balance)
    }
    async clickForCountry(){
        await this.countryDropDown.waitForClickable()
        await this.countryDropDown.selectByVisibleText("Algeria")
    }
    async clickOnSubmitBtn(){
        await this.submitBtn.click()
    }
}
export default new AdminPage()