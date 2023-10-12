import styled from "styled-components";
import { devices } from "../../assets/device";

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-bottom: 10px;
  justify-content: space-between;
  padding: 0px 35px 0px 35px;
  border: 1px solid #979797;

  @media ${devices.mobileL} {
    padding: 0px 48.5px 0px 48.5px;
  }

  @media ${devices.desktopS} {
    margin: 0px;
    width: 160px;
    padding: 0px 15px 0px 15px;
  }
`;

const QuantityText = styled.h4`
  display: none;
  @media ${devices.desktopS} {
    color: #3f3a3a;
    display: block;
    white-space: nowrap;
    font-weight: 400;
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 4px;
  }
`;

const QuantityInput = styled.input`
  appearance: textfield;
  border: none;
  text-align: center;
  color: #8b572a;
  font-size: 20px;
  width: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
  }

  @media ${devices.desktopS} {
    font-size: 16px;
    width: 16px;
    line-height: 32px;
    text-align: start;
  }
`;

const QuatityBtn = styled.p`
  color: #000;
  font-family: Noto Sans TC;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;

  @media ${devices.desktopS} {
    line-height: 32px;
  }
`;

const WiderTopContainer = styled.div`
  ${'' /* visibility: Hidden; */}

  @media ${devices.desktopS} {
    display: flex;
    gap: 8px;
    flex-direction: row;
    visibility: unset;
    align-items: center;
    height: 44px;
    width: 252px;
    margin-bottom: 26px;
  }

`

const Quantity = () => {
  return (
    <WiderTopContainer>
      <QuantityText>數量｜</QuantityText>
      <QuantityContainer>
        <QuatityBtn>-</QuatityBtn>
        <QuantityInput type="number" name="quantity" placeholder="1" />
        <QuatityBtn>+</QuatityBtn>
      </QuantityContainer>
    </WiderTopContainer>
  );
};

export default Quantity;
