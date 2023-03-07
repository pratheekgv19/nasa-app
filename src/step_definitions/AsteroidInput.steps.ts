import { defineFeature, loadFeature } from 'jest-cucumber';
import { Matcher, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('E:/Cognitiviclouds/Assignments/nasa-app/src/cucumber/features/Asteroid.feature');
type asteroidProps = {
  name: string;
  url: string;
  hazardous: boolean;
};

defineFeature(feature, test => {
  test('User enters valid Asteroid ID and submits form', ({ given, when, and, then }) => {
    given('the user is on the Asteroid Input page', () => {
      // render(<AsteroidInput />);
    });

    const asteroidData: asteroidProps = {
      name: "hight Rock",
      url: "test_url",
      hazardous: true,
    }

    when(/^the user enters (.*) in the input field$/, async (input) => {
      const inputField = screen.getByTestId('asteroid-id-input');
      userEvent.type(inputField, input);

      const submitBtn = screen.getByTestId('submit-button');
      userEvent.click(submitBtn);

      // Commented out the original fetch call
      // const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${input}?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
      // const asteroidData = await response.json();

      // Used the mocked response instead of fetching data from the API
      const response = asteroidData;

      // Find the asteroid data and render it
      const asteroidNameElement = screen.getByText(response.name);
      expect(asteroidNameElement).toBeInTheDocument();
    });
  });
});




// defineFeature(feature, test => {
//   test('User enters valid Asteroid ID and submits form', ({given,when,and,then}) => {
//     given('the user is on the Asteroid Input page', () => {

//     });

//     when(/^the user enters (.*) in the input field$/, (arg0) => {

//     });

//     and('the user clicks the submit button', () => {

//     });

//     then(/^the user should see details about the asteroid (.*)$/, (arg0) => {

//     });
//   });
//   test('User enters invalid Asteroid ID and submits form', ({
//     given,
//     when,
//     and,
//     then
//   }) => {
//     given('the user is on the Asteroid Input page', () => {

//     });

//     when(/^the user enters (.*) in the input field$/, (arg0) => {

//     });

//     and('the user clicks the submit button', () => {

//     });

//     then('the user should see an error message', () => {

//     });
//   });
//   test('User clicks the Random Asteroid button', ({
//     given,
//     when,
//     then
//   }) => {
//     given('the user is on the Asteroid Input page', () => {

//     });

//     when('the user clicks the Random Asteroid button', () => {

//     });

//     then('the user should see details about a random asteroid', () => {

//     });
//   });
//   test('User enters nothing and submits form', ({
//     given,
//     when,
//     then
//   }) => {
//     given('the user is on the Asteroid Input page', () => {

//     });

//     when('the user clicks the submit button without entering anything', () => {

//     });

//     then('the submit button should be disabled', () => {

//     });
//   });
// });






























// defineFeature(feature, (test) => {
//   test('User enters valid Asteroid ID and submits form', ({ given, when, then }) => {
//     let asteroidId;

//     given('the user is on the Asteroid Input page', () => {
//       // shallow(<AsteroidInput />);
//     });

//     when('the user enters {string} in the input field', (id) => {
//       asteroidId = id;
//       const input = screen.getByTestId('input');
//       fireEvent.change(input, { target: { value: asteroidId } });
//     });

//     when('the user clicks the submit button', () => {
//       const submitBtn = screen.getByTestId('submit');
//       fireEvent.click(submitBtn);
//     });

//     then('the user should see details about the asteroid {string}', (id) => {
//       const name = screen.getByTestId('name');
//       const url = screen.getByTestId('url');
//       const isHazardous = screen.getByTestId('isHazardous');
//       expect(name).toHaveTextContent(`Name: ${id}`);
//       expect(url).toHaveTextContent('Nasa JPL URL');
//       expect(isHazardous).toHaveTextContent('Is Potentially Hazardous Asteroid:');
//     });
//   });

//   test('User enters invalid Asteroid ID and submits form', ({ given, when, then }) => {
//     given('the user is on the Asteroid Input page', () => {
//       // render(<AsteroidInput />);
//     });

//     when('the user enters {string} in the input field', (id) => {
//       const input = screen.getByTestId('input');
//       fireEvent.change(input, { target: { value: id } });
//     });

//     when('the user clicks the submit button', () => {
//       const submitBtn = screen.getByTestId('submit');
//       fireEvent.click(submitBtn);
//     });

//     then('the user should see an error message', () => {
//       const error = screen.getByTestId('error');
//       expect(error).toHaveTextContent('Error: Invalid Asteroid ID');
//     });
//   });

//   test('User clicks the Random Asteroid button', ({ given, when, then }) => {
//     given('the user is on the Asteroid Input page', () => {
//       // render(<AsteroidInput />);
//     });

//     when('the user clicks the Random Asteroid button', () => {
//       const randomBtn = screen.getByTestId('random');
//       fireEvent.click(randomBtn);
//     });

//     then('the user should see details about a random asteroid', () => {
//       const name = screen.getByTestId('name');
//       const url = screen.getByTestId('url');
//       const isHazardous = screen.getByTestId('isHazardous');
//       expect(name).toBeDefined();
//       expect(url).toBeDefined();
//       expect(isHazardous).toBeDefined();
//     });
//   });
//   test('User enters nothing and submits form', ({ given, when, then }) => {
//     given('the user is on the Asteroid Input page', () => {
//     // render(<AsteroidInput />);
//     });
    
//     when('the user clicks the submit button without entering anything', () => {
//     const submitBtn = screen.getByTestId('submit');
//     const inputField = screen.getByTestId('input');
//     expect(inputField).toHaveValue("");
//     expect(submitBtn).toBeDisabled();
//     fireEvent.click(submitBtn);
//     });
    
//     then('the submit button should be disabled', () => {
//     const submitBtn = screen.getByTestId('submit');
//     expect(submitBtn).toBeDisabled();
//     });
//     });
// })
