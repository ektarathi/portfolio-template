import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import {
  Texts,
  MainHeading,
  SubHeading,
  Title,
  StyledButton,
  Social,
  SocialIcons,
  IconLink,
  Profile,
} from "./profile.styled";
import { Typography, Grid, Card, CardMedia } from "@mui/material";
import profile from "./profile.jpg";
import DeveloperPdf from "./Resume.pdf";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{ marginTop: "7rem", marginBottom: "9rem" }}
    >
      <Grid item sm={7}>
        <Slide direction="left">
          <Texts>
            <Typography variant="h6">
              <SubHeading data-testid="heading-text">
                Hello <span className="green">I'am</span>
              </SubHeading>
            </Typography>
            <Typography variant="h1" data-testid="name">
              <MainHeading>Ekta Rathi</MainHeading>
            </Typography>
            <Typography variant="h3" data-testid="user-role">
              <Title>Front End/UI Developer</Title>
            </Typography>
            <Typography variant="body2">
              Experienced Front End Developer adept in all stages of advanced
              web development. Knowledgeable in user interface, testing, and
              debugging processes. Proficient in an assortment of technologies,
              including HTML5, CSS3, React JS, Typescript, Next JS.
            </Typography>
            <Link to={DeveloperPdf} target="_blank" rel="noreferrer" download>
              <StyledButton variant="contained" data-testid="button">Let's talk</StyledButton>
            </Link>
            <Social>
              <Typography variant="body2">Check out my</Typography>
              <SocialIcons>
                <IconLink>
                  <a
                    href={DeveloperPdf}
                    className="icon"
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </IconLink>
              </SocialIcons>
            </Social>
          </Texts>
        </Slide>
      </Grid>
      <Grid item sm={5} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Slide direction="right">
          <Profile>
            <Card
              sx={{
                maxWidth: 345,
                height: 440,
                filter: "drop-shadow(0px 10px 10px #01be9570)",
              }}
            >
              <CardMedia component="img" image={profile} alt="profile" />
            </Card>
          </Profile>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default ProfileComponent;
