import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//  Components
import { devices } from "../../assets/device";
import Loading from "../Loading";
import Color from "./ColorSelection";
import MainInfo, { MainInfoContainer } from "./MainInfo";
import InfoDevider from "./MoreInfo";
import ProductDetail from "./ProductDetail";
import Quantity from "./QuantitySelection";
import Size from "./SizeSelection";
import SubInfo from "./SubInfo";
import Submit from "./Submit";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  @media ${devices.desktopS} {
    margin: 65px auto 49px auto;
    max-width: 960px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;

  @media ${devices.desktopS} {
    width: 560px;
  }
`;

const SelectionForm = styled.form`
  height: auto;
  width: 100%;
  margin: 30px 0 0 0;
  text-align: left;
`;

const WiderTopContainer = styled.div`
  @media ${devices.desktopS} {
    display: flex;
    flex-direction: row;
    visibility: unset;
  }
`;

const Product = () => {
  const { id } = useParams();
  const redirect = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        setLoading(true);
        const data = await axios.get(
          `https://api.appworks-school.tw/api/1.0/products/details?id=${id}`
        );
        const product = await data.data.data;
        if (!product) {
          throw "Invalid ID";
        }
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error(new Error(error));
        return redirect("/product/invalidid");
      }
    };

    getProduct(id);
  }, [id]);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentMaxQuantity, setMaxQuantity] = useState(null);
  const [availableSize, setAvailableSize] = useState([]);
  const [initialMaxQuantity, setInitialMaxQuantity] = useState(null);

  const handleColorChange = (colorcode) => {
    setSelectedColor(colorcode);
    setAvailableSize([]);
    setMaxQuantity(null);
    setAvailableSize(
      product.variants.filter((variant) => variant.color_code === colorcode)
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    const finalSelection = product.variants.filter(
      (variant) => variant.color_code === selectedColor && variant.size === size
    );
    if (!initialMaxQuantity) {
      setInitialMaxQuantity(finalSelection[0].stock);
    }
    setMaxQuantity(finalSelection[0].stock);
  };

  const [amountToSubmit, setAmountToSubmit] = useState(0);

  const handleAmountToSubmitChange = (number) => {
    setAmountToSubmit(number);
  };

  useEffect(() => {
    setSelectedColor(null);
    setSelectedSize(null);
    setMaxQuantity(null);
    setInitialMaxQuantity(null);
    setAvailableSize([]);
  }, [product.variants]);

  return (
    <>
      <main>
        {loading ? (
          <Loading />
        ) : (
          <MainContainer>
            <WiderTopContainer>
              <div>
                <MainImage src={product.main_image} />
              </div>
              <MainInfoContainer>
                <MainInfo
                  title={product.title}
                  id={product.id}
                  price={product.price}
                />
                <SelectionForm action="/" method="post">
                  <Color
                    colors={product.colors}
                    onColorChange={handleColorChange}
                    selectedColor={selectedColor}
                  />
                  <Size
                    sizes={product.sizes}
                    availableSize={availableSize}
                    onSizeChange={handleSizeChange}
                  />
                  <Quantity
                    currentMaxQuantity={currentMaxQuantity}
                    onAmountChange={handleAmountToSubmitChange}
                  />
                  <Submit
                    selectedColor={selectedColor}
                    selectedSize={selectedSize}
                    amountToSubmit={amountToSubmit}
                    setProduct={setProduct}
                    product={product}
                    initialMaxQuantity={initialMaxQuantity}
                  />
                </SelectionForm>
                <SubInfo
                  note={product.note}
                  texture={product.texture}
                  description={product.description}
                  wash={product.wash}
                  place={product.place}
                />
              </MainInfoContainer>
            </WiderTopContainer>
            <InfoDevider />
            <ProductDetail story={product.story} images={product.images} />
          </MainContainer>
        )}
      </main>
    </>
  );
};

export default Product;
