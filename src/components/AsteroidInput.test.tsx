import { shallow } from "enzyme";
import AsteroidInput from "./AsteroidInput";

describe("tets cases",()=>{

})

describe("AsteroidInput", () => {

  // beforeEach(() => {
  //  const wrapper = shallow(<AsteroidInput posts={[]} />);
  // });

  const wrapper = shallow(<AsteroidInput posts={[]} />);
  it("should render a form with an input and a submit button", () => {
    // const wrapper = shallow(<AsteroidInput posts={[]} />);
    const form = wrapper.find("form");
    expect(form.length).toBe(1);
    const input = wrapper.find("[data-testid='input']");
    expect(input.length).toBe(1);
    const submit = wrapper.find("[data-testid='submit']");
    expect(submit.length).toBe(1);
  });

  it("should render a random button", () => {
    const button = wrapper.find("[data-testid='random']");
    expect(button.length).toBe(1);
  });

  it("should disable the submit button if the input value is empty", () => {
    const submit = wrapper.find("[data-testid='submit']");
    expect(submit.prop("disabled")).toBe(true);
  });

  it("should enable the submit button if the input value is not empty", () => {
    const input = wrapper.find("[data-testid='input']");
    input.simulate("change", { target: { value: "123" } });
    const submit = wrapper.find("[data-testid='submit']");
    expect(submit.prop("disabled")).toBe(false);
  });

  it("should not render asteroid details when post array has a length less than or equal to zero", () => {
    const details = wrapper.find(".asteroid-details");
    expect(details.length).toBe(0);
  });
});






// describe('displays Asteroid info after submitting the button', () => {
//   let fetchMock: jest.SpyInstance;

//   beforeEach(() => {
//     fetchMock = jest.spyOn(global, 'fetch');
//     fetchMock.mockResolvedValue({
//       json: () =>
//         Promise.resolve({
//           name: 'Mock Asteroid',
//           nasa_jpl_url: 'https://www.nasa.gov',
//           is_potentially_hazardous_asteroid: true,
//         }),
//     });
//   });

//   afterEach(() => {
//     fetchMock.mockRestore();
//   });

//   it('should show the asteroid details after submitting with a valid ID', async () => {
//     const wrapper = shallow(<AsteroidInput posts={[]} />);
//     const input = wrapper.find('[data-testid="input"]');
//     const submitButton = wrapper.find('[data-testid="submit"]');
//     input.simulate('change', { target: { value: '1234' } });
//     submitButton.simulate('click');
//     await new Promise(resolve => setTimeout(resolve)); // wait for async setState to complete
//     expect(wrapper.find('[data-testid="name"]').text()).toEqual('Mock Asteroid');
//     expect(wrapper.find('[data-testid="url"]').text()).toEqual('https://www.nasa.gov');
//     expect(wrapper.find('[data-testid="isHazardous"]').text()).toEqual('Is Potentially Hazardous Asteroid: Yes');
//   });
// });




















// describe('<App />', () => {
//   it('renders the Nasa App title', () => {
//     const wrapper = shallow(<AsteroidInput posts={[]} />);
//     const headingtxt = <h1>Nasa App</h1>;
//     expect(wrapper.contains(headingtxt)).toEqual(true);
//   });
// });

// describe("Form component", () => {
//   it("renders an input field", () => {
//     const wrapper = shallow(<AsteroidInput posts={[]} />);
//     expect(wrapper.find('[data-testid="input"]').length).toEqual(1);
//   });

//   it('disables the submit button when the input field is empty', () => {
//     const wrapper = shallow(<AsteroidInput posts={[]} />);
//     const submitButton = wrapper.find('[data-testid="submit"]');
//     expect(submitButton.prop('disabled')).toBe(true);
//   });

//   it('enables the submit button when the input field has a value', () => {
//     const wrapper = shallow(<AsteroidInput posts={[]} />);
//     const inputField = wrapper.find('[data-testid="input"]');
//     inputField.simulate('change', { target: { value: '123456' } });
//     const submitButton = wrapper.find('[data-testid="submit"]');
//     expect(submitButton.prop('disabled')).toBe(false);
//   });

//   test('renders submit and random asteroid buttons', () => {
//     const wrapper = shallow(<AsteroidInput posts={[]} />);
//     expect(wrapper.find('button.submitBtn')).toHaveLength(1);
//     expect(wrapper.find('button.randombtn')).toHaveLength(1);
//   });

//   it("should not allow the user to submit without entering an ID", () => {
//     const wrapper = shallow(<AsteroidInput posts={[]} />);
//     const submitButton = wrapper.find("[data-testid='submit']");
//     submitButton.simulate("click");
//     expect(wrapper.find(".asteroid-details")).toHaveLength(0);
//   });

// });


// test("should show the asteroid details after submitting with a valid ID", async () => {
//   const mockData = {
//     name: "Mock Asteroid",
//     nasa_jpl_url: "https://www.nasa.gov",
//     is_potentially_hazardous_asteroid: true,
//   };
//   global.fetch = jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(mockData),
//     })
//   );

//   const wrapper = shallow(<AsteroidInput posts={[]} />);

//   const input = wrapper.find('[data-testid="input"]');
//   input.simulate("change", { target: { value: "1234" } });

//   const submitButton = wrapper.find('[data-testid="submit"]');
//   submitButton.simulate("click");

//   await new Promise((resolve) => setTimeout(resolve));
//   wrapper.update();

//   const nameNode = wrapper.find('[data-testid="name"]');
//   expect(nameNode.text()).toContain("Mock Asteroid");
  

//   const urlNode = wrapper.find('[data-testid="url"]');
//   expect(urlNode.text()).toEqual("https://www.nasa.gov");

