import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '3rem 0',
  marginTop: '13rem',
  background: 'linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);'
}));

export const StaticText = styled("div")((props: any) => ({
   color: '#01be96',
   display: 'inline'
}));