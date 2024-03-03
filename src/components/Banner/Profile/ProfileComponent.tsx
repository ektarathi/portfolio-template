import { Slide } from "react-awesome-reveal";
import {
  StyledWrapper,
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
  ButtonWrapper
} from "./profile.styled";
import { Typography, Grid, Card, CardMedia } from "@mui/material";
import profile from "./profile_new.jpg";
import DeveloperPdf from "./Ekta_Rathi_Front_End_Engineer.pdf";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProfileComponent = () => {
  return (
    <StyledWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{ paddingTop: 5}}>
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
                As an Experienced Front-End Developer, I bring a comprehensive
                skill set to manage every aspect of advanced web development.
                With a profound grasp of user interface design principles and
                thorough expertise in testing and debugging processes, I ensure
                seamless functionality and optimal user experiences. 
                <br/>
                Proficient across a spectrum of modern technologies including HTML5, CSS3,
                React JS, Typescript, Redux Toolkit, and Next JS, as well as
                adept with cutting-edge CSS frameworks such as Material UI,
                Tailwind CSS, and Bootstrap, I craft top-tier web applications
                tailored to the demands of contemporary businesses.
              </Typography>
              <ButtonWrapper>
              <Link
                to={DeveloperPdf}
                target="_blank"
                rel="noreferrer"
                download
                style={{ textDecoration: "none" }}
              >
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
              </ButtonWrapper>
             
            </Texts>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProfileWrapper>
            <Profile>
              <Card
                sx={{
                  overflow: "inherit",
                  maxWidth: "100%",
                  filter: "drop-shadow(0px 10px 10px #01be9570)",
                  background: "transparent",
                  boxShadow: "none",
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
          </ProfileWrapper>
        </Grid>
      </Grid>
    </StyledWrapper>
  );
};

export default ProfileComponent;
