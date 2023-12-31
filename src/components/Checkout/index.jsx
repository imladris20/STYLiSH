import styled from "styled-components";
import { devices } from "../../assets/device";
import Cart from "./Cart";
import FinalCheckout from "./FinalCheckout";
import Order from "./Order";
import Payment from "./Payment";

const TopContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 20px 24px 28px 24px;

  @media ${devices.desktopS} {
    width: 1160px;
    margin: 51px auto 148px auto;
  }
`;

const Checkout = () => {
  return (
    <>
      <TopContainer>
        <Cart />
        <Order />
        <Payment />
        <FinalCheckout />
      </TopContainer>
    </>
  );
};

export default Checkout;
