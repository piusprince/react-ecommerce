import { useState } from "react";
import styled from "styled-components";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import { sliderData } from "../data";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "1.6rem"};
  right: ${(props) => props.direction === "right" && "1.6rem"};
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-left: 10rem;
`;

const Title = styled.h1`
  font-size: 7rem;
`;

const Desc = styled.p`
  margin: 5rem 0;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #ff5a5f;
  color: white;
  font-size: 1.8rem;
  border: none;
  border-radius: 1.5rem;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      console.log(slideIndex);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <BsArrowLeftCircle size={24} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderData.map((slide) => (
          <Slide key={slide.id} bg={slide.bg}>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <Button>Shop now</Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={slide.img} alt="model" />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <BsArrowRightCircle size={24} />
      </Arrow>
    </Container>
  );
};

export default Slider;
