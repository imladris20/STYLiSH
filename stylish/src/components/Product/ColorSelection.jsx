import styled from "styled-components";
import { devices } from "../../assets/device";
const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 194px;
  height: 36px;
  gap: 12px;
  margin-bottom: 28px;

  @media ${devices.desktopS}{
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
  display: block;
  white-space: nowrap;
  margin: 0;

  @media ${devices.desktopS} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 4px;
  }
`;

const ColorBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  gap: 32px;
`;

const ColorInput = styled.input`
  appearance: none;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #d3d3d3;
  width: 24px;
  height: 24px;

  &:checked {
    outline: 1px solid #979797;
    outline-offset: 6px;
  }
`;

const ColorSelection = () => {
  return (
    <ColorContainer>
      <ColorText>顏色｜</ColorText>
      <ColorBoxContainer>
        <ColorInput type="radio" name="color" bgColor="#fff" />
        <ColorInput type="radio" name="color" bgColor="#dfb" />
        <ColorInput type="radio" name="color" bgColor="#ccc" />
      </ColorBoxContainer>
    </ColorContainer>
  );
};

export default ColorSelection;
