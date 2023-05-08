import * as React from "react";
import { Zoom } from "react-awesome-reveal";
import { StyledWrapper } from "./projects.styled";
import { Container, Typography } from "@mui/material";
import SliderComp from './Slider/SlideComponent';

const Projects = () => {
  return (
    <StyledWrapper id="project">
      <Container style={{padding: '40px 0'}}>
      <Zoom>
        <Typography variant="h5" component="h1" data-testid="project-title">
            Recent <Typography variant="h5" component="span" style={{color: "#01be96"}}>Projects</Typography>
        </Typography>
        <Typography variant="body2" data-testid="title-text">Showcase of the recent UI on which I have worked on</Typography>
      </Zoom>
      <SliderComp/>
      </Container>
    </StyledWrapper>
  );
};

export default Projects;
