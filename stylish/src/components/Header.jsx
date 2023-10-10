// import { useContext } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import DataContext from '../context/DataContext';
import styled from "styled-components";
import { devices } from "../assets/device";
import Header__left_section_wrapper from "./Header/Header__left_section_wrapper";
import Mobile_bottom_nav from "./Header/Mobile_bottom_nav";
import Header__right_section_wrapper from "./Header/Header__right_section_wrapper.jsx";

const StylishHeader = styled.header`
  width: 100%;
`;

const Header__wrapper = styled.div`
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
`;

const Header = () => {
  return (
    <>
      <StylishHeader>
        <Header__wrapper>
          <Header__left_section_wrapper />
          <Mobile_bottom_nav />
          <Header__right_section_wrapper />
        </Header__wrapper>
      </StylishHeader>
      <HeaderSpaceSection />
    </>
  );
};

export default Header;
