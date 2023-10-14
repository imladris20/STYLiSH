import styled from "styled-components";
import { devices } from "../../assets/device";
import FooterLinkList from "./FooterLinkList";
import FooterSocialMedia from "./FooterSocialMedia";

const StylishFooter = styled.footer`
  width: 100%;
  background-color: #313538;
  margin-bottom: 60px;

  @media ${devices.desktopS} {
    margin-bottom: 0px;
  }
`;

const FooterWrapper = styled.div`
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

const FooterLinkWrapper = styled.div`
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

const FooterCopyright = styled.span`
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
      <FooterWrapper>
        <FooterLinkWrapper>
          <FooterLinkList />
          <FooterSocialMedia />
        </FooterLinkWrapper>
        <FooterCopyright>
          &copy; 2018. All rights reserved.
        </FooterCopyright>
      </FooterWrapper>
    </StylishFooter>
  );
};

export default Footer;
