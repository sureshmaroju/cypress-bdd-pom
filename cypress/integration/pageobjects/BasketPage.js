class BasketPage {

    /**
    * @author Suresh Chary Maroju
    *
    * Webelements
    */
    getRemoveItemCTA() {
        return cy.get(".remove-basket-item-form-button")
    }

    getBasketEmptyMessage() {
        return cy.get('.basket-empty .u-centred')
    }

}
export default BasketPage