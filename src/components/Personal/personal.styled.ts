import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  display: "block",
  position: "relative",
  marginTop: 70,
  paddingTop: 80,
  paddingBottom: 220,
  marginBottom: 95,
  width: "100%",
  zIndex: 1,
  color: "white",
  [props.theme.breakpoints.down("md")]: {
    paddingBottom: 360
  },

  [props.theme.breakpoints.down("sm")]: {
    paddingBottom: 560
  },
  "&:before": {
    background:
      "repeating-linear-gradient(-45deg,#f3f3f3,#f3f3f3 100px,#eee 0,#eee 200px)",
    borderRadius: "0 100px 0 0",
    top: -62,
    width: "95%",
    content: "''",
    display: "block",
    left: 0,
    position: "absolute",
    zIndex: 1,
    height: "100%",
  },
  "&:after": {
    backgroundImage: "linear-gradient(120deg,#41e975,#2999ad,#574bcd)",
    borderRadius: "75px 0",
    top: 0,
    width: "100%",
    content: "''",
    display: "block",
    left: 0,
    position: "absolute",
    zIndex: 20,
    height: "100%",
  },
}));

export const ProjectContent = styled("div")((props: any) => ({
  position: "absolute",
  zIndex: 50,
  top: 63,
  right: 30,
  left: 36,
}));

export const IconLink = styled("div")((props: any) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 10,
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

/*export const StyledLink = styled("div")((props: any) => ({
  marginTop: -100,
  cursor: "pointer",
  "& img": {
    maxWidth: "100%",
    borderRadius: "0 15px",
    position: "relative",
  },
  "& .overlay": {
    opacity: 0,
    position: "absolute",
    textAlign: "center",
    background: "red",
    width: 395,
    height: 190,
    top: -100,
    bottom: 0,
    borderRadius: "0 15px",
    zIndex: 999,
  },
  "&:hover .overlay": {
    opacity: 0.5,
  },
  "&:hover .icon": {
    opacity: 1,
  },
  "& .icon": {
    color: "#ffffff",
    position: "absolute",
    top: -44,
    left: "46%",
    opacity: 0,
    zIndex: 99999,
    width: 85,
    height: 85,
    background: "#574BDA",
    borderRadius: "50%",
  },
}));

export const TravelInfoStyledLink = styled("div")((props: any) => ({
  marginTop: -20,
  cursor: "pointer",
  "& img": {
    maxWidth: "100%",
    borderRadius: "0 15px",
    position: "relative",
  },
  "& .overlay": {
    opacity: 0,
    position: "absolute",
    textAlign: "center",
    background: "red",
    width: 395,
    height: 190,
    bottom: 0,
    borderRadius: "0 15px",
    zIndex: 999,
  },
  "&:hover .overlay": {
    opacity: 0.5,
  },
  "&:hover .icon": {
    opacity: 1,
  },
  "& .icon": {
    color: "#ffffff",
    position: "absolute",
    top: 35,
    left: "81%",
    opacity: 0,
    zIndex: 99999,
    width: 85,
    height: 85,
    background: "#574BDA",
    borderRadius: "50%",
  },
}));
*/
