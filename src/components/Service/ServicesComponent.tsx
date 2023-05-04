import * as React from "react";
import { Slide } from "react-awesome-reveal";
import { Grid, Typography, Container } from "@mui/material";
import { StyledWrapper, StaticText } from "./services.styled";

import SkillSet from "./Skills/Skill/SkillSet";

const Services = () => {
  return (
    <StyledWrapper id="skills">
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Slide direction="down">
              <Typography variant="subtitle1" data-testid="skill-heading">
                My <StaticText>Skills</StaticText>
              </Typography>
              <Typography variant="h5" component="h2" data-testid="skill-title">
                What I am experienced in 
              </Typography>
            </Slide>
          </Grid>
          <Grid item xs={12}>
            <SkillSet/>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

export default Services;
