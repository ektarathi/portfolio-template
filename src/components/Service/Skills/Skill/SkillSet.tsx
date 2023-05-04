import { Box, Grid } from "@mui/material";
import * as React from "react";

//components
import CircularProgressWithLabel from "../ProgressBar/ProgressBar";

const SkillSet = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3} data-testid="progress-skills">
        <CircularProgressWithLabel
          value={95}
          text={"HTML"}
          colorCode={"#ff6633"}
          position="left"
          dataTestId="html-skill"
        />
        <CircularProgressWithLabel
          value={90}
          text={"CSS"}
          colorCode={"#ff33ff"}
          position="right"
          dataTestId="css-skill"
        />
        <CircularProgressWithLabel
          value={90}
          text={"SCSS"}
          colorCode={"#33bbff"}
          position="up"
          dataTestId="scss-skill"
        />
        <CircularProgressWithLabel
          value={85}
          text={"TypeScript"}
          colorCode={"#55ff33"}
          position="left"
          dataTestId="typescript-skill"
        />
      </Grid>
      <Box mt={5}>
      <Grid container spacing={3}>
        <CircularProgressWithLabel
          value={90}
          text={"React JS"}
          colorCode={"#ffff33"}
          position="left"
          dataTestId="react-skill"
        />
        <CircularProgressWithLabel
          value={85}
          text={"Next JS"}
          colorCode={"#3377ff"}
          position="right"
          dataTestId="nextJs-skill"
        />
        <CircularProgressWithLabel
          value={80}
          text={"TDD"}
          colorCode={"#33ff88"}
          position="left"
          dataTestId="tdd-skill"
        />
        <CircularProgressWithLabel
          value={65}
          text={"StoryBook"}
          colorCode={"#ff3333"}
          position="down"
          dataTestId="storybook-skill"
        />
      </Grid>
      </Box>
    </React.Fragment>
  );
};

export default SkillSet;
