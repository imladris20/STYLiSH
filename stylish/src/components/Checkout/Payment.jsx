import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
`;

const Payment = () => {
  return (
    <>
      <TopContainer>
        <h1>Here is Payment</h1>
      </TopContainer>
    </>
  );
};

export default Payment;
