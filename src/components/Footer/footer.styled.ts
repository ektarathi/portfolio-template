import { styled } from "@mui/system";
export const FooterWrapper = styled("div")((props: any) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "3em",
}));

export const Details = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  "& a": {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export const ArrowUp = styled("div")((props: any) => ({
  width: "2rem",
  height: "2rem",
  backgroundColor: "#01be96",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "1.3rem",
  fontWeight: 700,
  marginTop: "2rem",
}));

export const Social = styled("div")((props: any) => ({
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
  width: "2rem",
  height: "2rem",
  borderRadius: "2rem",
  backgroundColor: "#000",
  position: "relative",
  transition: "transform 400ms ease-in-out",
  "&:hover": {
    backgroundColor: "orange",
  },
  "& .icon": {
    color: "#fff",
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
