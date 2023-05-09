import * as React from "react";
import { Logo, Nav, LogoIcon } from "./header.styled";
import { Typography, Grid } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';

import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';

const Header = () => {
  const [bar, setBar] = React.useState(false as any);
  return (
    <Grid container spacing={3}>
      <Grid item sm={3}>
        <Logo>
          <Typography variant="body2" component="div">
            <LogoIcon>
              <Link to="/" style={{color: '#01be96'}}><CandlestickChartIcon/></Link>
            </LogoIcon>
          </Typography>
          <Typography variant="h6" component="h1" style={{ marginTop: 16, fontSize: '1.6rem' }} data-testid="title">
            Portfolio
          </Typography>
        </Logo>
      </Grid>
      <Grid
        item
        sm={9}
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 35 }}
      >
        <Nav data-testid="navbar">
          <li>
            <Link to="#skills">Skills</Link>
          </li>
          <li>
            <Link to="#project">Projects</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </Nav>
      </Grid>
    </Grid>
  );
};

export default Header;
