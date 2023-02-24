

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchasesDetailPage extends Page {
    /**
     * define selectors using getter methods
     */


    get assertPenerima () {
        return $('#penerima');
    }

    get assertNoInvoice () {
        return $('//*[@id="no. invoice"]');
    }

    get assertNote () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-zebbu0 > div > div > textarea');
    }

    get assertProductCode () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > table > tbody > tr > td:nth-child(1)');
    }

    get assertProductName () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > table > tbody > tr > td:nth-child(2)');
    }

    get assertProductPrice () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > table > tbody > tr > td:nth-child(3)');
    }

    get assertProductQuantity () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > table > tbody > tr > td:nth-child(4)');
    }

    get assertSubtotal () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > table > tbody > tr > td:nth-child(5)');
    }

    get assertTotal () {
        return $('#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > div > div:nth-child(2) > h2') ;
    }

    get containInPurchasesDetail () {
        return $("//*[contains(text(), 'dashboard / pembelian / detail')]") ;
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async containInPurchasesDetailPage () {
        await this.containInPurchasesDetail.isDisplayed();
    }

    async assertDetailPurchaseProduct (penerima, noInvoice, Notes, productCode, productName, productPrice, productQuantity, subTotalAmount, totalAmount) {
        await this.assertPenerima.isEqual(penerima);
        await this.assertNoInvoice.isEqual(noInvoice);
        await this.assertNote.isEqual(Notes);
        await this.assertProductCode.isEqual(productCode);
        await this.assertProductName.isEqual(productName);
        await this.assertProductPrice.isEqual(productPrice);
        await this.assertProductQuantity.isEqual(productQuantity);
        await this.assertSubtotal.isEqual(subTotalAmount);
        await this.assertTotal.isEqual(totalAmount);
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('purchases/detail');
    }
}

export default new PurchasesDetailPage();
