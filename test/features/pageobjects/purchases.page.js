

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchasesPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnMenuTambahPurchases () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div.css-1t33j5j > a');
    }

    get containInPurchases () {
        return $("//*[contains(text(), 'dashboard / pembelian')]") ;
    }

    get searchInvoice () {
        return $('/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/input')
    }

    get btnDetail () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div.css-1t33j5j > table > tbody > tr > td:nth-child(5) > a')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickMenuPurchases () {
        await this.btnMenuPembelian.click();
    }
    
    async containInPurchases () {
        await this.containInPurchases.isDisplayed();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('purchases');
    }
}

export default new PurchasesPage();
