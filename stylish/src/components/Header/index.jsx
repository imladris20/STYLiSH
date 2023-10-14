import styled from "styled-components";
import { devices } from "../../assets/device";
import HeaderLeftSectionWrapper from "./HeaderLeftSectionWrapper";
import MobileBottomNav from "./MobileBottomNav";
import HeaderRightSectionWrapper from "./HeaderRightSectionWrapper";

const StylishHeader = styled.header`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: fixed;
  background-color: white;
  z-index: 999;
  height: 102px;
  top: 0;

  @media ${devices.desktopS} {
    height: 140px;
    gap: 14px;
    border-bottom: 40px #313538 solid;
    padding: 26px 54px 26px 60px;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const HeaderSpaceSection = styled.div`
  height: 102px;
  @media ${devices.desktopS} {
    height: 140px;
  }
`;

const Header = () => {
  return (
    <>
      <StylishHeader>
        <HeaderWrapper>
          <HeaderLeftSectionWrapper />
          <MobileBottomNav />
          <HeaderRightSectionWrapper />
        </HeaderWrapper>
      </StylishHeader>
      <HeaderSpaceSection />
    </>
  );
};

export default Header;
