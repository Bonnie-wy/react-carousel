import { useEffect, useState, useMemo } from "react";
import {
  StyledContainer,
  StyledImage,
  StyledCarousel,
  StyledLeft,
  StyledRight,
  StyledNavigation,
  StyledNavigationDots,
  StyledImageContainer,
  StyledSliderContainer,
} from "./Carousel.styled";

const Carousel = ({ data }) => {
  const [slideState, setSlideState] = useState({
    activeSlideIndex: 0,
    transition: 0.45,
    left: 0,
  });

  const disableLeft = useMemo(
    () => (slideState.activeSlideIndex < 0 ? true : false),
    [slideState.activeSlideIndex]
  );

  console.log(disableLeft);

  const disableRight = useMemo(
    () => (slideState.activeSlideIndex > data.length - 1 ? true : false),
    [slideState.activeSlideIndex]
  );

  console.log(disableRight);

  const nextSlide = () => {
    if (slideState.activeSlideIndex === data.length - 1) {
      return setSlideState({
        ...slideState,
        left: 0,
        activeSlideIndex: 0,
      });
    }

    setSlideState({
      ...slideState,
      activeSlideIndex: slideState.activeSlideIndex + 1,
      left: (slideState.activeSlideIndex + 1) * -596,
    });
  };

  const prevSlide = () => {
    if (slideState.activeSlideIndex === 0) {
      return setSlideState({
        ...slideState,
        left: (data.length - 1) * 596,
        activeSlideIndex: data.length - 1,
      });
    }

    setSlideState({
      ...slideState,
      activeIndex: slideState.activeSlideIndex - 1,
      left: (slideState.activeSlideIndex - 1) * 596,
    });
  };

  return (
    <StyledContainer>
      <StyledCarousel>
        <StyledLeft onClick={prevSlide} disabled={disableRight} />
        <StyledSliderContainer>
          <StyledImageContainer
            left={slideState.left}
            transition={slideState.transition}
          >
            {data &&
              data.map((element) => (
                <StyledImage
                  key={element.id}
                  src={element.image}
                  alt="nature"
                />
              ))}
          </StyledImageContainer>
        </StyledSliderContainer>
        <StyledRight onClick={nextSlide} disabled={disableLeft} />
        <StyledNavigation>
          {data &&
            data.map((element, index) => (
              <NavigationDots
                key={element.id}
                imageNumber={index}
                currentImage={slideState.activeSlideIndex}
                setImage={setSlideState}
              />
            ))}
        </StyledNavigation>
      </StyledCarousel>
    </StyledContainer>
  );
};
export default Carousel;

const NavigationDots = ({ imageNumber, setImage, currentImage }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (currentImage === imageNumber) {
      setActive(!active);
      return;
    }
    setActive(false);
  }, [currentImage, imageNumber]);

  const handleClick = () => {
    setImage({
      ...slideState,
      activeSlideIndex: imageNumber,
    });
  };

  return <StyledNavigationDots active={active} onClick={handleClick} />;
};
