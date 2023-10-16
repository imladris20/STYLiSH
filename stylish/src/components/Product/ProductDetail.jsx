import styled from "styled-components";
import { devices } from "../../assets/device";

const DetailContainer = styled.div`
  margin: 0px 24px 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${devices.desktopS} {
    margin: 0;
    gap: 30px;
  }
`;

const Story = styled.p`
  color: #3f3a3a;
  font-size: 14px;
  line-height: 25px;
  word-wrap: break-word;
  text-align: justify;

  @media ${devices.desktopS} {
    font-size: 20px;
    line-height: 30px;
  }
`;

const DetailImage = styled.img`
  width: 100%;
`;

const ProductDetail = ({ story, images }) => {
  const detailImages = images.map((element, index) => {
    return <DetailImage src={element} key={index} />;
  });

  return (
    <DetailContainer>
      <Story>{story}</Story>
      {detailImages}
    </DetailContainer>
  );
};

export default ProductDetail;
