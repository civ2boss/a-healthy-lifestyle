import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";
import healthApiResponse from "../__fixtures__/healthApiResponse"

// Temp fix for react testing library because of React 16.8 see: https://github.com/testing-library/react-testing-library/issues/281
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});
// End of fix

afterAll(() => {
  console.error = originalError;
});

test("Search works", async () => {
  const fakeAPIResponse = healthApiResponse;
  jest.spyOn(window, "fetch").mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeAPIResponse)
    });
  });

  const { getByLabelText, getByText, findByText } = render(<App />);

  fireEvent.change(getByLabelText(/age/i), { target: { value: "35" } });
  fireEvent.change(getByLabelText(/female/i), { target: { value: "Female" } });
  fireEvent.change(getByLabelText(/pregnant/i), { target: { value: "false" } });
  fireEvent.click(getByText(/search/i));

  const title = await findByText(healthApiResponse.Result.Resources.Interest.Resource[0].Title);

  expect(title).toBeDefined();
});
