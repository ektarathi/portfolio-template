import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Skill from "./SkillSet";

import "intersection-observer";

describe("ProgressBar Component", () => {

  it("renders the progress skills array props", async () => {
    render(
      <BrowserRouter>
        <Skill />
      </BrowserRouter>
    );

    await screen.findByTestId("progress-skills");
    expect(screen.getByTestId("progress-skills")).toBeInTheDocument();
    expect(screen.getAllByRole("progressbar")[0]).toBeInTheDocument();
  });
});
