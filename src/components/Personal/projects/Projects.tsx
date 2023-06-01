import * as React from "react";
import { Grid, Card, Box, CardMedia } from "@mui/material";

// Image import
import WebDevelopment from "../web_developement.png";
import TravelInfo from "../travel_website.png";

//Icons
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

import {
  StyledLink,
  Overlay,
  IconLink,
  TravelInfoStyledLink,
} from "./projects.styled";

const Projects = () => {
  return (
    <Grid item xs={12} sm={6} md={8}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <StyledLink>
            <Card sx={{ borderRadius: "0 15px" }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="203"
                  image={WebDevelopment}
                />
                <Overlay className="image-overlay"></Overlay>
                <Link
                  className="icon"
                  to="https://ekta-rathi-portfolio-2023.netlify.app/"
                  target="_blank"
                >
                  <IconLink>
                    <LaunchIcon sx={{ width: 70, height: 60 }} />
                  </IconLink>
                </Link>
              </Box>
            </Card>
          </StyledLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <TravelInfoStyledLink>
            <Card sx={{ borderRadius: "0 15px" }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height="203" image={TravelInfo} />
                <Overlay className="image-overlay"></Overlay>
                <Link
                  className="icon"
                  to="https://travel-site-2023.netlify.app/"
                  target="_blank"
                >
                  <IconLink>
                    <LaunchIcon sx={{ width: 70, height: 60 }} />
                  </IconLink>
                </Link>
              </Box>
            </Card>
          </TravelInfoStyledLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;