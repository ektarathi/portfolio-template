import { styled } from "@mui/system";

export const Banner = styled("div")((props: any) => ({
  background:
    "linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)",
  "@media (max-width: 640px)": {
    height: "100%",
    paddingBottom: "2rem",
  },
}));
