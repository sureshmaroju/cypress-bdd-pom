class SearchResultsPage {
   /**
    * @author Suresh Chary Maroju
    *
    * Webelements
    */
    getListOfResults() {
        return cy.get('[data-test="component-grid-container"] [data-test="component-grid-column"]')
    }

    getProducts() {
        return cy.get('[data-test="product-image-container"]')
    }

    getProductNotFoundMessage() {
        return cy.get('[data-test="heading-term"]')
    }
}
export default SearchResultsPage