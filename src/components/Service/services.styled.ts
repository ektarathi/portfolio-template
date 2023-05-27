import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '7rem 0',
  marginTop: '-5rem',
  background: "linear-gradient(40deg,#574bcd,#2999ad,#41e975)",
  borderRadius: '150px 0'
}));

export const StaticText = styled("div")((props: any) => ({
   color: '#ffffff',
   display: 'inline'
}));