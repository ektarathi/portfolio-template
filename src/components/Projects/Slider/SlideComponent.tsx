import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Project from "./Project/Project";

import { StyledWrapper, StyledButton } from "./slider.styled";
import { slideData } from "../../../mocks/data/slideData";
import { settings } from "../../helpers/slide";

const SlideComponent = () => {
  const arrowRef = useRef(null as any);

  const sliderProject = () => {
    return slideData.map((item, i) => <Project item={item} key={i} />);
  };

  return (
    <StyledWrapper>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject()}
      </Slider>
      <StyledButton
        onClick={() => arrowRef.current.slickPrev()}
        className="back"
        style={{left: '-1em'}}
      >
        <ArrowCircleLeftIcon />
      </StyledButton>
      <StyledButton
        onClick={() => arrowRef.current.slickNext()}
        className="next"
      >
        <ArrowCircleRightIcon />
      </StyledButton>
    </StyledWrapper>
  );
};

export default SlideComponent;
