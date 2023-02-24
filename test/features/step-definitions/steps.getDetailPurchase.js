import { Given, When, Then} from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import dashboardPage from '../pageobjects/dashboard.page';
import purchasesPage from '../pageobjects/purchases.page';
import detailPurchasesPage from '../pageobjects/detailPurchases.page';


Given(/^I in page login website KasirAja/, async () => {
    await LoginPage.open()
})

When(/^I input email : (\w+)/, async (email) => {
    await LoginPage.inputEmail.setValue('diah.hikmah@gmail.com')
})

When(/^I input password : (\w+)/, async (password) => {
    await LoginPage.inputPassword.setValue(password)
})

Then(/^I click login button/, async () => {
    await LoginPage.btnSubmitLogin.click()
})

When (/^I click menu Purchases/, async () => {
    await dashboardPage.btnMenuPembelian.click();
    await browser.pause(5000);
})

When (/^I search No Invoice =  (\w+)/, async (noInvoice) => {
    await purchasesPage.searchInvoice.setValue('INV/22/1/2023/1677063902');
    await browser.pause(5000);
})

When (/^I click button detail/, async () => {
    await purchasesPage.btnDetail.click();
    await browser.pause(5000);
})

Then (/^I in Detail Purchases Page in KasirAja Website/, async() => {
    await detailPurchasesPage.open();
    await detailPurchasesPage.containInPurchasesDetailPage;  
})