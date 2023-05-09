import { styled } from "@mui/system";

export const FooterWrapper = styled("div")((props: any) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "3em",
}));

export const Details = styled("div")((props: any) => ({
  display: "flex",
  flexDirection: "row",
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
