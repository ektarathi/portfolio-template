import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  background:
  "linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)",
  textAlign: 'center',
position: 'relative',
}));

export const ArrowUp = styled("div")((props: any) => ({
  width: '2rem',
  height: '2rem',
  backgroundColor: '#01be96',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.3rem',
  fontWeight: 700,
  marginTop: '2rem'
}));