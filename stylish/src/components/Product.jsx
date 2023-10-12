import styled from "styled-components";
// import { devices } from "../assets/device";
import MainInfo from "./Product/MainInfo";
import { MainInfoContainer } from "./Product/MainInfo.jsx";
import Color from "./Product/ColorSelection";
import Size from "./Product/SizeSelection";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
`;

const SelectionForm = styled.form`
  height: 286px;
  width: 100%;
  border: 3px solid lightgreen;
  margin: 30px 0 0 0;
  text-align: left;
`;

const Product = () => {
  return (
    <>0
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
              {/* <label htmlFor="quantity">quantity：</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value="1"
                min="1"
              />
              <input type="submit" value="add cart" /> */}
            </SelectionForm>
          </MainInfoContainer>
        </MainContainer>
        <h1>我</h1>
        <h1>好</h1>
        <h1>想</h1>
        <h1>睡</h1>
        <h1>覺</h1>
      </main>
    </>
  );
};

export default Product;
