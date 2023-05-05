import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Project = (props: any) => {
  return (
    <Container className="project" data-testid="project-details">
      <img src={props?.item?.img} alt={props?.item?.alt} />
      <Box className="disc">
        <Typography component={"h1"} variant="h4" data-testid={`${props?.item?.alt}-title`}>
          {props?.item?.heading}
        </Typography>
        <Typography variant="body2">{props?.item?.disc}</Typography>
      </Box>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    color: rgba(0, 0, 0, 0.9);
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
