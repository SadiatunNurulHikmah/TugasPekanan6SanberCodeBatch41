import { Given, When, Then} from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import dashboardPage from '../pageobjects/dashboard.page';
import purchasesPage from '../pageobjects/purchases.page';
import createPurchasesPage from '../pageobjects/createPurchases.page';



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
    //await purchasesPage.open();
    await browser.pause(5000);
})

When (/^I click button add Purchase/, async () => {
    await purchasesPage.btnMenuTambahPurchases.click();
    //await addPurchasesPage.open();
    await browser.pause(5000);
})

When (/^I click button product/, async () => {
    await createPurchasesPage.popupProducts.click();
})

When (/^I search product (\w+)/, async (productCode) => {
    await createPurchasesPage.inputSearchProduk.setValue(productCode);
})

When (/^I click product (\w+)/, async (productCode) => {
    await createPurchasesPage.chooseProduct.click();
})

Then (/^I verify product (\w+) in Create Purchases page KasirAja/, async (productCode) => {
    await createPurchasesPage.chooseProduct.isDisplayed();
})

When (/^I input quantity (\w+)/, async (productQuantity) => {
    await createPurchasesPage.addQuantity.setValue(productQuantity);
})

When (/^I input notes (\w+)/, async (Notes) => {
    await createPurchasesPage.addNote.setValue(Notes);
})

Then (/^I click save button/, async () => {
    await createPurchasesPage.saveButton.click();
    await browser.pause(5000);
})