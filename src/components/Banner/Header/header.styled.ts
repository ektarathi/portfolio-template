import { styled } from "@mui/system";

export const Container = styled("div")((props: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
  padding: "1.5rem 0",
  position: "relative",
  animation: "header 500ms ease-in-out",

  [props.theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

export const Logo = styled("div")((props: any) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "& .MuiSvgIcon-root": {
    width: '2em',
    height: '2em',
  }
}));

export const LogoIcon = styled("div")((props: any) => ({
  color: "#01be96",
  fontSize: "1.8rem",
  marginTop: 20,
}));

export const Nav = styled("ul")((props: any) => ({
  listStyleType: 'none',
  display: 'block',
  "& li":{
    marginLeft: '1rem',
    float: 'left',
    "& a":{
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 400,
      position: 'relative',
      "&:before" :{
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-5px',
        height: '2px',
        backgroundColor: '#fff',
        transform: 'scale(0)',
        transformOrigin: 'right',
        transition: 'transform 400ms ease-in-out'
      },
      "&:hover:before": {
        transform: 'scale(1)',
        transformOrigin: 'left'
      },
      "&:hover" :{
        opacity: '0.7'
      }
    }
  }
}));
