import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Texts = styled("div")((props: any) => ({
  flex: 1,
}));

export const StyledWrapper = styled("div")((props: any) => ({
  marginTop: "3rem",
  paddingBottom: "3rem",
  [props.theme.breakpoints.down("sm")]: {
    marginTop: 0
  },
}));

export const MainHeading = styled("div")((props: any) => ({
  fontSize: "2rem",
  fontFamily: '"Secular One", sans-serif',
  letterSpacing: 2,
  color: "#01be96",
}));

export const SubHeading = styled("div")((props: any) => ({
  padding: "1rem 0",
  fontWeight: 500,
}));

export const Title = styled("div")((props: any) => ({
  fontWeight: 500,
  fontSize: "1.2rem",
  paddingBottom: "1.2rem",
  textTransform: "capitalize",
}));

export const StyledButton = styled(Button)({
  padding: "0.7rem 2rem",
  marginTop: "2rem",
  cursor: "pointer",
  backgroundColor: "#5b247a",
  borderRadius: "0 15px",
  border: "none",
  color: "#fff",
  textTransform: "capitalize",
  filter: "drop-shadow(0px 10px 10px #01be9551)",
  "&:hover": {
    filter: "drop-shadow(0px 10px 10px #01be9570)",
    backgroundColor: "#01be96",
  },
});

export const Social = styled("div")((props: any) => ({
  marginTop: "1rem",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  gap: "1rem",
  [props.theme.breakpoints.down("lg")]: {
    marginTop: "2rem",
    position: "static",
    marginLeft: "1rem"
  },
}));

export const ProfileWrapper = styled("div")((props: any) => ({
  display: "flex", 
  justifyContent: "flex-end",
  [props.theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const SocialIcons = styled("div")((props: any) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

export const IconLink = styled("div")((props: any) => ({
  width: "2.3rem",
  height: "2rem",
  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  backgroundColor: "#5b247a",
  position: "relative",
  transition: "transform 400ms ease-in-out",
  "&:hover": {
    transform: "rotate(360deg)",
  },
  "& .icon": {
    color: "#fff",
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export const Profile = styled("div")((props: any) => ({
  "& img": {
    borderRadius: 7,
    filter: "drop-shadow(0px 10px 10px #01be9570)",
    transition: "transform 400ms ease-in-out",
    [props.theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
    [props.theme.breakpoints.down("sm")]: {
      width: '25rem'
    },
    [props.theme.breakpoints.up("lg")]: {
      width: "25rem",
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
}));

export const ButtonWrapper = styled("div")((props: any) => ({
  display: 'block',
  [props.theme.breakpoints.down("lg")]: {
    display: 'flex',
  flexDirection: 'row',
  },
}));