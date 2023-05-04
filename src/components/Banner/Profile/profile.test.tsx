import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "./ProfileComponent";
import "intersection-observer";

describe("Profile Component", () => {
  it("renders the profile text", async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );

    await screen.findByTestId("heading-text");
    expect(screen.getByTestId("heading-text")).toBeInTheDocument();
    expect(screen.getByTestId("heading-text")).toHaveTextContent("Hello I'am");

    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("user-role")).toBeInTheDocument();
    expect(screen.getByTestId("user-role")).toHaveTextContent(
      "Front End/UI Developer"
    );
  });

  it("fires onClick function successfully", async () => {
    const onClick = jest.fn();
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Let's talk"));
    await expect(onClick).toBeDefined();
    expect(screen.getByTestId("button")).toHaveClass(
      "MuiButton-sizeMedium"
    );
    expect(screen.getByTestId("button")).toHaveClass(
      "MuiButton-containedPrimary"
    );
   
  });
});
