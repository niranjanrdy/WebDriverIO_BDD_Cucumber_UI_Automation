import Data from "../test-data/data.json";
class LoginPage {
    async openPage(url: string) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
    get loginPageHeader() { return ("//h2") }
    get userNameElement() { return $("//input[@type='text']") }
    get passwordElement() { return $("//input[@placeholder='Password']") }
    get loginButtonElement() { return $("//button[@type='submit']") }
    get adminPageHeader() { return ("//h2[text()='Management Tools']") }
    async enterCredintials() {
        await this.userNameElement.setValue(Data.credentials.UserName);
        await this.passwordElement.setValue(Data.credentials.Password);
    }
    async clickLoginButton() {
        await this.loginButtonElement.click()
    }
    

}
export default new LoginPage()