import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProgressBar from "./ProgressBar";

import "intersection-observer";

describe("ProgressBar Component", () => {
  it("renders the html progress skill", async () => {
    render(
      <BrowserRouter>
        <ProgressBar
          value={95}
          text={""}
          colorCode={""}
          position={"left"}
          dataTestId={"html"}
        />
      </BrowserRouter>
    );

    await screen.findByTestId("html");
    expect(screen.getByTestId("html")).toBeInTheDocument();

    await screen.findByTestId("html-progress");
    expect(screen.getByTestId("html-progress")).toBeInTheDocument();
    expect(screen.getByTestId("html-progress")).toHaveClass("MuiCircularProgress-colorPrimary");
  });

  it("sets aria-valuenow for html progress skill", async () => {
    render(
      <BrowserRouter>
        <ProgressBar
          value={95}
          text={""}
          colorCode={""}
          position={"left"}
          dataTestId={"html"}
        />
      </BrowserRouter>
    );

    const progressBar = screen.getByTestId("html-progress");
    expect(progressBar.getAttribute("aria-valuenow")).toEqual("95");

  });

  it("renders the react progress skill", async () => {
    render(
      <BrowserRouter>
        <ProgressBar
          value={90}
          text={""}
          colorCode={""}
          position={"right"}
          dataTestId={"react-skill"}
        />
      </BrowserRouter>
    );

    await screen.findByTestId("react-skill");
    expect(screen.getByTestId("react-skill")).toBeInTheDocument();
  });
});
