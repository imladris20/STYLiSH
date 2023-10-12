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

  @media ${devices.mobileL}{
    padding: 0px 48.5px 0px 48.5px;
  }
  

`;

const QuantityInput = styled.input`
  appearance: textfield;
  border: none;
  text-align: center;
  color: #8b572a;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
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
`;

const Quantity = () => {
  return (
    <QuantityContainer>
      <QuatityBtn>-</QuatityBtn>
      <QuantityInput type="number" name="quantity" placeholder="1"/>
      <QuatityBtn>+</QuatityBtn>
    </QuantityContainer>
  );
};

export default Quantity;
