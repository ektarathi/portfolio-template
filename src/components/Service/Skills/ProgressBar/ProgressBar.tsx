import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Grid, Box, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";

export default function CircularProgressWithLabel(
  props: CircularProgressProps & {
    value: number;
    text: string;
    colorCode: string;
    position: string;
    dataTestId: string;
  }
) {
  return (
    <Grid item xs={6} sm={3} style={{ display: "flex", justifyContent: "center" }}>
      <Slide direction={props.position as any}>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={props.value}
            size={120}
            data-testid={`${props.dataTestId}-progress`}
            sx={{
              color: props.colorCode,
              filter: `drop-shadow(0 0 5px ${props.colorCode})`,
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              data-testid={props.dataTestId}
              style={{
                color: "white",
                fontSize: "1rem",
                filter: `drop-shadow(0 0 5px ${props.colorCode})`,
                textAlign: 'center'
              }}
            >
              {props.text}<br/>{props.value}%
            </Typography>
          </Box>
        </Box>
      </Slide>
    </Grid>
  );
}
