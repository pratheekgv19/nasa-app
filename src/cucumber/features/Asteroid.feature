Feature: Asteroid Input Form

  Scenario: User enters valid Asteroid ID and submits form
    Given the user is on the Asteroid Input page
    When the user enters "3553063" in the input field
    And the user clicks the submit button
    Then the user should see details about the asteroid "3553063"

  Scenario: User enters invalid Asteroid ID and submits form
    Given the user is on the Asteroid Input page
    When the user enters "invalid-id" in the input field
    And the user clicks the submit button
    Then the user should see an error message

  Scenario: User clicks the Random Asteroid button
    Given the user is on the Asteroid Input page
    When the user clicks the Random Asteroid button
    Then the user should see details about a random asteroid

  Scenario: User enters nothing and submits form
    Given the user is on the Asteroid Input page
    When the user clicks the submit button without entering anything
    Then the submit button should be disabled


    
# Feature: Asteroid Input Form

# Scenario: User enters Asteroid ID and submits the form
# Given I am on the Nasa App page
# When I enter "2021277" in the Asteroid ID input field
# And I click the Submit button
# Then I should see the Asteroid details
# And the Name should be "21277 (1996 TO5)"
# And the Nasa JPL URL should be "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2021277"
# And the Is Potentially Hazardous Asteroid should be "No"

# Scenario: User clicks the Random Asteroid button
# Given I am on the Nasa App page
# When I click the Random Asteroid button
# Then I should see the Asteroid details
# And the Name should not be empty
# And the Nasa JPL URL should not be empty
# And the Is Potentially Hazardous Asteroid should be either "Yes" or "No"