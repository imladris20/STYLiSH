import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../assets/device";
import UserContext from "../../context/UserContext";

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

  @media ${devices.desktopS} {
    margin-bottom: 16px;
  }
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
    margin-top: 1px;
  }
`;

const CartListIndexLabel = styled(CartHeadline)`
  font-weight: 400;
  line-height: 16px;
`;

const CartListContainer = styled.div`
  margin: 0px;

  @media ${devices.desktopS} {
    border: 1px #979797 solid;
    padding: 39px 30px 39px 29px;
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
  margin-bottom: 19px;

  @media ${devices.desktopS} {
    margin: 0px;
    grid-template-columns: 114px 354px;
    grid-column-gap: 16px;
    grid-row-gap: 0px;
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
    gap: 112px;
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
  padding-left: 11px;
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

const EmptyCart = styled.h1`
  /* border: 1px #979797 solid; */
  height: 24px;
  line-height: 22px;
  margin: 20px 0 20px 0;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #aaaaaa;

  @media ${devices.desktopS} {
    /* text-align: center; */
    font-size: 24px;
    border: none;
    height: 24px;
  }
`;

const Cart = () => {
  const { list, totalPrice, actions } = useContext(UserContext);

  const [currentQty, setCurrentQty] = useState([]);

  const handleChangeQuantity = (event, index) => {
    const updatedQty = [...currentQty];
    updatedQty[index] = parseInt(event.target.value);
    setCurrentQty(updatedQty);

    const updatedList = [...list];
    updatedList[index].qty = parseInt(event.target.value);
    actions.setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  const handleRemoveItem = (event, index) => {
    console.log(event.target);
    console.log("Remove item index: ", index);
    const updatedList = [...list];
    updatedList.splice(index, 1);
    actions.setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));

    const updatedQty = [...currentQty];
    updatedQty.splice(index, 1);
    setCurrentQty(updatedQty);
  };

  useEffect(() => {
    if (list) {
      const newTotalPrice = list.reduce((total, item, index) => {
        const subTotal = (currentQty[index] || item.qty) * item.price;
        return total + subTotal;
      }, 0);

      actions.setTotalPrice(newTotalPrice);

      const newCartCount = currentQty.reduce((totalQty, subQty) => {
        return totalQty + subQty;
      }, 0);

      actions.setCartCount(newCartCount);
      localStorage.setItem("cartCount", JSON.stringify(newCartCount));
    }
  }, [list, currentQty]);

  console.log("Current list state: ", list);
  console.log("Current Total Price: ", totalPrice);

  let items = null;

  if (list) {
    items = list.map((element, index, array) => {
      console.log("it's mapping");
      const { id, name, price, color, size, qty, maxQty, image } = element;

      const options = [];

      if (currentQty.length !== array.length) {
        currentQty.push(qty);
      }

      for (let i = 1; i <= maxQty; i++) {
        options.push(<option key={i}>{i}</option>);
      }

      const correctQty = currentQty[index] || qty;
      const subTotal = correctQty * price;

      return (
        <CartListItem key={index}>
          <ItemMainInfoContainer>
            <a href={`product/${id}`}>
              <ItemImage src={image} alt="item1"></ItemImage>
            </a>
            <InfoTextContainer>
              <a href={`product/${id}`}>
                <ItemTitle>{name}</ItemTitle>
              </a>
              <ItemID>{id}</ItemID>
              <ItemColor>顏色｜{color.name}</ItemColor>
              <ItemSize>尺寸｜{size}</ItemSize>
            </InfoTextContainer>
            <TrashContainer>
              <TrashImg
                src="/trash.png"
                onClick={(event) => handleRemoveItem(event, index)}
              ></TrashImg>
            </TrashContainer>
          </ItemMainInfoContainer>
          <ItemSelectionsContainer>
            <SelectionText>數量</SelectionText>
            <SelectionText>單價</SelectionText>
            <SelectionText>小計</SelectionText>
            <QuantitySelect
              value={currentQty[index]}
              name="quantity"
              onChange={(event) => handleChangeQuantity(event, index)}
            >
              {options}
            </QuantitySelect>
            <ItemPrice>TWD.{price}</ItemPrice>
            <ItemPrice>TWD.{subTotal}</ItemPrice>
          </ItemSelectionsContainer>
        </CartListItem>
      );
    });
  }

  console.log("Current Qty: ", currentQty);

  return (
    <>
      <TopContainer>
        <CartHeadline>購物車</CartHeadline>
        <CartListIndexContainer>
          <CartListIndexLabel>數量</CartListIndexLabel>
          <CartListIndexLabel>單價</CartListIndexLabel>
          <CartListIndexLabel>小計</CartListIndexLabel>
        </CartListIndexContainer>
        <CartListContainer>
          {list.length ? (
            items
          ) : (
            <>
              <EmptyCart>你的購物車空空如也 QQ</EmptyCart>
              <EmptyCart>去逛逛、買點東西吧 ~~~</EmptyCart>
            </>
          )}
        </CartListContainer>
      </TopContainer>
    </>
  );
};

export default Cart;
