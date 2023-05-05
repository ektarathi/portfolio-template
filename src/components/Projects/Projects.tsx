import * as React from "react";
import { Zoom } from "react-awesome-reveal";
import { StyledWrapper } from "./projects.styled";
import { Container, Typography } from "@mui/material";
import SliderComp from './Slider/SlideComponent';

const Projects = () => {
  return (
    <StyledWrapper id="projects">
      <Container>
      <Zoom>
        <Typography variant="h5" component="h1" data-testid="project-title">
            Recent Projects
        </Typography>
        <Typography variant="body2" data-testid="title-text">Showcase of the recent UI</Typography>
      </Zoom>
      <SliderComp/>
      </Container>
    </StyledWrapper>
  );
};

export default Projects;
