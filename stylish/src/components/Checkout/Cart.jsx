import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px red solid;
`;

const Cart = () => {
  return (
    <>
      <TopContainer>
        <h1>Here is cart</h1>
      </TopContainer>
    </>
  );
};

export default Cart;
