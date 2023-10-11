import styled from "styled-components";
import { devices } from "../assets/device";
import Footer__linklist from "./Footer/Footer_linklist";
import Footer__socialmedia from "./Footer/Footer_socialmedia";

const StylishFooter = styled.footer`
  width: 100%;
  background-color: #313538;
  margin-bottom: 60px;

  @media ${devices.desktopS} {
    margin-bottom: 0px;
  }
`;

const Footer__wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 146px;
  padding-top: 23px;
  padding-bottom: 20px;

  @media ${devices.desktopS} {
    flex-direction: row;
    justify-content: flex-end;
    height: 115px;
    max-width: 1160px;
    padding-top: 0;
    padding-bottom: 0;
    gap: 30px;
  }
`;

const Footer__link_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 296px;
  height: 76px;
  font-size: 14px;

  @media ${devices.desktopS} {
    height: auto;
    width: auto;
    gap: 101px;
    font-size: 16px;
  }
`;

const Footer__copyright_text = styled.span`
  color: #828282;
  font-size: 10px;
  transform: scale(0.833);

  @media ${devices.desktopS} {
    font-size: 12px;
    transform: none;
  }
`;

const Footer = () => {
  return (
    <StylishFooter>
      <Footer__wrapper>
        <Footer__link_wrapper>
          <Footer__linklist />
          <Footer__socialmedia />
        </Footer__link_wrapper>
        <Footer__copyright_text>
          &copy; 2018. All rights reserved.
        </Footer__copyright_text>
      </Footer__wrapper>
    </StylishFooter>
  );
};

export default Footer;
