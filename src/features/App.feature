Scenario: User submits asteroid ID
Given the user is on the Nasa App page
When the user enters "2021277" in the asteroid ID input field
And clicks on the submit button
Then the user should see the asteroid details
And the asteroid details should include the name "21277 (1996 TO5)"
And the asteroid details should include the NASA JPL URL "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2021277"
And the asteroid details should include the potentially hazardous status "No"

Scenario: User clicks on random asteroid button
Given the user is on the Nasa App page
When the user clicks on the "Random Asteroid" button
Then the user should see the asteroid details
And the asteroid details should include the name of the asteroid
And the asteroid details should include the NASA JPL URL
And the asteroid details should include the potentially hazardous status.

