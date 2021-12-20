import report from '@wdio/allure-reporter'
class LoginPage {
    async openPage(url: string) {
        await browser.url(url);
        report.addStep(`invoking the URL: ${url}`)
        await browser.maximizeWindow();
        report.addStep("maximized the window")
    }
    get loginPageHeader() { return ("//h2") }
    get userName() { return $("//input[@type='text']") }
    get password() { return $("//input[@placeholder='Password']") }
    get loginBtn() { return $("//button[@type='submit']") }
    get adminPageHeader() { return ("//p[@class='serverHeader__title']") }
    async enterCredintials(credentials: { userName: string, password: string }) {
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