import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const PaymentHeadline = styled.h1`
  color: #3f3a3a;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  word-wrap: break-word;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: left;
`;

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 1px #3f3a3a solid;
`;

const PaymentLabel = styled.label`
  color: #3f3a3a;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  text-align: left;
`;

const PaymentTextInput = styled.input`
  border-radius: 8px;
  border: 1px #979797 solid;
  height: 32px;
  line-height: 32px;
  margin-bottom: 20px;
  padding-left: 5px;
  font-size: 14px;

  &::placeholder {
    color: #aaaaaa;
    font-size: 16px;
    font-family: Noto Sans TC;
    font-weight: 400;
    line-height: 32px;
    word-wrap: break-word;
  }
`;

const Payment = () => {
  return (
    <>
      <TopContainer>
        <PaymentHeadline>付款資料</PaymentHeadline>
        <PaymentContainer>
          <PaymentLabel>信用卡號碼</PaymentLabel>
          <PaymentTextInput
            type="text"
            name="cardnumber"
            placeholder="**** **** **** ****"
            required
          />
          <PaymentLabel>有效期限</PaymentLabel>
          <PaymentTextInput
            type="text"
            name="expire"
            placeholder="MM / YY"
            required
          />
          <PaymentLabel>安全碼</PaymentLabel>
          <PaymentTextInput
            type="text"
            name="authorization"
            placeholder="後三碼"
            required
          />
        </PaymentContainer>
      </TopContainer>
    </>
  );
};

export default Payment;
