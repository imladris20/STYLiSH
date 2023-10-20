import { useContext } from "react";
import styled from "styled-components";
import { devices } from "../../assets/device";
import InputContext from "../../context/InputContext";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
  position: relative;
  @media ${devices.desktopS} {
    margin-bottom: 50px;
    position: unset;
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
    margin-bottom: 15px;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 1px #3f3a3a solid;
  position: relative;
  @media ${devices.desktopS} {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 120px 576px;
    padding-top: 25px;
    grid-row-gap: 30px;
    align-items: center;
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
  &::placeholder {
    color: #cccccc;
    font-size: 14px;
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
    font-size: 16px;
    line-height: 19px;
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

const RequiredReminder = styled.p`
  display: ${(props) => (props.$isNameBlank ? "block" : "none")};
  position: absolute;
  color: palevioletred;
  font-size: 12px;
  font-weight: 400;
  top: 56px;
  right: 10px;

  @media ${devices.desktopS} {
    top: 33px;
    right: 400px;
  }
`;

const NameInvalid = styled(RequiredReminder)`
  display: ${(props) => (props.$isNameInvalid ? "block" : "none")};
  @media ${devices.desktopS} {
    right: 324px;
  }
`;

const PhoneRequired = styled(RequiredReminder)`
  display: ${(props) => (props.$isPhoneBlank ? "block" : "none")};
  top: 157px;
  @media ${devices.desktopS} {
    top: 124px;
  }
`;

const PhoneInvalid = styled(RequiredReminder)`
  display: ${(props) => (props.$isPhoneInvalid ? "block" : "none")};
  top: 157px;
  @media ${devices.desktopS} {
    top: 124px;
    right: 324px;
  }
`;

const AddressRequired = styled(RequiredReminder)`
  display: ${(props) => (props.$isAddressBlank ? "block" : "none")};
  top: 236px;
  @media ${devices.desktopS} {
    top: 186px;
  }
`;

const AddressInvalid = styled(RequiredReminder)`
  display: ${(props) => (props.$isAddressInvalid ? "block" : "none")};
  top: 236px;
  @media ${devices.desktopS} {
    top: 186px;
    right: 324px;
  }
`;

const EmailRequired = styled(RequiredReminder)`
  display: ${(props) => (props.$isEmailBlank ? "block" : "none")};
  top: 315px;
  @media ${devices.desktopS} {
    top: 248px;
  }
`;

const EmailInvalid = styled(RequiredReminder)`
  display: ${(props) => (props.$isEmailInvalid ? "block" : "none")};
  top: 315px;
  @media ${devices.desktopS} {
    top: 248px;
    right: 324px;
  }
`;

const TimeRequired = styled(RequiredReminder)`
  display: ${(props) => (props.$isTimeBlank ? "block" : "none")};
  top: 360px;
  left: 65px;
  right: unset;
  @media ${devices.desktopS} {
    top: 309px;
    left: 600px;
  }
`;

const Order = () => {
  const {
    name,
    isNameBlank,
    isNameInvalid,
    phone,
    isPhoneBlank,
    isPhoneInvalid,
    address,
    isAddressBlank,
    isAddressInvalid,
    email,
    isEmailBlank,
    isEmailInvalid,
    deliveryRadio,
    isTimeBlank,
    actions,
  } = useContext(InputContext);

  return (
    <>
      <TopContainer>
        <OrderHeadline>訂購資料</OrderHeadline>
        <OrderContainer>
          <NameLabel>收件人姓名</NameLabel>
          <NameInput
            type="text"
            name="name"
            value={name}
            onChange={actions.handleNameChange}
            onBlur={actions.handleNameInvalid}
            placeholder="請輸入繁體中文或英文"
          />
          <NameReminder>
            務必填寫完整收件人姓名，避免包裹無法順利簽收
          </NameReminder>
          <RequiredReminder $isNameBlank={isNameBlank}>
            你484沒填
          </RequiredReminder>
          <NameInvalid $isNameInvalid={isNameInvalid}>
            你填寫的姓名似乎不完整
          </NameInvalid>
          <OrderLabel>手機</OrderLabel>
          <OrderTextInput
            type="text"
            name="phone"
            value={phone}
            onChange={actions.handlePhoneChange}
            onBlur={actions.handlePhoneInvalid}
            placeholder="請輸入0~9之間的數字"
          />
          <PhoneRequired $isPhoneBlank={isPhoneBlank}>你484沒填</PhoneRequired>
          <PhoneInvalid $isPhoneInvalid={isPhoneInvalid}>
            你填寫的電話似乎不完整
          </PhoneInvalid>
          <OrderLabel>地址</OrderLabel>
          <OrderTextInput
            type="text"
            name="address"
            value={address}
            onChange={actions.handleAddressChange}
            onBlur={actions.handleAddressInvalid}
            placeholder="請填寫完整地址"
          />

          <AddressRequired $isAddressBlank={isAddressBlank}>
            你484沒填
          </AddressRequired>
          <AddressInvalid $isAddressInvalid={isAddressInvalid}>
            你填寫的地址似乎不完整
          </AddressInvalid>
          <OrderLabel>Email</OrderLabel>
          <OrderTextInput
            type="email"
            name="email"
            value={email}
            onChange={actions.handleEmailChange}
            onBlur={actions.handleEmailInvalid}
            placeholder="請填寫完整email"
          />
          <EmailRequired $isEmailBlank={isEmailBlank}>你484沒填</EmailRequired>
          <EmailInvalid $isEmailInvalid={isEmailInvalid}>
            你填寫的email似乎怪怪的
          </EmailInvalid>
          <OrderLabel>配送時間</OrderLabel>
          <DeliveryContainer>
            <DeliveryText>
              <DeliveryRadio
                type="radio"
                name="time"
                checked={deliveryRadio[0]}
                onChange={() => actions.handleTimeChange(0)}
              />
              08:00-12:00
            </DeliveryText>
            <DeliveryText>
              <DeliveryRadio
                type="radio"
                name="time"
                checked={deliveryRadio[1]}
                onChange={() => actions.handleTimeChange(1)}
              />
              14:00-18:00
            </DeliveryText>
            <DeliveryText>
              <DeliveryRadio
                type="radio"
                name="time"
                checked={deliveryRadio[2]}
                onChange={() => actions.handleTimeChange(2)}
              />
              不指定
            </DeliveryText>
          </DeliveryContainer>
          <TimeRequired $isTimeBlank={isTimeBlank}>
            請選擇配送時間！
          </TimeRequired>
        </OrderContainer>
      </TopContainer>
    </>
  );
};

export default Order;
