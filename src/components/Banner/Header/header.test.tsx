import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from './HeaderComponent';

describe("Header Component", () => {
    it("renders the header text", async () => {
      render(<BrowserRouter><Header /></BrowserRouter>);

      await screen.findByTestId("title");
      expect(screen.getByTestId("title")).toBeInTheDocument();

      expect(screen.getByTestId("title")).toHaveClass("MuiTypography-h6");
      expect(screen.getByTestId("title")).toHaveTextContent("Portfolio")
    });

    it('should be a link that have href value to "#skills"', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        const link = screen.getByRole('link', { name: /skills/i });
        expect(link.getAttribute('href')).toBe('/#skills');
    });

    it('should be a link that have href value to "#projects"', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        const link = screen.getByRole('link', { name: /project/i });
        expect(link.getAttribute('href')).toBe('/#project');
    });

    it('should display the nav bar link text', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getByText("Skills")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
    });
  });
  