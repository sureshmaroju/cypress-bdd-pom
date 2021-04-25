class ProductPage {
   /**
    * @author Suresh Chary Maroju
    *
    * Webelements
    */
    getViewProductDescriptionCTA() {
        return cy.get("#skip-link--product-details")
    }

    getIncreaseQuanityCTA() {
        return cy.get(".quantity-increase-button")
    }

    getAddToBasketButton() {
        return cy.get("#button--add-to-basket")
    }

    getBasketAmount() {
        return cy.get('[data-test="basket-amount"]')
    }

    getAddToBasketConfirmationMessage () {
        return cy.get('.add-to-basket-add-on')
    }
}

export default ProductPage