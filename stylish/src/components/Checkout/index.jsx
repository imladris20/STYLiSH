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
  const placeHolder = [
    {
      id: 201807201824,
      name: "前開衩扭結洋裝",
      price: 799,
      color: { code: "FFFFFF", name: "白色" },
      size: "M",
      qty: 1,
      maxQty: 1,
      serialNo: "201807201824+FFFFFF+M",
      image: "https://api.appworks-school.tw/assets/201807201824/main.jpg",
    },
    {
      id: 201807201824,
      name: "前開衩扭結洋裝",
      price: 799,
      color: { code: "DDFFBB", name: "亮綠" },
      size: "L",
      qty: 4,
      maxQty: 5,
      serialNo: "201807201824+DDFFBB+L",
      image: "https://api.appworks-school.tw/assets/201807201824/main.jpg",
    },
    {
      id: 201807201824,
      name: "前開衩扭結洋裝",
      price: 799,
      color: { code: "CCCCCC", name: "淺灰" },
      size: "S",
      qty: 4,
      maxQty: 8,
      serialNo: "201807201824+CCCCCC+S",
      image: "https://api.appworks-school.tw/assets/201807201824/main.jpg",
    },
  ];

  return (
    <>
      <TopContainer>
        <Cart placeHolder={placeHolder} />
        <Order placeHolder={placeHolder} />
        <Payment placeHolder={placeHolder} />
        <FinalCheckout placeHolder={placeHolder} />
      </TopContainer>
    </>
  );
};

export default Checkout;
