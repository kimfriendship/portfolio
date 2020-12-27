import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ images, size }) => {
  return (
    <Wrapper size={size}>
      <Carousel
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        dynamicHeight={false}
      >
        {images.map((image, i) => (
          <Img key={i} src={image.src} alt={image.alt} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  width: 80%;
  height: 0;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: ${({ size }) => size.paddingBottom};
  border-radius: 15px;

  & li {
    overflow: hidden;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
