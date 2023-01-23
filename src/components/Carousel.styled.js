import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledCarousel = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
`;

export const StyledLeft = styled.button`
  padding: 5px;
  border: solid 2px lightcoral;
  border-radius: 25px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  &:hover:enabled {
    background-color: lightcoral;
  }
  &:focus:enabled {
    background-color: lightcoral;
  }
  ${({ disabled }) =>
    disabled
      ? "border: solid 2px lightgray; background-color: lightgray; "
      : ""}
`;

export const StyledRight = styled.button`
  padding: 5px;
  border: solid 2px lightcoral;
  border-radius: 25px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  &:hover:enabled {
    background-color: lightcoral;
  }
  &:focus:enabled {
    background-color: lightcoral;
  }
  ${({ disabled }) =>
    disabled
      ? "border: solid 2px lightgray; background-color: lightgray; "
      : ""}
`;

export const StyledNavigation = styled.div`
  position: absolute;
  bottom: 0;
  right: 45%;
  display: flex;
  width: fit-content;
`;

export const StyledNavigationButton = styled.button`
  padding: 5px;
  margin-right: 5px;
  border: solid 2px lightcoral;
  border-radius: 25px;
  cursor: pointer;
  ${({ active }) => (active ? "background-color: lightcoral; " : "")}
`;
