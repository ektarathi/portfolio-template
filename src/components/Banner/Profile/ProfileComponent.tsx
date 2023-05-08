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
  ProfileWrapper,
} from "./profile.styled";
import { Typography, Grid, Card, CardMedia } from "@mui/material";
import profile from "./profile.jpg";
import DeveloperPdf from "./Resume.pdf";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

const ProfileComponent = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{ marginTop: "3rem", paddingBottom: "3rem" }}
    >
      <Grid item xs={12} sm={7}>
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
              As an Experienced Front-End Developer, I possess the necessary
              skills to manage all stages of advanced web development. I have a
              deep understanding of user interface design principles and
              extensive knowledge of testing and debugging processes. Proficient
              in a range of modern technologies such as HTML5, CSS3, React JS,
              Typescript, and Next JS, I can create high-quality web
              applications that meet the needs of modern businesses
            </Typography>
            <Link to={DeveloperPdf} target="_blank" rel="noreferrer" download>
              <StyledButton variant="contained" data-testid="button">
                Download CV
              </StyledButton>
            </Link>
            <Social>
              <Typography variant="body2">Check out my</Typography>
              <SocialIcons>
                <IconLink>
                  <a
                    href="https://www.linkedin.com/in/ekta-rathi-6a278123/"
                    className="icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </IconLink>
                <IconLink>
                  <a
                    href="https://github.com/ektarathi?tab=repositories"
                    className="icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </IconLink>
              </SocialIcons>
            </Social>
          </Texts>
        </Slide>
      </Grid>
      <Grid item xs={12} sm={5}>
        <ProfileWrapper>
          <Slide direction="right">
            <Profile>
              <Card
                sx={{
                  maxWidth: "100%",
                  height: 440,
                  filter: "drop-shadow(0px 10px 10px #01be9570)",
                }}
              >
                <CardMedia
                  component="img"
                  image={profile}
                  alt="profile"
                  style={{ marginBottom: 30 }}
                />
              </Card>
            </Profile>
          </Slide>
        </ProfileWrapper>
      </Grid>
    </Grid>
  );
};

export default ProfileComponent;
