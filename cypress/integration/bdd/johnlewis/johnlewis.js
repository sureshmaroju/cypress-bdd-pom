/// <reference types='Cypress' />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { times } from 'lodash';
import HomePage from '../../pageobjects/HomePage';
import SearchResultsPage from '../../pageobjects/SearchResultsPage';
import ProductPage from '../../pageobjects/ProductPage';
import BasketPage from '../../pageobjects/BasketPage';
   /**
    * @author Suresh Chary Maroju
    *
    */
const homePage = new HomePage();
const searchResultsPage = new SearchResultsPage();
const productPage = new ProductPage();
const basketPage = new BasketPage();

const noOfQuantity = 2;
let cookiesSize;

   /**
    * Step definitions
    *
    */
Given(`I Open John Lewis website`, () => {
  cy.visit(Cypress.env('url'));
});

Given(`I accept the cookie banner`, () => {
  homePage.getCookiesAllowAllButton().click();
});

When(`I browse a product {string}`, (product) => {
  homePage.getSearchBox().type(product);
  homePage.getSearchButton().click();
});

Then(`list of products should be displayed`, () => {
  cy.title().should('include', 'Search results for');

  searchResultsPage.getListOfResults().its('length').should('be.gt', 0);
});

When(`I click on first product`, () => {
  searchResultsPage.getProducts().first().click();
});

Then(`I should navigate to product info page`, () => {
  productPage.getViewProductDescriptionCTA().should('be.visible');
});

When(`I increase quantity and click on Add to your basket`, () => {
  times(noOfQuantity, () => {
    productPage.getIncreaseQuanityCTA().click();
  });

  productPage
    .getAddToBasketButton()
    .trigger('mouseover')
    .click({ force: true });
  cy.wait(2000);
});

Then(`product should be added to basket`, () => {
  let basketValue = noOfQuantity + 1;
  productPage.getBasketAmount().should('have.text', basketValue.toString());
  productPage
    .getAddToBasketConfirmationMessage()
    .should('contain', `${basketValue.toString()} x `);
});

When(`I click on go to basket`, () => {
  cy.get('.add-to-basket-view-basket-link')
    .trigger('mouseover')
    .click({ force: true });
});

Then(`I should navigate to your basket page`, () => {
  cy.title().should('include', 'Your basket | John Lewis & Partners');
});

When(`I remove items from basket`, () => {
  basketPage.getRemoveItemCTA().click();
});

Then(`basket should be empty`, () => {
  basketPage.getBasketEmptyMessage().should('contain', 'Your basket is empty.');
});

When(`I clear the cookies`, () => {
  cy.getCookies().then((cookies) => {
    cookiesSize = cookies.length;
  });
  cy.clearCookies({ timeout: 30000 });
});

Then(`cookies should be deleted`, () => {
  cy.getCookies({ timeout: 10000 }).then((cookies) => {
    expect(cookies.length).to.be.lt(cookiesSize);
  });
});
