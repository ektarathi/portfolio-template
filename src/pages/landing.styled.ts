import { styled } from "@mui/system";

export const Banner = styled("div")((props: any) => ({
  backgroundImage:
    "linear-gradient(135deg,#5b247a,#1bcedf)",
  "@media (max-width: 640px)": {
    height: "100%",
    paddingBottom: "2rem",
  },
}));
