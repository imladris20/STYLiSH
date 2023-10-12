import styled from "styled-components";

const SizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  height: 36px;
  gap: 6px;
  margin-bottom: 30px;
`;

const SizeText = styled.h4`
  color: #3f3a3a;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 2.8px;
  display: block;
`;

const SizeBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 15px;
  position: relative;
`;

const SizeInput = styled.input`
  appearance: none;
  background-color: ${(props) => props.bgColor};
  width: 36px;
  height: 36px;
  border-radius: 100%;

  &:checked{
    background-color:black;
  }
`;

export const LabelS = styled.div`
  display: flex;
  color: white;
  flex-direction: row;
  border-radius: 0;
  justify-content: center;
  position: absolute;
  left: 12px;
`

const LabelM =styled(LabelS)`
  left: 65px;
  color: #3F3A3A;
`

const LabelL =styled(LabelS)`
  left: 121px;
  color: rgba(63, 58, 58, 0.25);
`

const SizeSelection = () => {
  return (
    <SizeContainer>
      <SizeText>尺寸｜</SizeText>
      <SizeBoxContainer>
        <LabelS>S</LabelS>
        <SizeInput type="radio" name="size" value="S" bgColor="#ECECEC"/>
        <LabelM>M</LabelM>
        <SizeInput type="radio" name="size" value="M" bgColor="#ECECEC"/>
        <LabelL>L</LabelL>
        <SizeInput type="radio" name="size" value="L" bgColor="rgba(236, 236, 236, 0.25)"/>
      </SizeBoxContainer>
    </SizeContainer>
  );
};

export default SizeSelection;
