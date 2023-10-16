import styled from "styled-components";
import { devices } from "../../assets/device";
import { useState, useEffect } from "react";

const SizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  height: 36px;
  margin-bottom: 30px;

  @media ${devices.desktopS} {
    margin-bottom: 22px;
    width: 240px;
  }
`;

const SizeText = styled.h4`
  color: #3f3a3a;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 2.8px;
  display: block;
  white-space: nowrap;
  margin: 0;
  padding-right: 12px;

  @media ${devices.desktopS} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 4px;
    padding-right: 22px;
  }
`;

const SizeBoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  gap: 15px;

  @media ${devices.desktopS} {
    gap: 20px;
  }
`;

const SizeBox = styled.label`
  height: 36px;
  width: 36px;
  color: #3f3a3a;
  background: #ececec;
  display: grid;
  place-items: center;
  border-radius: 100%;
  opacity: ${({ $isOutOfstock }) => ($isOutOfstock ? 0.25 : 1)};
`;

const SizeLabel = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  color: ${({ $isSelected, $isOutOfstock }) =>
    $isSelected && !$isOutOfstock ? "white" : "#3f3a3a"};
  border-radius: 0;
  grid-column-start: 1;
  grid-row-start: 1;
  cursor: ${({ $isOutOfstock }) => ($isOutOfstock ? "unset" : "pointer")};
  z-index: 99;
  opacity: ${({ $isOutOfstock }) => ($isOutOfstock ? 0.25 : 1)};
`;

const SizeInput = styled.input`
  appearance: none;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  grid-column-start: 1;
  grid-row-start: 1;
  cursor: ${({ $isOutOfstock }) => ($isOutOfstock ? "unset" : "pointer")};

  &:checked {
    background-color: ${({ $isOutOfstock }) => !$isOutOfstock && "black"};
  }
`;

const SizeSelection = ({ sizes, availableSize, onSizeChange }) => {
  const [$isSelected, setSelected] = useState(null);
  const [$isOutOfstock, setIsOutOfstock] = useState(
    new Array(sizes.length).fill(false)
  );

  useEffect(() => {
    document
      .querySelectorAll('input[type="radio"][name="size"]')
      .forEach((input) => {
        input.checked = false;
      });

    setSelected(null);

    setIsOutOfstock(
      availableSize.map((element) => {
        return element.stock === 0;
      })
    );
  }, [availableSize]);

  const clickHandler = (index) => {
    setSelected(index);
  };

  const arr = sizes.map((element, index) => {
    return (
      <SizeBox key={index} $isOutOfstock={$isOutOfstock[index]}>
        <SizeLabel
          $isSelected={index === $isSelected}
          $isOutOfstock={$isOutOfstock[index]}
        >
          {element}
        </SizeLabel>
        <SizeInput
          type="radio"
          name="size"
          onClick={() => clickHandler(index)}
          $isOutOfstock={$isOutOfstock[index]}
          onChange={() => onSizeChange(element)}
        />
      </SizeBox>
    );
  });

  return (
    <SizeContainer>
      <SizeText>尺寸｜</SizeText>
      <SizeBoxesContainer>{arr}</SizeBoxesContainer>
    </SizeContainer>
  );
};

export default SizeSelection;
