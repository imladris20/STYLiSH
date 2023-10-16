import styled from "styled-components";
import { devices } from "../../assets/device";
import { useContext } from "react";
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

  @media ${devices.desktopS} {
    position: unset;
    gap: 42px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 214px;
  height: 40px;
  padding-left: 6px;
  padding-right: 6px;

  @media ${devices.desktopS} {
    height: 44px;
    padding-right: 10px;
    border: 1px #979797 solid;
    border-radius: 20px;
  }
`;

const SearchFormInput = styled.input`
  color: #8b572a;
  font-size: 20px;
  border: none;
  line-height: 24px;
  padding-left: 14px;
  width: 150px;
  height: 25px;
  visibility: hidden;

  @media ${devices.desktopS} {
    visibility: unset;
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

const HeaderRightSectionWrapper = () => {
  const { cartCount, actions } = useContext(UserContext);
  return (
    <Top>
      <SearchContainer>
        <SearchForm method="get">
          <SearchFormInput type="text" name="keyword" />
          <SearchFormSubmit type="submit" value="" />
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
