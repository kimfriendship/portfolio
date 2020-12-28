import React from "react";
import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavigateBefore } from "@styled-icons/material-rounded/NavigateBefore";
import { NavigateNext } from "@styled-icons/material-rounded/NavigateNext";

const Slider = ({ images, size }) => {
  return (
    <Wrapper size={size}>
      <Carousel
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        dynamicHeight={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <Button
              top={size.paddingBottom}
              type="button"
              onClick={onClickHandler}
              aria-label="이전 사진으로 이동"
              direction={0}
            >
              <NavigateBefore size="30" />
            </Button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <Button
              top={size.paddingBottom}
              type="button"
              onClick={onClickHandler}
              aria-label="다음 사진으로 이동"
              direction={1}
            >
              <NavigateNext size="30" />
            </Button>
          )
        }
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
  width: 100%;
  height: 0;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: ${({ size }) => `${size.paddingBottom}%`};
  border-radius: 15px;

  & .carousel {
    height: 0;
    padding-bottom: ${({ size }) => `${size.paddingBottom}%`};
  }

  & .carousel .carousel-status {
    font-size: 1.3rem;
    position: absolute;
    text-align: center;
    line-height: 3rem;
    padding: 0;
    width: 8rem;
    height: 3rem;
    top: calc(100% - 5rem);
    right: calc(50% - 4rem);
    background-color: black;
    opacity: 0.8;
    border-radius: 5px;

    @media ${({ theme }) => theme.size.mobile} {
      font-size: 1.1rem;
      height: 2rem;
      line-height: 2rem;
      width: 5rem;
      right: calc(50% - 2.5rem);
      top: calc(100% - 3rem);
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: calc(50% - 3.5rem / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 2rem;
  box-shadow: 1px 1px 5px 0 gray;
  transition: 0.2s ease-in;
  border-radius: 50%;
  border: none;
  z-index: 10;
  cursor: pointer;
  ${({ direction }) =>
    direction
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}

  &:hover,
  &:focus {
    outline: none;
    color: white;
    background-color: gray;
    transition: 0.2s ease-in;
  }

  @media ${({ theme }) => theme.size.mobile} {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 1rem;
  }
`;
