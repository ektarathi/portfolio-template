import * as React from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import { StyledWrapper, ArrowUp } from "./projects.styled";
import { Container, Typography } from "@mui/material";
import SliderComp from './Slider/SlideComponent';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Projects = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <Fade>
          <ArrowUp onClick={scrollUp}>
            <ArrowUpwardIcon />
          </ArrowUp>
        </Fade>
      </Container>
    </StyledWrapper>
  );
};

export default Projects;
