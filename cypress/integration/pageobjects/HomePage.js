class HomePage {
    
    /**
    * @author Suresh Chary Maroju
    *
    * Webelements
    */
    getSearchBox() {
        return cy.get('#mobileSearch')
    }

    getSearchButton() {
        return cy.get('button[class*="button.module-c-button"][type="submit"]')
    }

    getCookiesAllowAllButton() {
        return cy.get('button[data-test="allow-all"]')
    }
}
export default HomePage