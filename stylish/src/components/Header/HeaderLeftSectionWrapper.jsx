import styled from "styled-components";
import { devices } from "../../assets/device";
import CategoryNavigation from "./CategoryNavigation";

const Top = styled.div`
  width: 100%;

  @media ${devices.desktopS} {
    display: flex;
    flex-direction: row;
    width: unset;
  }
`;

const MainLogo = styled.a`
  cursor: pointer;
`;

const MainLogoImage = styled.img`
  width: 129px;
  height: 24px;
  margin-top: 14px;
  margin-bottom: 12px;

  @media ${devices.desktopS} {
    width: 258px;
    height: 48px;
    margin: 0;
  }
`;

const HeaderLeftSectionWrapper = () => {
  return (
    <Top>
      <MainLogo href="../homepage.html?category=all">
        <MainLogoImage src="/logo.png" alt="stylish" />
      </MainLogo>
      <CategoryNavigation />
    </Top>
  );
};

export default HeaderLeftSectionWrapper;
