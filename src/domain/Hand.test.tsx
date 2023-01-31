import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Hand from "./Hand";

test("renders the cards Hand", () => {
  render(<Hand />);
  const emptyImage = screen.queryAllByRole("img");
  expect(emptyImage.length).toBe(0);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
  act(() => {
    buttonElement.click();
  });
  const cardImages = screen.queryAllByRole("img");
  expect(cardImages.length).toBe(4);
});
