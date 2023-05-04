import * as React from "react";
import Container from "@mui/material/Container";
import { Banner } from "./landing.styled";

//components
import Header from "../components/Banner/Header/HeaderComponent";
import Profile from "../components/Banner/Profile/ProfileComponent";
import Services from "../components/Service/ServicesComponent";
import Projects from "../components/Projects/Projects";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Banner>
        <Container>
          <Header />
          <Profile />
        </Container>
      </Banner>
      <Services />
      <Projects />
    </React.Fragment>
  );
};

export default LandingPage;
