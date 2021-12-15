Feature: Automate PHPTRAVELS Page
    Feature Description
    Scenario: Login with a valid credentials
        Given I would be landing on "https://phptravels.net/api/admin"
        When I enter valid credentials and enter login
        Then I should land on admin page
    Scenario: Managing the customer details
        When I land on admin dashboard and click on customers
        Then I should land "CUSTOMERS MANGEMENT" page
        When I click on add customer and enter all required details