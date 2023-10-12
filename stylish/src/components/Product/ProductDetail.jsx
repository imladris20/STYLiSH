import styled from "styled-components";
import { devices } from "../../assets/device";

const DetailContainer = styled.div`
  margin: 0px 24px 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${devices.desktopS}{
    margin: 0;
    gap: 30px;
  }
  
`;

const Description = styled.p`
  color: #3f3a3a;
  font-size: 14px;
  line-height: 25px;
  word-wrap: break-word;
  text-align: justify;

  @media ${devices.desktopS}{
    font-size: 20px;
    line-height: 30px;
  }
`;

const DetailImage = styled.img`
  width: 100%;
`;

const ProductDetail = () => {
  return (
    <DetailContainer>
      <Description>
        O.N.S is all about options, which is why we took our staple polo shirt
        and upgraded it with slubby linen jersey, making it even lighter for
        those who prefer their summer style extra-breezy.
      </Description>
      <DetailImage src="/detailedImagePlaceholder1.jpeg" />
      <DetailImage src="/detailedImagePlaceholder2.jpeg" />
    </DetailContainer>
  );
};

export default ProductDetail;
