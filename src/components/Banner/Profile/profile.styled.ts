import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Texts = styled("div")((props: any) => ({
  flex: 1,
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
  marginTop: "3rem",
  cursor: "pointer",
  backgroundColor: "#01be96",
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
  marginTop: "3rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
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
  backgroundColor: "#01be96",
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
    width: "25rem",
    filter: "drop-shadow(0px 10px 10px #01be9570)",
    transition: "transform 400ms ease-in-out",
    [props.theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
}));
