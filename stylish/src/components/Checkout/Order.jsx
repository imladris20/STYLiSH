import styled from "styled-components";
import { devices } from "../../assets/device";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
  @media ${devices.desktopS} {
    margin-bottom: 50px;
  }
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

  @media ${devices.desktopS} {
    margin-bottom: 16px;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 1px #3f3a3a solid;
  @media ${devices.desktopS} {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 120px 576px;
    padding-top: 25px;
    grid-row-gap: 30px;
    align-items: center;
    position: relative;
  }
`;

const OrderLabel = styled.label`
  color: #3f3a3a;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  text-align: left;
  @media ${devices.desktopS} {
    width: 120px;
    margin: 0;
    font-size: 16px;
    line-height: 19px;
  }
`;

const NameLabel = styled(OrderLabel)`
  @media ${devices.desktopS} {
    margin-bottom: 29px;
  }
`;

const OrderTextInput = styled.input`
  border-radius: 8px;
  border: 1px #979797 solid;
  height: 32px;
  line-height: 32px;
  margin-bottom: 20px;
  padding-left: 5px;
  font-size: 14px;
  @media ${devices.desktopS} {
    width: 576px;
    margin: 0;
  }
`;

const NameInput = styled(OrderTextInput)`
  @media ${devices.desktopS} {
    margin-bottom: 29px;
  }
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

  @media ${devices.desktopS} {
    position: absolute;
    top: 67px;
    right: 464px;
    margin: 0px;
  }
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;

  @media ${devices.desktopS} {
    gap: 32px;
  }
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

  @media ${devices.desktopS} {
    font-size: 16px;
  }
`;

const DeliveryRadio = styled.input`
  appearance: none;
  border-radius: 999px;
  height: 16px;
  width: 16px;
  border: 1px #979797 solid;
  margin-right: 6px;
  line-height: 26px;
  cursor: pointer;
  &:checked {
    background-color: #8b572a;
    border: 1px solid #8b572a;
  }

  @media ${devices.desktopS} {
    margin-right: 8px;
  }
`;

const Order = () => {
  return (
    <>
      <TopContainer>
        <OrderHeadline>訂購資料</OrderHeadline>
        <OrderContainer>
          <NameLabel>收件人姓名</NameLabel>
          <NameInput type="text" name="name" required />
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
