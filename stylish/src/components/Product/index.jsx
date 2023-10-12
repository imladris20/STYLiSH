import styled from "styled-components";
import { devices } from "../../assets/device";
import MainInfo, { MainInfoContainer } from "./MainInfo";
import Color from "./ColorSelection";
import Size from "./SizeSelection";
import Quantity from "./QuantitySelection";
import Submit from "./Submit";
import SubInfo from "./SubInfo";
import InfoDevider from "./MoreInfo";
import ProductDetail from "./ProductDetail"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  @media ${devices.desktopS}{
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
  return (
    <>
      <main>
        <MainContainer>
          <WiderTopContainer>
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
          </WiderTopContainer>
          <InfoDevider />
          <ProductDetail />
        </MainContainer>
      </main>
    </>
  );
};

export default Product;
