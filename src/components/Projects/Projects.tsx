import * as React from "react";
import { Zoom } from "react-awesome-reveal";
import { StyledWrapper } from "./projects.styled";
import { Typography } from "@mui/material";

const Projects = () => {
  return (
    <StyledWrapper id="skills">
      <Zoom>
        <Typography variant="h5" component="h1">
            Recent Projects
        </Typography>
      </Zoom>
    </StyledWrapper>
  );
};

export default Projects;
