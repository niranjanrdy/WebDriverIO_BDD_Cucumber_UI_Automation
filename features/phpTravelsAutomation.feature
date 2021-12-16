Feature: Automate PHPTRAVELS Page
    Feature Description
    Scenario: Login with a valid credentials
        Given I would be landing on "https://phptravels.net/api/admin"
        When I enter valid credentials and enter login
        Then I should land on "Management Tools" page
    Scenario: Managing the customer details
        When I land on admin dashboard and click on customers
        Then I should land "customers" page
        When I click on add customer and enter all required details
        Then I should get the success msg "CHANGES SAVED"
    Scenario: Supplier Management
        When I click on suppliers page
        Then I should land on "SUPPLIERS MANAGEMENT" page
        When I click on add button to add new supplier
        And I enter all the fields and checkboxes
        Then The success msg "CHANGES SAVED" will be prompted
    Scenario: Admin Management
        When I click on admin tab
        Then I should land on "ADMINS MANAGEMENT" 
        When I click on add admin button
        And I enter all the fields 
        Then Success messeage as "CHANGES SAVED" would be displayed 
