import styled from "styled-components";
// import { devices } from "../assets/device";
import MainInfo, { MainInfoContainer } from "./Product/MainInfo";
import Color from "./Product/ColorSelection";
import Size from "./Product/SizeSelection";
import Quantity from "./Product/QuantitySelection";
import Submit from "./Product/Submit";
import SubInfo from "./Product/SubInfo";
import InfoDevider from "./Product/MoreInfo";
import ProductDetail from "./Product/ProductDetail"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
`;

const SelectionForm = styled.form`
  height: auto;
  width: 100%;
  ${"" /* border: 3px solid lightgreen; */}
  margin: 30px 0 0 0;
  text-align: left;
`;

const Product = () => {
  return (
    <>
      <main>
        <MainContainer>
          <div>
            <MainImage src="/product-placeholder.jpeg" />
          </div>
          <MainInfoContainer>
            <MainInfo />
            <SelectionForm action="/" method="post">
              <Color />
              <Size />
              <Quantity />
              <Submit />
            </SelectionForm>
            <SubInfo />
          </MainInfoContainer>
          <InfoDevider />
          <ProductDetail />
        </MainContainer>
      </main>
    </>
  );
};

export default Product;
