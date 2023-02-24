

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get containInDasboard () {
        return $("//*[contains(text(), 'hai')]") ;
    }

    get btnMenuPenjualan () {
        return $('[href="/sales"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q');
    }

    get btnMenuPembelian () {
        return $('[href="/purchases"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async containInDasboard () {
        await this.containInDasboard.isDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dashboard');
    }
}

export default new DashboardPage();
