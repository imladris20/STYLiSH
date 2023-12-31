import { useContext, useState } from "react";
import styled from "styled-components";
import { devices } from "../../assets/device";
import UserContext from "../../context/UserContext";

const SubmitBtn = styled.input`
  background-color: ${(props) => props.$buttonColor};
  width: 100%;
  height: 44px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 3.2px;
  cursor: pointer;

  @media ${devices.desktopS} {
    font-size: 20px;
    letter-spacing: 4px;
    height: 64px;
    border: 1px #979797 solid;
  }
`;

const Submit = ({
  amountToSubmit,
  selectedColor,
  selectedSize,
  product,
  setProduct,
  initialMaxQuantity,
}) => {
  const { actions } = useContext(UserContext);
  const [reminder, setReminder] = useState("加入購物車");
  const [buttonColor, setbuttonColor] = useState("black");

  function addCartCounter(number) {
    const currentCartCounter = localStorage.getItem("cartCount") || 0;

    const newCount = parseInt(currentCartCounter, 10) + number;

    localStorage.setItem("cartCount", newCount);

    actions.setCartCount(newCount);
  }

  const handleClick = () => {
    if (!initialMaxQuantity || amountToSubmit === 0) {
      setReminder("顏色、尺寸與數量都要選好才能加入喔~");
      setbuttonColor("grey");
      setTimeout(() => {
        setReminder("加入購物車");
        setbuttonColor("black");
      }, 2000);
      return;
    }

    const currentList = JSON.parse(localStorage.getItem("list")) || [];

    const newListItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      color: product.colors.find((color) => color.code === selectedColor),
      size: selectedSize,
      qty: amountToSubmit,
      maxQty: initialMaxQuantity,
      serialNo: `${product.id}+${selectedColor}+${selectedSize}`,
      image: product.main_image,
    };

    const existingItem = currentList.find(
      (item) => item.serialNo === newListItem.serialNo
    );

    if (!existingItem) {
      currentList.push(newListItem);
    } else {
      existingItem.qty += newListItem.qty;
    }

    localStorage.setItem("list", JSON.stringify(currentList));

    addCartCounter(amountToSubmit);

    const updatedVariants = product.variants.map((variant) => {
      if (
        variant.color_code === selectedColor &&
        variant.size === selectedSize
      ) {
        const updatedStock = variant.stock - amountToSubmit;
        const newStock = Math.max(updatedStock, 0);
        return { ...variant, stock: newStock };
      } else {
        return { ...variant };
      }
    });

    setProduct({ ...product, variants: updatedVariants });
  };

  return (
    <SubmitBtn
      type="button"
      value={reminder}
      onClick={handleClick}
      $buttonColor={buttonColor}
    />
  );
};

export default Submit;
