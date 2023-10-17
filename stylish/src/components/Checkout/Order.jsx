import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px green solid;
`;

const Order = () => {
  return (
    <>
      <TopContainer>
        <h1>Here is Order</h1>
      </TopContainer>
    </>
  );
};

export default Order;
