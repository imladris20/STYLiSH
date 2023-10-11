import styled from "styled-components";
import { devices } from "../../assets/device";

const TopMobile_bottom_nav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  height: 60px;

  @media ${devices.desktopS} {
    display: none;
  }
`;

const Mobile_bottom_nav__list = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #313538;
  padding: 8px 0 8px 0;
`;

const Mobile_bottom_nav__list_item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Icon_link = styled.a`
  position: relative;
  cursor: pointer;
`;

export const Cart_link__image = styled.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  background-image: url("/images/cart-mobile.png");
  transition: background-image 0.3s ease;
`;

export const Cart_link__counter = styled.div`
  border-radius: 100%;
  position: absolute;
  background-color: #8b572a;
  color: white;
  height: 24px;
  width: 24px;
  place-items: center;
  right: 0px;
  bottom: 0px;
`;

const Icon_link__text = styled.a`
  cursor: pointer;
  color: white;
`;

const Mobile_bottom_nav__devider = styled.li`
  color: grey;
`;

export const Profile_link__image = styled.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  background-image: url("/images/member-mobile.png");
  transition: background-image 0.3s ease;
`;

const Mobile_bottom_nav = () => {
  return (
    <TopMobile_bottom_nav>
      <Mobile_bottom_nav__list>
        <Mobile_bottom_nav__list_item>
          <Icon_link>
            <Cart_link__image />
            <Cart_link__counter>1</Cart_link__counter>
          </Icon_link>
          <Icon_link__text>購物車</Icon_link__text>
        </Mobile_bottom_nav__list_item>
        <Mobile_bottom_nav__devider>|</Mobile_bottom_nav__devider>
        <Mobile_bottom_nav__list_item>
          <Icon_link>
            <Profile_link__image />
          </Icon_link>
          <Icon_link__text>會員</Icon_link__text>
        </Mobile_bottom_nav__list_item>
      </Mobile_bottom_nav__list>
    </TopMobile_bottom_nav>
  );
};

export default Mobile_bottom_nav;
