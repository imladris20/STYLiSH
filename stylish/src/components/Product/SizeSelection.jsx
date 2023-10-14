import styled from "styled-components";
import { devices } from "../../assets/device";

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
  justify-content: space-between;
  flex: 1;

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
`;

const SizeInput = styled.input`
  appearance: none;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  grid-column-start: 1;
  grid-row-start: 1;
  cursor: pointer;
  background-color: ${({ color }) => color};

  &:checked {
    background-color: black;
  }
`;

export const LabelS = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  color: white;
  border-radius: 0;
  grid-column-start: 1;
  grid-row-start: 1;
  cursor: pointer;
  z-index: 999;
`;

const LabelM = styled(LabelS)`
  color: #3f3a3a;
`;

const LabelL = styled(LabelS)`
  color: rgba(63, 58, 58, 0.25);
`;

const SizeSelection = () => {
  return (
    <SizeContainer>
      <SizeText>尺寸｜</SizeText>
      <SizeBoxesContainer>
        <SizeBox>
          <LabelS>S</LabelS>
          <SizeInput type="radio" name="size" value="S" color="#000" />
        </SizeBox>
        <SizeBox>
          <LabelM>M</LabelM>
          <SizeInput type="radio" name="size" value="M" color="#ECECEC" />
        </SizeBox>
        <SizeBox>
          <LabelL>L</LabelL>
          <SizeInput
            type="radio"
            name="size"
            value="L"
            color="rgba(236, 236, 236, 0.25)"
          />
        </SizeBox>
      </SizeBoxesContainer>
    </SizeContainer>
  );
};

export default SizeSelection;
