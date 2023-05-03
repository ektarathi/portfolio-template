import * as React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

//components
import Header from "../components/Banner/Header/HeaderComponent";
import Profile from "../components/Banner/Profile/ProfileComponent";
import Services from "../components/Service/Services";

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
