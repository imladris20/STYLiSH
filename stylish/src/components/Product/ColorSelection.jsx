import styled from "styled-components";
import { devices } from "../../assets/device";

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 194px;
  height: 36px;
  margin-bottom: 28px;

  @media ${devices.desktopS} {
    width: 232px;
    margin-bottom: 30px;
  }
`;

const ColorText = styled.h4`
  color: #3f3a3a;
  font-size: 14px;
  font-family: Noto Sans TC;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 2.8px;
  padding-right: 18px;
  display: block;
  white-space: nowrap;
  margin: 0;

  @media ${devices.desktopS} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 4px;
    padding-right: 28px;
  }
`;

const ColorBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  gap: 27px;

  @media ${devices.desktopS} {
    gap: 32px;
  }
`;

const ColorInput = styled.input`
  appearance: none;
  background-color: ${({ color }) => color};
  border: 1px solid #d3d3d3;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:checked {
    outline: 1px solid #979797;
    outline-offset: 6px;
  }
`;

const ColorSelection = ({ colors, onColorChange, selectedColor }) => {
  let arr = colors.map((element) => {
    return (
      <ColorInput
        key={element.code}
        type="radio"
        name="color"
        color={`#${element.code}`}
        onChange={() => onColorChange(element.code)}
        checked={selectedColor === element.code}
      />
    );
  });

  return (
    <ColorContainer>
      <ColorText>顏色｜</ColorText>
      <ColorBoxContainer>{arr}</ColorBoxContainer>
    </ColorContainer>
  );
};

export default ColorSelection;
