import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project";

import "intersection-observer";

describe("Project Component", () => {

  it("renders the project details", async () => {
    render(
      <BrowserRouter>
        <Project />
      </BrowserRouter>
    );

    await screen.findByTestId("project-details");
    expect(screen.getByTestId("project-details")).toBeInTheDocument();
});
});
