import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects";

import "intersection-observer";

describe("Projects Component", () => {

  it("renders the heading and subtitle text", async () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );

    await screen.findByTestId("project-title");
    expect(screen.getByTestId("project-title")).toBeInTheDocument();
    expect(screen.getByTestId("project-title")).toHaveTextContent("Recent Projects");

    expect(screen.getByTestId("title-text")).toBeInTheDocument();
    expect(screen.getByTestId("title-text")).toHaveTextContent("Showcase of the recent UI");
  });
});
