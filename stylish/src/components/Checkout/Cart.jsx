import styled from "styled-components";
import { devices } from "../../assets/device";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;

  @media ${devices.desktopS} {
    margin-bottom: 50px;
  }
`;

const CartHeadline = styled.h1`
  color: #3f3a3a;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  word-wrap: break-word;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: left;
  display: inline;
`;

const CartListIndexContainer = styled.div`
  display: none;

  @media ${devices.desktopS} {
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: row;
    gap: 160px;
    margin-right: 206px;
  }
`;

const CartListIndexLabel = styled(CartHeadline)`
  font-weight: 400;
  line-height: 16px;
`;

const CartListContainer = styled.div`
  height: 793px;
  margin: 0px;

  @media ${devices.desktopS} {
    border: 1px #979797 solid;
    padding: 40px 30px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const CartListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px #3f3a3a solid;

  @media ${devices.desktopS} {
    flex-direction: row;
    position: relative;
    padding: 0;
    border: none;
  }
`;

const ItemMainInfoContainer = styled.div`
  display: grid;
  height: 152px;
  grid-template-rows: 1fr;
  grid-template-columns: 114px 1fr 50px;
  grid-gap: 10px;
  margin-bottom: 20px;

  @media ${devices.desktopS} {
    margin: 0px;
    grid-template-columns: 114px 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 0px;
    margin-right: 242px;
  }
`;

const ItemImage = styled.img`
  width: 114px;
  height: auto;
  margin: 0px;
  grid-row: 1;
  grid-column: 1;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  grid-row: 1;
  grid-column: 2;
`;

const ItemTextTemplate = styled.h3`
  color: #3f3a3a;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  word-wrap: break-word;
  text-align: left;
  margin: 0px;

  @media ${devices.desktopS} {
    font-size: 16px;
    line-height: 19px;
  }
`;

const ItemTitle = styled(ItemTextTemplate)`
  color: black;
  margin-bottom: 20px;

  @media ${devices.desktopS} {
    margin-bottom: 18px;
  }
`;

const ItemID = styled(ItemTextTemplate)`
  margin-bottom: 24px;

  @media ${devices.desktopS} {
    margin-bottom: 22px;
  }
`;

const ItemColor = styled(ItemTextTemplate)`
  margin-bottom: 12px;
  @media ${devices.desktopS} {
    margin-bottom: 10px;
  }
`;

const ItemSize = styled(ItemTextTemplate)``;

const TrashContainer = styled.div`
  position: relative;
  @media ${devices.desktopS} {
    position: unset;
  }
`;

const TrashImg = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;

  @media ${devices.desktopS} {
    top: 54px;
  }
`;

const ItemSelectionsContainer = styled.div`
  display: grid;
  height: 59px;
  grid-template-rows: 17px 1fr;
  grid-template-columns: 104px 1fr 104px;

  @media ${devices.desktopS} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    height: unset;
    gap: 111px;
  }
`;

const SelectionText = styled(ItemTextTemplate)`
  text-align: center;

  @media ${devices.desktopS} {
    display: none;
  }
`;

const QuantitySelect = styled.select`
  border: 1px #979797 solid;
  background: #f3f3f3;
  border-radius: 8px;
  height: 30px;
  width: 80px;
  align-self: end;
  justify-self: center;
  padding-left: 16px;
  color: #3f3a3a;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  @media ${devices.desktopS} {
    align-self: center;
  }
`;

const ItemPrice = styled(ItemTextTemplate)`
  text-align: center;
  padding-top: 18px;

  @media ${devices.desktopS} {
    padding: 0;
    align-self: center;
  }
`;

const Cart = ({ placeHolder }) => {
  const items = placeHolder.map((element, index) => {
    const { id, name, price, color, size, qty, maxQty, image } = element;

    const options = [];

    for (let i = 1; i <= maxQty; i++) {
      options.push(<option key={i}>{i}</option>);
    }

    return (
      <CartListItem key={index}>
        <ItemMainInfoContainer>
          <ItemImage src={image} alt="item1"></ItemImage>
          <InfoTextContainer>
            <ItemTitle>{name}</ItemTitle>
            <ItemID>{id}</ItemID>
            <ItemColor>顏色｜{color.name}</ItemColor>
            <ItemSize>尺寸｜{size}</ItemSize>
          </InfoTextContainer>
          <TrashContainer>
            <TrashImg src="/trash.png"></TrashImg>
          </TrashContainer>
        </ItemMainInfoContainer>
        <ItemSelectionsContainer>
          <SelectionText>數量</SelectionText>
          <SelectionText>單價</SelectionText>
          <SelectionText>小計</SelectionText>
          <QuantitySelect defaultValue={qty} name="quantity">
            {options}
          </QuantitySelect>
          <ItemPrice>TWD.{price}</ItemPrice>
          <ItemPrice>TWD.{price * qty}</ItemPrice>
        </ItemSelectionsContainer>
      </CartListItem>
    );
  });

  return (
    <>
      <TopContainer>
        <CartHeadline>購物車</CartHeadline>
        <CartListIndexContainer>
          <CartListIndexLabel>數量</CartListIndexLabel>
          <CartListIndexLabel>單價</CartListIndexLabel>
          <CartListIndexLabel>小計</CartListIndexLabel>
        </CartListIndexContainer>
        <CartListContainer>{items}</CartListContainer>
      </TopContainer>
    </>
  );
};

export default Cart;
