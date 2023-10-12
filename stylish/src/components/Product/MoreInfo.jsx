import styled from "styled-components";
import { devices } from "../../assets/device";

const MoreInfoContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  margin: 28px 24px 12px 24px;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;

  @media ${devices.desktopS}{
    margin: 50.33px 0 28px 0;
  }
`;

const MoreInfoText = styled.span`
  color: #8b572a;
  font-size: 16px;
  font-style: normal;
  line-height: 30px;
  letter-spacing: 3.2px;
  margin: 0 35px 0 0;
  white-space: nowrap;

  @media ${devices.desktopS}{
    font-size: 20px;
    letter-spacing: 3.2px;
  }
`;

const MoreInfoSplit = styled.hr`
  ${'' /* border-color: #3f3a3a; */}
  width: 100%;
  margin: 0;
  
  @media ${devices.desktopS}{
    ${'' /* border-color: unset; */}
  }
`;

const MoreInfo = () => {
  return (
    <MoreInfoContainer>
      <MoreInfoText>更多產品資訊</MoreInfoText>
      <MoreInfoSplit />
    </MoreInfoContainer>
  );
};

export default MoreInfo;