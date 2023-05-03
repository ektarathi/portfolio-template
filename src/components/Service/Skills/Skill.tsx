import { Box, Grid } from "@mui/material";
import * as React from "react";
import { Slide } from "react-awesome-reveal";

//components
import CircularProgressWithLabel from "./ProgressBar";

const SkillSet = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <CircularProgressWithLabel
          value={95}
          text={"HTML"}
          colorCode={"#ff6633"}
          position="left"
        />
        <CircularProgressWithLabel
          value={90}
          text={"CSS"}
          colorCode={"#ff33ff"}
          position="right"
        />
        <CircularProgressWithLabel
          value={90}
          text={"SCSS"}
          colorCode={"#33bbff"}
          position="up"
        />
        <CircularProgressWithLabel
          value={85}
          text={"TypeScript"}
          colorCode={"#55ff33"}
          position="left"
        />
      </Grid>
      <Box mt={5}>
      <Grid container spacing={3}>
        <CircularProgressWithLabel
          value={90}
          text={"React JS"}
          colorCode={"#ffff33"}
          position="left"
        />
        <CircularProgressWithLabel
          value={85}
          text={"Next JS"}
          colorCode={"#3377ff"}
          position="right"
        />
        <CircularProgressWithLabel
          value={90}
          text={"Material UI"}
          colorCode={"#33ff88"}
          position="left"
        />
        <CircularProgressWithLabel
          value={65}
          text={"StoryBook"}
          colorCode={"#ff3333"}
          position="down"
        />
        
      </Grid>
      </Box>
    </React.Fragment>
  );
};

export default SkillSet;
