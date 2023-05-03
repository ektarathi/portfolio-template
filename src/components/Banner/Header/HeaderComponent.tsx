import * as React from "react";
import { GiCandleFlame } from "react-icons/gi";
import { Logo, Nav, LogoIcon } from "./header.styled";
import { Typography, Grid } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [bar, setBar] = React.useState(false as any);
  return (
    <Grid container spacing={3}>
      <Grid item sm={3}>
        <Logo>
          <Typography variant="body2" component="div">
            <LogoIcon>
              <Link to="/" style={{color: '#01be96'}}><GiCandleFlame /></Link>
            </LogoIcon>
          </Typography>
          <Typography variant="h6" component="h1" style={{ marginTop: 30 }} data-testid="title">
            Portfolio
          </Typography>
        </Logo>
      </Grid>
      <Grid
        item
        sm={9}
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 35 }}
      >
        <Nav bar={bar}>
          <li>
            <Link to="#skills">Skills</Link>
          </li>
          <li>
            <Link to="#project">Projects</Link>
          </li>
          <li>
            <Link to="#client">Testimonials</Link>
          </li>
          <li>
            <Link to="#footer">Portfolio</Link>
          </li>
        </Nav>
      </Grid>
    </Grid>
  );
};

export default Header;
