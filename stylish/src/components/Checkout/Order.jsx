import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const OrderHeadline = styled.h1`
  color: #3f3a3a;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  word-wrap: break-word;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: left;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 1px #3f3a3a solid;
`;

const OrderLabel = styled.label`
  color: #3f3a3a;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  text-align: left;
`;

const OrderTextInput = styled.input`
  border-radius: 8px;
  border: 1px #979797 solid;
  height: 32px;
  line-height: 32px;
  margin-bottom: 20px;
  padding-left: 5px;
  font-size: 14px;
`;

const NameReminder = styled.h5`
  color: #8b572a;
  font-size: 14px;
  line-height: 17px;
  margin: 0px;
  text-align: left;
  margin-top: -14px;
  margin-bottom: 20px;
  font-weight: 400;
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
`;

const DeliveryText = styled.div`
  display: flex;
  flex-direction: row;
  height: 26px;
  color: #3f3a3a;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  align-items: center;
`;

const DeliveryRadio = styled.input`
  appearance: none;
  border-radius: 999px;
  height: 16px;
  width: 16px;
  border: 1px #979797 solid;
  margin-right: 3px;
  line-height: 26px;
  cursor: pointer;
  &:checked {
    background-color: #8b572a;
    border: 1px solid #8b572a;
  }
`;

const Order = () => {
  return (
    <>
      <TopContainer>
        <OrderHeadline>訂購資料</OrderHeadline>
        <OrderContainer>
          <OrderLabel>收件人姓名</OrderLabel>
          <OrderTextInput type="text" name="name" required />
          <NameReminder>
            務必填寫完整收件人姓名，避免包裹無法順利簽收
          </NameReminder>
          <OrderLabel>手機</OrderLabel>
          <OrderTextInput type="text" name="phone" required />
          <OrderLabel>地址</OrderLabel>
          <OrderTextInput type="text" name="address" required />
          <OrderLabel>Email</OrderLabel>
          <OrderTextInput type="email" name="email" required />
          <OrderLabel>配送時間</OrderLabel>
          <DeliveryContainer>
            <DeliveryText>
              <DeliveryRadio type="radio" name="time" />
              08:00-12:00
            </DeliveryText>
            <DeliveryText>
              <DeliveryRadio type="radio" name="time" />
              14:00-18:00
            </DeliveryText>
            <DeliveryText>
              <DeliveryRadio type="radio" name="time" />
              不指定
            </DeliveryText>
          </DeliveryContainer>
        </OrderContainer>
      </TopContainer>
    </>
  );
};

export default Order;
