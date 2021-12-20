import faker from "faker"
import Data from "../test-data/data.json"

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
    get dropDown() { return $("//span[text()='Please Select']") }
    get itemName() {return $("//input[@name='itemname']")}
    get comission() { return $("//input[@name='commission']S") }
    get balance() { return $("//input[@name='balance']") }
    get addCars() { return $("//input[@value='addCars']") }
    get addHotels() { return $("//input[@value='addHotels']") }
    get assignHotel() { return $("//div[@id='s2id_autogen3']/ul") }
    get assignTours() { return $("//div[@id='s2id_autogen5']/ul") }
    get assignCars() { return $("//div[@id='s2id_autogen7']/ul") }
    get submitBtn() { return $("//button[text()='Submit']") }
    get successMsg() { return $("//h4[@class='ui-pnotify-title']") }
    get homeBtn() { return $("//a[@href='https://phptravels.net/api/admin']") }
    async clickOnSuppliers() {
        this.suppliers.click()
    }
    async clickOnAddSupplier() {
        this.addSupplier.click()
    }
    async setFirstAndLastName(firstName:any, lastName:any) {
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
    }
    async emailAddress() {
        const email = faker.internet.email();
        console.log(email);
        await this.email.setValue(email);
    }
    async setPassword(password:any) {
        await this.password.setValue(password)
    }
    async setMobileNo(phoneNumber:any) {
        await this.mobileNo.setValue(phoneNumber)
    }
    get dropDownSearchBox(){return $(".select2-input")}
    get allCountriesOption(){return $$(".select2-results>li>div")}
    async clickOnCountry() {
        await this.dropDown.click()
        await this.dropDownSearchBox.setValue(Data.supplierCountry.setValue)
        await this.allCountriesOption.forEach(async(option)=>{
            const countryName=await option.getText()
            if(countryName=="India"){
                await option.click()
            }
        })
    }
    async setAddress(city:string, state:string) {
        await this.address1.setValue(city)
        await this.address2.setValue(state)
    }
    async setMainSettings(comission: string, balance: string) {
        await this.comission.scrollIntoView()
        await this.comission.setValue(comission)
        await this.balance.setValue(balance)
    }
    async clickCarsCheckBox() {
        await this.addCars.click()
    }
    async clickHotelsCheckBox() {
        await this.addHotels.click()
    }
    async assignHotelDropDown() {
        await this.assignHotel.selectByVisibleText(Data.assignHotel)
    }
    async assignToursDropDown() {
        await this.assignTours.selectByVisibleText(Data.assignTours)
    }
    async assignCarsDropDown() {
        await this.assignCars.selectByVisibleText(Data.assignCars)
    }
    async clickOnSubmitBtn() {
        await this.submitBtn.click()
    }
    async clickToRedirectDashboard() {
        await this.homeBtn.click()
    }
}
export default new SupplierPage()