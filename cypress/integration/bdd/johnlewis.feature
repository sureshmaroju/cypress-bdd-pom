#Author: Suresh Chary Maroju

Feature: John Lewis Product search and add to basket

    This feature performs below operaions on John Lewis website
    accepts the cookie banner
    browses for any product or products(s) of your choice
    selects multiple quantities of that product or product(s)
    adds the selected product to basket
    deletes product or products(s) quantities from the basket
    clears cookies at the end of the test

    @search @basket
    Scenario: As a user, I want to search a product and add it to basket
    Given I Open John Lewis website
    And I accept the cookie banner
    When I browse a product "rocking horse"
    Then list of products should be displayed
    When I click on first product
    Then I should navigate to product info page
    When I increase quantity and click on Add to your basket
    Then product should be added to basket
    When I click on go to basket
    Then I should navigate to your basket page
    When I remove items from basket
    Then basket should be empty
    When I clear the cookies
    Then cookies should be deleted