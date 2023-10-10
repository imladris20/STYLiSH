import styled from "styled-components";
import { devices } from '../../assets/device'
import CategoryNavigation from './CategoryNavigation'

const Top_Header__left_section_wrapper = styled.div`
  width: 100%;

  @media ${devices.desktopS} {
    display: flex;
    flex-direction: row;
    width: unset;
  }
`;

const Main_logo = styled.a`
  cursor: pointer;
`;

const Main_logo__img = styled.img`
  width: 129px;
  height: 24px;
  margin-top: 14px;
  margin-bottom: 14px;

  @media ${devices.desktopS} {
    width: 258px;
    height: 48px;
    margin: 0;
  }
`;

const Header__left_section_wrapper = () => {
  return (
    <Top_Header__left_section_wrapper>
      <Main_logo>
        <Main_logo__img
          id="all"
          src="/images/logo.png"
          alt="stylish"
        />
      </Main_logo>
      <CategoryNavigation />
    </Top_Header__left_section_wrapper>
  );
};

export default Header__left_section_wrapper;