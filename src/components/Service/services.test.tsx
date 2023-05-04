import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Services from "./ServicesComponent";

import "intersection-observer";

describe("Services Component", () => {
  it("renders the services text", async () => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    );

    await screen.findByTestId("skill-heading");
    expect(screen.getByTestId("skill-heading")).toBeInTheDocument();
    expect(screen.getByTestId("skill-heading")).toHaveTextContent("My Skills");

    expect(screen.getByTestId("skill-title")).toBeInTheDocument();
    expect(screen.getByTestId("skill-title")).toHaveTextContent(
      "What I am experienced in"
    );
  });
});
