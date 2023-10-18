import styled from "styled-components";
import { devices } from "../../assets/device";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CheckoutInfoContainer = styled.div`
  height: 168px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckoutInfoRowContainer = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Devider = styled.div`
  width: 100%;
  border: 1px #3f3a3a solid;
`;

const CheckoutLabel = styled.h5`
  margin: 0px auto 0 0;
  color: #3f3a3a;
  font-size: 16px;
  font-family: Noto Sans TC;
  font-weight: 400;
  line-height: 19px;
  word-wrap: break-word;
`;

const CheckoutCurrency = styled(CheckoutLabel)`
  margin-right: 8px;
`;

const CheckoutValue = styled.h4`
  color: #3f3a3a;
  font-size: 30px;
  font-family: Noto Sans TC;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  margin: 0;
`;

const FinalCheckoutButton = styled.button`
  background-color: black;
  width: 100%;
  color: white;
  font-size: 16px;
  font-family: Noto Sans TC;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 3.2px;
  word-wrap: break-word;
  border: none;
  margin-top: 36px;
  height: 44px;

  @media ${devices.desktopS} {
    width: 240px;
  }
`;

const FinalCheckout = () => {
  return (
    <>
      <TopContainer>
        <CheckoutInfoContainer>
          <CheckoutInfoRowContainer>
            <CheckoutLabel>總金額</CheckoutLabel>
            <CheckoutCurrency>NT.</CheckoutCurrency>
            <CheckoutValue>2397</CheckoutValue>
          </CheckoutInfoRowContainer>
          <CheckoutInfoRowContainer>
            <CheckoutLabel>運費</CheckoutLabel>
            <CheckoutCurrency>NT.</CheckoutCurrency>
            <CheckoutValue>30</CheckoutValue>
          </CheckoutInfoRowContainer>
          <Devider />
          <CheckoutInfoRowContainer>
            <CheckoutLabel>應付金額</CheckoutLabel>
            <CheckoutCurrency>NT.</CheckoutCurrency>
            <CheckoutValue>2427</CheckoutValue>
          </CheckoutInfoRowContainer>
        </CheckoutInfoContainer>
        <FinalCheckoutButton>確認付款</FinalCheckoutButton>
      </TopContainer>
    </>
  );
};

export default FinalCheckout;
