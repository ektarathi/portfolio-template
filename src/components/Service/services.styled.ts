import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '3rem 0',
  marginTop: '3rem',
}));

export const StaticText = styled("div")((props: any) => ({
   color: '#01be96',
   display: 'inline'
}));