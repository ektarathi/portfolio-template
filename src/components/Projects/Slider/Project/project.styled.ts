import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
    height: '10rem',
  backgroundColor: '#4e5156',
  margin: '0 0.5rem',
  padding: '0.5rem',
  borderRadius: 5,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  "& img": {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 400ms ease-in-out'
  }
}));

export const StyledDescription = styled("div")((props: any) => ({
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: '-10rem',
    textAlign: 'left',
    padding: '0.5rem',
    background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
    transition: 'all 400ms ease-in-out'
}));

export const Heading = styled("div")((props: any) => ({
    
}));