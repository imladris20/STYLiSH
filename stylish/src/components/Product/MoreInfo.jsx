import styled from "styled-components";

const MoreInfoContainer = styled.div`
  width: auto;
  ${"" /* border: 3px solid lightgreen; */}
  display: flex;
  flex-direction: row;
  margin: 28px 24px 12px 24px;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const MoreInfoText = styled.span`
  color: #8b572a;
  font-size: 16px;
  font-style: normal;
  line-height: 30px;
  letter-spacing: 3.2px;
  margin: 0 35px 0 0;
  white-space: nowrap;
`;

const MoreInfoSplit = styled.hr`
  color: #3f3a3a;
  width: 100%;
  margin: 0;
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