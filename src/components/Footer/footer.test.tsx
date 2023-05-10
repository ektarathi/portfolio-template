import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./FooterComponent";
import "intersection-observer";

describe("Footer Component", () => {
  it("renders the footer", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    await screen.findByTestId("heading");
    expect(screen.getByTestId("heading")).toBeInTheDocument();

    const h4 = screen.getByText((content: any, element: any) => element.tagName.toLowerCase() === 'h4');
    expect(h4).toBeInTheDocument();
    expect(h4).toHaveTextContent("Portfolio");

  });

  it("renders the footer headings", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const h4 = screen.getByText((content: any, element: any) => element.tagName.toLowerCase() === 'h4');
    expect(h4).toBeInTheDocument();
    expect(h4).toHaveTextContent("Portfolio");

    const h1 = screen.getAllByText((content: any, element: any) => element.tagName.toLowerCase() === 'h1');
    expect(h1[0]).toBeInTheDocument();
    expect(h1[0]).toHaveTextContent("Address");

    expect(h1[1]).toBeInTheDocument();
    expect(h1[1]).toHaveTextContent("Contact me directly:");

    expect(h1[2]).toBeInTheDocument();
    expect(h1[2]).toHaveTextContent("Check my profiles");

  });

  it("renders the footer paragraphs text", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const paragraph = screen.getAllByText((content: any, element: any) => element.tagName.toLowerCase() === 'p');
    expect(paragraph[1]).toBeInTheDocument();
    expect(paragraph[1]).toHaveTextContent("+44 7435214960");

    expect(paragraph[1]).toHaveClass("MuiTypography-body2");

    expect(paragraph[2]).toBeInTheDocument();
    expect(paragraph[2]).toHaveTextContent("rathiekta2801@gmail.com");
  });
});
