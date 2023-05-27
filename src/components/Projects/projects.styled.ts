import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  textAlign: 'center',
  position: 'relative',
  color: "#000000"
}));

export const StyledCircle = styled("div")((props: any) => ({
  background: "linear-gradient(-135deg,#41e975,#2999ad,#574bcd)",
  width: 400,
  height: 400,
  borderRadius: "50%",
  bottom: "15px",
  left: "-270px",
  zIndex: 200,
  opacity: 1,
  position: "absolute",
  padding: "16px 8px"
}))

export const GradientCircle = styled("div")((props: any) => ({
  background: "#ffffff",
  width: 340,
  height: 340,
  borderRadius: "50%"
}))

export const SlidderWrapper = styled("div")((props: any) => ({
  position: "absolute",
  zIndex: 800,
  top: 0,
  left: 0,
  right: 0,
  paddingTop: "3rem",
}))