import { shallow } from "enzyme";
import AsteroidInput from "../components/AsteroidInput";
import { render, fireEvent, screen } from "@testing-library/react";

describe("AsteroidInput", () => {
  const wrapper = shallow(<AsteroidInput posts={[]} />);
  it("should render a form with an input and a submit button", () => {
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

describe("asteroid details after entering an id and submitting", () => {
  test("should show the asteroid details after submitting with a valid ID", async () => {
    const mockData = {
      name: "Mock Asteroid",
      nasa_jpl_url: "https://www.nasa.gov",
      is_potentially_hazardous_asteroid: true,
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    render(<AsteroidInput posts={[]} />);
    const input = screen.getByTestId("input");
    const submitButton = screen.getByTestId("submit");
    fireEvent.change(input, { target: { value: "1234" } });
    fireEvent.click(submitButton);
    expect(await screen.findByText("Asteroid Details:")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toHaveTextContent("Mock Asteroid");
    expect(screen.getByTestId("url")).toHaveTextContent("https://www.nasa.gov");
    expect(screen.getByTestId("isHazardous")).toHaveTextContent(
      "Is Potentially Hazardous Asteroid:Yes"
    );
  });
});

describe("random Asteroid", () => {
  it("should show a random asteroid details after clicking the button", async () => {
    const mockData = {
      name: "Mock Random Asteroid",
      nasa_jpl_url: "https://www.nasa.gov",
      is_potentially_hazardous_asteroid: false,
    };
    global.fetch = jest.fn().mockImplementation((url) => {
      if (url.includes("browse")) {
        return Promise.resolve({
          json: () =>
            Promise.resolve({
              near_earth_objects: [{ id: "5678" }, { id: "9012" }],
            }),
        });
      } else {
        return Promise.resolve({
          json: () => Promise.resolve(mockData),
        });
      }
    });

    render(<AsteroidInput posts={[]} />);
    const randomButton = screen.getByText("Random Asteroid");
    fireEvent.click(randomButton);
    expect(await screen.findByText("Asteroid Details:")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toHaveTextContent(
      "Mock Random Asteroid"
    );
    expect(screen.getByTestId("url")).toHaveTextContent("https://www.nasa.gov");
    expect(screen.getByTestId("isHazardous")).toHaveTextContent(
      "Is Potentially Hazardous Asteroid:No"
    );
  });
});
