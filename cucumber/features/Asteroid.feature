Feature: Asteroid Input Form

Scenario: User enters Asteroid ID and submits the form
Given I am on the Nasa App page
When I enter "2021277" in the Asteroid ID input field
And I click the Submit button
Then I should see the Asteroid details
And the Name should be "21277 (1996 TO5)"
And the Nasa JPL URL should be "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2021277"
And the Is Potentially Hazardous Asteroid should be "No"

Scenario: User clicks the Random Asteroid button
Given I am on the Nasa App page
When I click the Random Asteroid button
Then I should see the Asteroid details
And the Name should not be empty
And the Nasa JPL URL should not be empty
And the Is Potentially Hazardous Asteroid should be either "Yes" or "No"