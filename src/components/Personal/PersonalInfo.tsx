import * as React from "react";
import {
  Grid,
  Typography,
  Container,
} from "@mui/material";

import {
  StyledWrapper,
  ProjectContent,
} from "./personal.styled";

import Projects from "./projects/Projects";

const PersonalInfo = () => {
  return (
    <StyledWrapper id="personal-projects">
      <Container fixed>
        <ProjectContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    style={{ textDecoration: "underline" }}
                    data-testid="main-heading"
                  >
                    Check out some of my personal projects
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ marginTop: 20 }}
                    data-testid="sub-heading"
                  >
                    View recent examples of personal projects that I have
                    undertaken - click a link to visit the site
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Projects />
          </Grid>
        </ProjectContent>
      </Container>
    </StyledWrapper>
  );
};

export default PersonalInfo;