//   const isHazardousNode = wrapper.find('[data-testid="isHazardous"]');
//   expect(isHazardousNode.text()).toEqual("Is Potentially Hazardous Asteroid: Yes");
// });





















// import {render, fireEvent, screen } from "@testing-library/react";
// import AsteroidInput from "./AsteroidInput";

// describe("rendering form", () => {
  
//     test("headers", () => {
//         render(<AsteroidInput posts={[]} />)
//         const headerElm = screen.getByRole("heading", {name: "Nasa App",})
//         expect(headerElm).toBeInTheDocument()
//       })

//     test("input type and placeholder",()=>{
//       render(<AsteroidInput posts={[]} />)
//         const inpulElem=screen.getByTestId("input")
//         expect(inpulElem).toHaveAttribute("type","text")

//         const inputbox = screen.getByRole("textbox");
//         expect(inputbox).toBeInTheDocument();

//         const placeholderText = screen.getByPlaceholderText("Enter Asteroid ID");
//         expect(placeholderText).toBeInTheDocument();
//     })
    
//     test("submit button and random asteroid button",()=>{
//       render(<AsteroidInput posts={[]} />)
//         const submitButton=screen.getByText("Submit")
//         expect(submitButton).toBeInTheDocument();

//       const randomElem=screen.getByText(/random asteroid/i)
//       expect(randomElem).toBeInTheDocument();
//     })

//     test("disabled button",()=>{
//       render(<AsteroidInput posts={[]} />)
//        const disabledButton = screen.getByRole("button", {name: "Submit",});
//        expect(disabledButton).toHaveAttribute("disabled")
//       })

//       test("button enabled for non-empty",()=>{
//         render(<AsteroidInput posts={[]} />)
     
//         const inputElem=screen.getByTestId("input")
//         fireEvent.change(inputElem,{target:{value:'3542519'}})
     
//         const enabledBtn=screen.getByRole("button",{name:"Submit"})
//         expect(enabledBtn).not.toBeDisabled()
//        })

//        it("should not allow the user to submit without entering an ID", () => {
//         render(<AsteroidInput posts={[]} />);
//         const submitButton = screen.getByTestId("submit");
//         fireEvent.click(submitButton);
//         expect(screen.queryByText("Asteroid Details:")).toBeNull();
//       });
// })

  // describe("asteroid details after entering an id and submitting",()=>{
  //   test("should show the asteroid details after submitting with a valid ID", async () => {
  //     const mockData = {
  //       name: "Mock Asteroid",
  //       nasa_jpl_url: "https://www.nasa.gov",
  //       is_potentially_hazardous_asteroid: true,
  //     };
  //     global.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         json: () => Promise.resolve(mockData),
  //       })
  //     );
  //     render(<AsteroidInput posts={[]} />);
  //     const input = screen.getByTestId("input");
  //     const submitButton = screen.getByTestId("submit");
  //     fireEvent.change(input, { target: { value: "1234" } });
  //     fireEvent.click(submitButton);
  //     expect(await screen.findByText("Asteroid Details:")).toBeInTheDocument();
  //     expect(screen.getByTestId("name")).toHaveTextContent("Mock Asteroid");
  //     expect(screen.getByTestId("url")).toHaveTextContent("https://www.nasa.gov");
  //     expect(screen.getByTestId("isHazardous")).toHaveTextContent("Is Potentially Hazardous Asteroid:Yes");
  //   });
  // })
  
// describe("random Asteroid",()=>{
  
//   it("should show a random asteroid details after clicking the button", async () => {
//     const mockData = {
//       name: "Mock Random Asteroid",
//       nasa_jpl_url: "https://www.nasa.gov",
//       is_potentially_hazardous_asteroid: false,
//     };
//     global.fetch = jest.fn().mockImplementation((url) => {
//       if (url.includes("browse")) {
//         return Promise.resolve({
//           json: () =>
//             Promise.resolve({
//               near_earth_objects: [{ id: "5678" }, { id: "9012" }],
//             }),
//         });
//       } else {
//         return Promise.resolve({
//           json: () => Promise.resolve(mockData),
//         });
//       }
//     });

//     render(<AsteroidInput posts={[]} />);
//     const randomButton = screen.getByText("Random Asteroid");
//     fireEvent.click(randomButton);
//     expect(await screen.findByText("Asteroid Details:")).toBeInTheDocument();
//     expect(screen.getByTestId("name")).toHaveTextContent("Mock Random Asteroid");
//     expect(screen.getByTestId("url")).toHaveTextContent("https://www.nasa.gov");
//     expect(screen.getByTestId("isHazardous")).toHaveTextContent(
//       "Is Potentially Hazardous Asteroid:No"
//     );
// })
// })
// describe("asteroid details after entering an id and submitting", () => {
//   test("should show the asteroid details after submitting with a valid ID", async () => {
//     const mockData = {
//       name: "Mock Asteroid",
//       nasa_jpl_url: "https://www.nasa.gov",
//       is_potentially_hazardous_asteroid: true,
//     };
//     global.fetch = jest.fn().mockResolvedValue({
//       json: () => Promise.resolve(mockData),
//     });
//     render(<AsteroidInput posts={[]} />);
//     const input = screen.getByTestId("input");
//     const submitButton = screen.getByTestId("submit");
//     fireEvent.change(input, { target: { value: "1234" } });
//     fireEvent.click(submitButton);
//     expect(await screen.findByText("Asteroid Details:")).toBeInTheDocument();
//     expect(screen.getByTestId("name")).toHaveTextContent("Mock Asteroid");
//     expect(screen.getByTestId("url")).toHaveTextContent("https://www.nasa.gov");
//     expect(screen.getByTestId("isHazardous")).toHaveTextContent(
//       "Is Potentially Hazardous Asteroid:Yes"
//     );
//   });
// });

