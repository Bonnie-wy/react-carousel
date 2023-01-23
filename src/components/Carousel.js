import { useEffect, useState } from "react";
import {
  StyledContainer,
  StyledImage,
  StyledCarousel,
  StyledLeft,
  StyledRight,
  StyledNavigation,
  StyledNavigationButton
} from "./Carousel.styled";

const Carousel = ({ data }) => {
  const [count] = useState(data.length);
  const [image, setImage] = useState(0);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);

  const handleLeftClick = () => {
    if (image === 0) {
      setDisableRight(true);
      return;
    }
    setImage(image - 1);
    setDisableLeft(false);
  };

  const handleRightClick = () => {
    if (image === count - 1) {
      setDisableLeft(true);
      return;
    }
    setImage(image + 1);
    setDisableRight(false);
  };

  return (
    <StyledContainer>
      <StyledCarousel>
        <StyledLeft onClick={handleLeftClick} disabled={disableRight} />
        <StyledImage src={data[image].image} alt="nature" />
        <StyledRight onClick={handleRightClick} disabled={disableLeft} />
        <StyledNavigation>
          {data &&
            data.map((element, index) => (
              <Button
                key={element.id}
                imageNumber={index}
                currentImage={image}
                setImage={setImage}
              />
            ))}
        </StyledNavigation>
      </StyledCarousel>
    </StyledContainer>
  );
};
export default Carousel;

const Button = ({ imageNumber, setImage, currentImage }) => {
  const [active, setActive] = useState(false);

  console.log({ imageNumber, active });

  useEffect(() => {
    if (currentImage === imageNumber) {
      setActive(!active);
      return;
    }
    setActive(false);
  }, [currentImage, imageNumber]);

  const handleClick = () => {
    setImage(imageNumber);
  };

  return <StyledNavigationButton active={active} onClick={handleClick} />;
};
