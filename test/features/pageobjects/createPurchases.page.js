

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class createPurchasesPage extends Page {
    /**
     * define selectors using getter methods
     */

    

    get containInAddPurchases () {
        return $("//*[contains(text(), 'dashboard / pembelian / baru')]") ;
    }

    get popupProducts () {
        return $("#root > div > div > div > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > div.css-1xhj18k > button") ;
    }

    get assertPopupProducts () {
        return $("//*[contains(text(), 'produk')]") ;
    }

    get inputSearchProduk () {
        return $('.css-0 > .chakra-input__group > .chakra-input');
    }

    get chooseProduct () {
        return $("//*[contains(text(), 'NSL202302')]");
    }

    get addQuantity () {
        return $(":nth-child(4) > .chakra-input");
    }

    get addNote () {
        return $(".chakra-textarea");
    }

    get saveButton () {
        return $(".css-0 > .chakra-button");
    }

    // functions
    async clickMenuAddPurchases () {
        await this.btnMenuTambahPurchases.click();
    }

    async containInAddPurchases () {
        await this.containInAddPurchases.isDisplayed();
    }

    async addNewProduct () {
        await this.popupProducts.click();
        await this.assertPopupProducts.isDisplayed();
        await this.chooseProduct.click();
    }

    async detailNewPurchase () {
        await this.chooseProduct.isDisplayed();
        await this.addQuantity.clearValue().addValue('175');
        await this.addNote.addValue('Pembelian NSL202302 sebesar 175 buah')
    }

    async saveNewPurchase () {
        await this.saveButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('purchases/create');
    }
}

export default new createPurchasesPage();
