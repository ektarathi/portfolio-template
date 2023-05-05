import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project";

import "intersection-observer";

describe("Project Component", () => {
  const props = {
    img: "/storybook.png",
    disc: "welcome test",
    heading: "storybook",
    alt: "storybook",
  };
  
  it("renders the project details", async () => {
    render(
      <BrowserRouter>
        <Project />
      </BrowserRouter>
    );

    await screen.findByTestId("project-details");
    expect(screen.getByTestId("project-details")).toBeInTheDocument();
  });
  it('render the image attribute', () => {
    render(
      <BrowserRouter>
        <Project {...props} />
      </BrowserRouter>
    );
    const image = screen.getByRole("img");
    expect(image).toBeDefined();
    expect(screen.getByTestId("storybook")).toHaveTextContent("Storybook");
  });
});
