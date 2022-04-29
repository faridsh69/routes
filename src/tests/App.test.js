import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { RouteDetails } from "@components/RouteDetails";

test("Check App", () => {
  const { baseElement } = render(<RouteDetails />);
  expect(baseElement).toBeInTheDocument();
});
