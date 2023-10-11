import styled from "styled-components";
import { devices } from "../../assets/device";

const Top_Footer__linklist = styled.ul`
  row-gap: 8px;
  column-gap: 36px;
  align-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  width: 177px;
  height: 76px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;

  @media ${devices.desktopS} {
    width: 670px;
    height: 22px;
    align-content: center;
    gap: 0px;
    justify-content: unset;
    flex-direction: row;
  }
`;

const Footer__link_item = styled.li`
  line-height: 20px;
  @media ${devices.desktopS} {
    flex: 1;
    line-height: 22px;
  }
`;

const Footer__link_text = styled.a`
  color: lightgrey;
  cursor: pointer;
  @media ${devices.desktopS} {
    color: whitesmoke;
  }
`;

const Footer__link_devider = styled.li`
  color: lightgrey;
  display: none;
  @media ${devices.desktopS} {
    display: initial;
  }
`;

const Footer__linklist = () => {
  return (
    <Top_Footer__linklist>
      <Footer__link_item>
        <Footer__link_text>關於 STYLiSH</Footer__link_text>
      </Footer__link_item>
      <Footer__link_devider>|</Footer__link_devider>
      <Footer__link_item>
        <Footer__link_text>服務條款</Footer__link_text>
      </Footer__link_item>
      <Footer__link_devider>|</Footer__link_devider>
      <Footer__link_item>
        <Footer__link_text>隱私政策</Footer__link_text>
      </Footer__link_item>
      <Footer__link_devider>|</Footer__link_devider>
      <Footer__link_item>
        <Footer__link_text>聯絡我們</Footer__link_text>
      </Footer__link_item>
      <Footer__link_devider>|</Footer__link_devider>
      <Footer__link_item>
        <Footer__link_text>FAQ</Footer__link_text>
      </Footer__link_item>
    </Top_Footer__linklist>
  );
};

export default Footer__linklist;
