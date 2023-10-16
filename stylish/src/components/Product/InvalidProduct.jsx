import styled from "styled-components";

const NotExist = styled.div`
  display: block;
  margin: 50px auto;
  max-width: 100%;
  height: auto;
`;

const NotExistImg = styled.img`
  width: 100%;
`;

const InvalidProduct = () => {
  return (
    <NotExist>
      <h1>沒有符合的商品存在</h1>
      <NotExistImg src="/no-product.png" alt="invalid id" />
    </NotExist>
  );
};

export default InvalidProduct;
