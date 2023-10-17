import styled from "styled-components";
import Cart from "./Cart";
import Order from "./Order";
import Payment from "./Payment";
import FinalCheckout from "./FinalCheckout";

const TopContainer = styled.div`
  width: auto;
  height: 1889px;
  display: flex;
  flex-direction: column;
  border: 3px blue solid;
  margin: 20px 24px 0px 24px;
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
