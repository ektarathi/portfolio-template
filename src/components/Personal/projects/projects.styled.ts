import { styled } from "@mui/system";

export const IconLink = styled("div")((props: any) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 10,
}));

export const TextContent = styled("div")((props: any) => ({
  marginTop: 20,
  textAlign: "center"
}));


export const StyledLink = styled("div")((props: any) => ({
    marginTop: -95,
    [props.theme.breakpoints.down("sm")]: {
        marginTop: 0,
      },
  "& .MuiBox-root": {
    "& .icon": {
      color: "#ffffff",
      position: "absolute",
      top: 48,
      left: "38%",
      opacity: 0,
      zIndex: 99999,
      width: 85,
      height: 85,
      background: "#574BDA",
      borderRadius: "50%",
    },
    "&:hover": {
      "& .image-overlay": {
        opacity: 0.5,
      },
      "& .icon": {
        opacity: 1,
      },
    },
  },
}));

export const TravelInfoStyledLink = styled("div")((props: any) => ({
  "& .MuiBox-root": {
    "& .icon": {
      color: "#ffffff",
      position: "absolute",
      top: 60,
      left: "38%",
      opacity: 0,
      zIndex: 99999,
      width: 85,
      height: 85,
      background: "#574BDA",
      borderRadius: "50%",
    },
    "&:hover": {
      "& .image-overlay": {
        opacity: 0.5,
      },
      "& .icon": {
        opacity: 1,
      },
    },
  },
}));

export const Overlay = styled("div")((props: any) => ({
  position: "absolute",
  bottom: 0,
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.54)",
  color: "white",
  padding: "10px",
  cursor: "pointer",
  opacity: 0,
  zIndex: 999,
}));
