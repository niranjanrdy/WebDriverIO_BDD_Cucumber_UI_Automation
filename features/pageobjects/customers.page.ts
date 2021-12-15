import Data from "../test-data/data.json"
class CustomerPage{
    get customerElement(){ return $("//a[@href='https://phptravels.net/api/admin/accounts/customers/']//div")}
    async clickomCustomerTab(){
        await this.customerElement.click()
    }
    get addCustomerElement(){ return $("//button[@type='submit']")}
    async clickOnAddCustomerBtn(){
        await this.addCustomerElement.click()
    }
}
export default new CustomerPage()