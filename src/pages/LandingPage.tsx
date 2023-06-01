import * as React from "react";
import Container from "@mui/material/Container";
import { Banner } from "./landing.styled";

//components
import Header from "../components/Banner/Header/HeaderComponent";
import Profile from "../components/Banner/Profile/ProfileComponent";
import Services from "../components/Service/ServicesComponent";
import Projects from "../components/Projects/Projects";
import PersonalInfo from "../components/Personal/PersonalInfo";
import Footer from "../components/Footer/FooterComponent";

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
      <PersonalInfo />
      <Footer/>
    </React.Fragment>
  );
};

export default LandingPage;
