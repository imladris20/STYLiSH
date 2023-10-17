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
  width: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "100%" : "unset"};

  @media ${devices.desktopS} {
    position: unset;
    gap: 42px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "flex-start" : "flex-end"};
  align-items: center;
  flex: 1;
  background-color: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "white" : "unset"};
  width: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "inherit" : "unset"};
  margin-left: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "20px" : "unset"};
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "inherit" : "60px"};
  height: 40px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "20px" : "unset"};
  border: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "1px #979797 solid" : "unset"};
  gap: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "5px" : "unset"};

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
  flex-grow: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "1" : "unset"};
  visibility: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "unset" : "hidden"};
  line-height: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "24px" : "0px"};
  padding-left: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "14px" : "0px"};
  width: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "150px" : "0px"};
  height: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "25px" : "0px"};

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
  display: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "block" : "none"};
  width: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "1278px" : "unset"};
  height: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "2000px" : "unset"};
  position: ${({ $shouldSubmit, $isWide }) =>
    $shouldSubmit && !$isWide ? "fixed" : "unset"};
  top: 0;
  left: 0;
`;

const HeaderRightSectionWrapper = () => {
  const { cartCount, isWide } = useContext(UserContext);
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const handleSubmit = (event) => {
    if (!shouldSubmit && !isWide) {
      event.preventDefault();
      setShouldSubmit(true);
    }
  };

  const handleClickonDistracter = () => {
    setShouldSubmit(!shouldSubmit);
  };

  return (
    <Top $shouldSubmit={shouldSubmit} $isWide={isWide}>
      <SearchContainer $shouldSubmit={shouldSubmit} $isWide={isWide}>
        <Distracter
          $shouldSubmit={shouldSubmit}
          $isWide={isWide}
          onClick={handleClickonDistracter}
        />
        <SearchForm
          action="../../index.html"
          method="get"
          onSubmit={handleSubmit}
          $shouldSubmit={shouldSubmit}
          $isWide={isWide}
        >
          <SearchFormInput
            type="text"
            name="keyword"
            $shouldSubmit={shouldSubmit}
            $isWide={isWide}
          />
          <SearchFormSubmit
            type="submit"
            value=""
            $shouldSubmit={shouldSubmit}
            $isWide={isWide}
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
