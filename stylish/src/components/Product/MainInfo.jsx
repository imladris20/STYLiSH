import styled from "styled-components";
import { devices } from "../../assets/device";

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  margin-left: 24px;
  margin-right: 24px;
  height: auto;
  align-items: flex-start;

  @media ${devices.desktopS}{
    margin-top: 0px;
    margin-left: 40px;
    margin-right: 0px;
    width: 360px;
  }
`;

const Title = styled.h1`
  color: #3f3a3a;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 4px;
  margin: 0;
`;

const ProductId = styled.h3`
  color: #bababa;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 3.2px;
  word-wrap: break-word;
  margin: 10px 0 0 0;

  @media ${devices.desktopS}{
    margin-top: 16px;
  }
`;

const Price = styled.h2`
  color: #3f3a3a;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 20px 0 10px 0;

  @media ${devices.desktopS}{
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

const MainInfoSplit = styled.hr`
  ${'' /* border-color: #3f3a3a; */}
  width: 100%;
  margin: 0;

  @media ${devices.desktopS}{
    ${'' /* border-color: unset; */}
  }
`;

const MainInfo = () => {
  return (
    <>
      <Title>前開衩扭結洋裝</Title>
      <ProductId>201807201824</ProductId>
      <Price>TWD.799</Price>
      <MainInfoSplit />
    </>
  );
};

export default MainInfo;
