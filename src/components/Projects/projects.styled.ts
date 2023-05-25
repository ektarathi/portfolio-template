import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  textAlign: 'center',
  position: 'relative',
  color: "#000000"
}));

export const StyledCircle = styled("div")((props: any) => ({
  height: '400px',
  width: '400px',
  opacity: '1',
  background: "white",
  border: "30px solid #2999ad",
  borderRadius: '50%',
  position: "absolute",
  bottom: '-9px',
  left: '-230px',
  zIndex: 200,
}))

//