import styled from "styled-components";
import { devices } from "../../assets/device";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import {
  IconLink,
  CartLinkImage,
  CartLinkCounter,
  ProfileLinkImage,
} from "./MobileBottomNav";

const Top = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 6px;
  right: 10px;
  width: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "100%" : "unset"};

  @media ${devices.desktopS} {
    position: unset;
    gap: 42px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "flex-start" : "flex-end"};
  align-items: center;
  flex: 1;
  background-color: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "white" : "unset"};
  width: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "inherit" : "unset"};
  margin-left: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "20px" : "unset"};
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "inherit" : "60px"};
  height: 40px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "20px" : "unset"};
  border: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "1px #979797 solid" : "unset"};
  gap: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "5px" : "unset"};

  @media ${devices.desktopS} {
    height: 44px;
    width: 214px;
    padding-right: 10px;
    border: 1px #979797 solid;
    border-radius: 20px;
  }
`;

const SearchFormInput = styled.input`
  color: #8b572a;
  font-size: 20px;
  border: none;
  flex-grow: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "1" : "unset"};
  visibility: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "unset" : "hidden"};
  line-height: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "24px" : "0px"};
  padding-left: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "14px" : "0px"};
  width: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "150px" : "0px"};
  height: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "25px" : "0px"};

  @media ${devices.desktopS} {
    visibility: unset;
    line-height: 24px;
    padding-left: 14px;
    width: 150px;
    height: 25px;
  }
`;

const SearchFormSubmit = styled.input`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent url(/search.png) no-repeat center center;
  background-size: contain;
  border: none;
  align-self: center;

  @media ${devices.desktopS} {
    width: 44px;
    height: 44px;
  }
`;

const WiderCartLink = styled(IconLink)`
  display: none;
  @media ${devices.desktopS} {
    display: initial;
  }
`;

const WiderCartLinkImage = styled(CartLinkImage)`
  @media ${devices.desktopS} {
    background-image: url("/cart.png");

    &:hover {
      background-image: url("/cart-hover.png");
    }
  }
`;

const WiderProfileLinkImage = styled(ProfileLinkImage)`
  @media ${devices.desktopS} {
    background-image: url("/member.png");
    &:hover {
      background-image: url("/member-hover.png");
    }
  }
`;

const Distracter = styled.div`
  display: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "block" : "none"};
  width: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "1278px" : "unset"};
  height: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "2000px" : "unset"};
  position: ${({ $isMobileSearchBarShow }) =>
    $isMobileSearchBarShow ? "fixed" : "unset"};
  top: 0;
  left: 0;
`;

const HeaderRightSectionWrapper = () => {
  const { cartCount, isWide } = useContext(UserContext);
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const isMobileSearchBarShow = shouldSubmit && !isWide;

  const handleSubmit = (event) => {
    if (!shouldSubmit && !isWide) {
      event.preventDefault();
      setShouldSubmit(true);
    }
  };

  const handleClickOnDistracter = () => {
    setShouldSubmit(!shouldSubmit);
  };

  return (
    <Top $isMobileSearchBarShow={isMobileSearchBarShow}>
      <SearchContainer $isMobileSearchBarShow={isMobileSearchBarShow}>
        <Distracter
          $isMobileSearchBarShow={isMobileSearchBarShow}
          onClick={handleClickOnDistracter}
        />
        <SearchForm
          action="../../index.html"
          method="get"
          onSubmit={handleSubmit}
          $isMobileSearchBarShow={isMobileSearchBarShow}
        >
          <SearchFormInput
            type="text"
            name="keyword"
            $isMobileSearchBarShow={isMobileSearchBarShow}
          />
          <SearchFormSubmit
            type="submit"
            value=""
            $isMobileSearchBarShow={isMobileSearchBarShow}
          />
        </SearchForm>
      </SearchContainer>
      <WiderCartLink>
        <WiderCartLinkImage />
        <CartLinkCounter>{cartCount}</CartLinkCounter>
      </WiderCartLink>
      <WiderCartLink>
        <WiderProfileLinkImage />
      </WiderCartLink>
    </Top>
  );
};

export default HeaderRightSectionWrapper;
