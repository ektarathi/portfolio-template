import { Grid, Box, Typography, Container, IconButton } from "@mui/material";
import { FooterWrapper, Details, ArrowUp } from "./footer.styled";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Fade } from "react-awesome-reveal";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
    const scrollUp = () => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <Container id="contact">
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <FooterWrapper>
            <Typography variant="h4"> Portfolio</Typography>
          <Box sx={{mt:'1rem'}}>
            <Typography variant="h5" component="h1" sx={{mb: '.4rem'}}>
              Address
            </Typography>
            <Typography variant="body2">
                29 Honey Bee Street, <br/>Calcot, Reading, <br/>West Berkshire (United Kingdom)
            </Typography>
          </Box>
          <Box sx={{my:'1rem'}}>
            <Typography variant="h5" component="h1">
              Contact me directly:
            </Typography>
            <Details>
                <IconButton style={{color: '#fff'}}><CallIcon/></IconButton>
                <Typography variant="body2" sx={{p: '.6rem', pb: 0}}>+44 7435214960</Typography>
            </Details>
            <Details>
                <IconButton style={{color: '#fff'}}><EmailIcon/></IconButton>
                <Typography variant="body2" sx={{p: '.6rem', pb: 0}}>rathiekta2801@gmail.com</Typography>
            </Details>
          </Box>
          <Box>
            <Typography variant="h5" component="h1">
              Check my profiles
            </Typography>
          </Box>
          <Fade>
            <ArrowUp onClick={scrollUp}>
              <ArrowUpwardIcon />
            </ArrowUp>
          </Fade>
        </FooterWrapper>
      </Grid>
      <Grid item sm={6}></Grid>
    </Grid>
    </Container>
  );
};

export default Footer;
