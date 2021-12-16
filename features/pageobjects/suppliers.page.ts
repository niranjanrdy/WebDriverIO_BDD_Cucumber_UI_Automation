import faker from "faker"

class SupplierPage{
    get suppliers(){ return $("//a[@href='https://phptravels.net/api/admin/accounts/suppliers/']//div")}
    get pageHeader(){return $("//div[text()='Suppliers Management']")}
    get addSupplier(){return $("//button[@type='submit']")}
    get firstName(){return $("//input[@name='fname']")}
    get lastName(){return $("//input[@name='lname']")}
    get email(){return $("//input[@name='email']")}
    get password(){return $("//input[@name='password']")}
    get mobileNo(){return $("//input[@name='mobile']")}
    get address1(){return $("//input[@name='address1']")}
    get address2(){return $("//input[@name='address2']")}
    get dropDown(){return $("//*[@id='select2-drop']/ul/li[4]/div/span")}
    get comission(){return $("//input[@name='commission']S")}
    get balance(){return $("//input[@name='balance']")}
    get addCars(){return $("//input[@value='addCars']")}
    get addHotels(){return $("//input[@value='addHotels']")}
    get assignHotel(){return $("//div[@id='s2id_autogen3']/ul")}
    get assignTours(){return $("//div[@id='s2id_autogen5']/ul")}
    get assignCars(){return $("//div[@id='s2id_autogen7']/ul")}
    get submitBtn(){return $("//button[text()='Submit']")}
    get successMsg(){return $("//h4[@class='ui-pnotify-title']")}
    get homeBtn(){return $("//a[@href='https://phptravels.net/api/admin']")}
    async clickOnSuppliers(){
        this.suppliers.click()
    }
    async clickOnAddSupplier(){
        this.addSupplier.click()
    }
    async setFirstAndLastName(suppliernames:{firstName:string, lastName:string}){
        await this.firstName.setValue(suppliernames.firstName)
        await this.lastName.setValue(suppliernames.lastName)
    }
    async emailAddress() {
        const email = faker.internet.email();
        console.log(email);
        await this.email.setValue(email);
    }
    async setPassword(password: string) {
        await this.password.setValue(password)
    }
    async setAddress(supplieraddress:{MobileNo:string,Address1:string, Address2:string}){
        await this.mobileNo.setValue(supplieraddress.MobileNo)
        await this.address1.setValue(supplieraddress.Address1)
        await this.address1.setValue(supplieraddress.Address1)
    }
    async selectCountry(){
        await this.dropDown.waitForClickable()
        await this.dropDown.selectByVisibleText("Algeria")
    }
    async setMainSettings(suppliermainSettings:{comission:string, balance:string}){
        await this.balance.setValue(suppliermainSettings.comission)
        await this.balance.setValue(suppliermainSettings.balance)
    }
    async clickCarsCheckBox() {
        await this.addCars.click()
    }
    async clickHotelsCheckBox(){
        await this.addHotels.click()
    }
    async assignHotelDropDown(){
        await this.assignHotel.selectByVisibleText("Malmaison Manchester")
    }
    async assignToursDropDown(){
        await this.assignTours.selectByVisibleText("6 Days Around Thailand")
    }
    async assignCarsDropDown(){
        await this.assignCars.selectByVisibleText("Ford Mondeo 2012")
    }
    async clickOnSubmitBtn(){
        await this.submitBtn.click()
    }
    async clickToRedirectDashboard(){
        await this.homeBtn.click()
    }
}
export default new SupplierPage()