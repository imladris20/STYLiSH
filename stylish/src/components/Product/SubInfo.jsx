import styled from "styled-components";
import { devices } from "../../assets/device";

const SubInfoContainer = styled.div`
  color: #3f3a3a;
  margin: 28px 0 0 0;
  text-align: left;
  word-wrap: break-word;
  line-height: 24px;
  font-size: 14px;

  @media ${devices.desktopS} {
    margin-top: 40px;
    margin-left: 6px;
    line-height: 30px;
    font-size: 24px;
    height: 240px;
  }
`;

const SubInfo = () => {
  return (
    <SubInfoContainer>
      實品顏色依單品照為主
      <br />
      <br />
      棉 100%
      <br />
      厚薄：薄
      <br />
      彈性：無
      <br />
      <br />
      清洗：手洗，溫水
      <br />
      產地：中國
    </SubInfoContainer>
  );
};

export default SubInfo;
