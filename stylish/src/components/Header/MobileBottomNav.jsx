import styled from "styled-components";
import { devices } from "../../assets/device";

const Top = styled.nav`
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

const MobileBottomNavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #313538;
  padding: 8px 0 8px 0;
`;

const MobileBottomNavListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const IconLink = styled.a`
  position: relative;
  cursor: pointer;
`;

export const CartLinkImage = styled.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  background-image: url("/images/cart-mobile.png");
  transition: background-image 0.3s ease;
`;

export const CartLinkCounter = styled.div`
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

const IconLinkText = styled.a`
  cursor: pointer;
  color: white;
`;

const MobileBottomNavDevider = styled.li`
  color: grey;
`;

export const ProfileLinkImage = styled.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  background-image: url("/images/member-mobile.png");
  transition: background-image 0.3s ease;
`;

const MobileBottomNav = () => {
  return (
    <Top>
      <MobileBottomNavList>
        <MobileBottomNavListItem>
          <IconLink>
            <CartLinkImage />
            <CartLinkCounter>1</CartLinkCounter>
          </IconLink>
          <IconLinkText>購物車</IconLinkText>
        </MobileBottomNavListItem>
        <MobileBottomNavDevider>|</MobileBottomNavDevider>
        <MobileBottomNavListItem>
          <IconLink>
            <ProfileLinkImage />
          </IconLink>
          <IconLinkText>會員</IconLinkText>
        </MobileBottomNavListItem>
      </MobileBottomNavList>
    </Top>
  );
};

export default MobileBottomNav;
