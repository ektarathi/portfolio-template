import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  backgroundImage: "repeating-linear-gradient(-45deg,#f3f3f3,#f3f3f3 100px,#eee 0,#eee 200px)",
    borderRadius: "0 150px 0 75px",
    marginBottom: "-75px",
}));

export const FooterWrapper = styled("div")((props: any) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "3em",
  color: "#000000"
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
  backgroundColor: "#5b247a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "1.3rem",
  fontWeight: 700,
  marginTop: "2rem",
  marginBottom: "2rem",
  color: 'white'
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
  backgroundColor: "#5b247a",
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

export const StyledCircle = styled("div")((props: any) => ({
  height: '400px',
  width: '400px',
  opacity: '1',
  background: "white",
  border: "30px solid #f3f3f3",
  borderRadius: '50%',
  position: "absolute",
  bottom: '-34px',
  left: '-130px',
  zIndex: 200
}))