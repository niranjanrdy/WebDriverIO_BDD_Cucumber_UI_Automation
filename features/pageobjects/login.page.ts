import Data from "../test-data/data.json";
import report from '@wdio/allure-reporter'
class LoginPage {
    async openPage(url: string) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
    get loginPageHeader() { return ("//h2") }
    get userName() { return $("//input[@type='text']") }
    get password() { return $("//input[@placeholder='Password']") }
    get loginBtn() { return $("//button[@type='submit']") }
    get adminPageHeader() { return ("//p[@class='serverHeader__title']") }
    async enterCredintials(credentials:{userName:string, password:string}) {
        await this.userName.setValue(credentials.userName)
        report.addStep(`entered userName: ${credentials.userName}`)
        await this.password.setValue(credentials.password)
        report.addStep(`entered password: ${credentials.password}`)
    }
    async clickLoginButton() {
        await this.loginBtn.click()
        report.addStep(`performed click on : ${await this.loginBtn.selector}`)
    }


}
export default new LoginPage()