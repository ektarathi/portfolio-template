import * as React from "react";
import Header from "../Banner/Header/HeaderComponent";
import Profile from "../Banner/Profile/ProfileComponent";
import Container from "@mui/material/Container";
import Services from "../Service/Services";
import styled from "@emotion/styled";

const Banner = styled.div`
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Banner>
        <Header />
        <Profile />
      </Banner>
      <Services />
    </Container>
  );
};

export default LandingPage;
