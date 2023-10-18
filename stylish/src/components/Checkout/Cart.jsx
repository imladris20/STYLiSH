import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
`;

const CartListContainer = styled.div`
  height: 793px;
  margin: 0px;
`;

const CartListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px #3f3a3a solid;
`;

const ItemMainInfoContainer = styled.div`
  display: grid;
  height: 152px;
  grid-template-rows: 1fr;
  grid-template-columns: 114px 1fr 50px;
  grid-gap: 10px;
  margin-bottom: 20px;
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
`;

const ItemTitle = styled(ItemTextTemplate)`
  color: black;
  margin-bottom: 20px;
`;

const ItemID = styled(ItemTextTemplate)`
  margin-bottom: 24px;
`;

const ItemColor = styled(ItemTextTemplate)`
  margin-bottom: 12px;
`;

const ItemSize = styled(ItemTextTemplate)``;

const TrashContainer = styled.div`
  position: relative;
`;

const TrashImg = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

const ItemSelectionsContainer = styled.div`
  display: grid;
  height: 59px;
  grid-template-rows: 17px 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

const SelectionText = styled(ItemTextTemplate)`
  text-align: center;
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
`;

const ItemPrice = styled(ItemTextTemplate)`
  text-align: center;
  padding-top: 18px;
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
        <CartListContainer>{items}</CartListContainer>
      </TopContainer>
    </>
  );
};

export default Cart;
