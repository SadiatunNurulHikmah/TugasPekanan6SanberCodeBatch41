Feature: Get a Detail of Purchase by No. Invoice in KasirAja Website

 Scenario Outline: As a user, I can view detail of Purchase Transaction by No. Invoice in KasirAja Website

    Given I in page login website KasirAja
    When I input email : <email>
    When I input password : <password>
    Then I click login button
    When I click menu Purchases
    When I search No Invoice =  <noInvoice>
    When I click button detail
    Then I in Detail Purchases Page in KasirAja Website

Examples:
| email                 | password | productCode | productQuantity | Notes                                | productName      | penerima  | noInvoice                | productPrice | subTotalAmount | totalAmount |
| diah.hikmah@gmail.com | tokodiah | NSL202302   | 175             | Pembelian_NSL202302_sebesar_175_buah | Nescafe Original | toko diah | INV/22/1/2023/1677063902 | 8600         | 1505000        | 1505000     |