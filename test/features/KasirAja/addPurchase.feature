Feature: Add a New Purchase in KasirAja Website

 Scenario Outline: As a user, I can add a new Purchase Transaction in KasirAja Website

    Given I in page login website KasirAja
    When I input email : <email>
    When I input password : <password>
    Then I click login button
    When I click menu Purchases
    When I click button add Purchase
    When I click button product
    When I search product <productCode>
    When I click product <productCode>
    Then I verify product <productCode> in Create Purchases page KasirAja
    When I input quantity <productQuantity> 
    When I input notes <Notes>
    Then I click save button

Examples:
| email                 | password | productCode | productQuantity | Notes                                | 
| diah.hikmah@gmail.com | tokodiah | NSL202302   | 175             | Pembelian_NSL202302_sebesar_175_buah | 