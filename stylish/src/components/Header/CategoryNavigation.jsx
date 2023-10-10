import styled from "styled-components";
import { devices } from '../../assets/device';

const Top_CategoryNavigation = styled.nav`
  width: 100%;

  @media ${devices.desktopS}{
    margin-left: 57px;
  }
`;

const Category_nav__list = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #313538;
  height: 50px;
  padding: 12px 0 12px 0;

  @media ${devices.desktopS}{
    padding-bottom: 0px;
    background-color: transparent;
    width: 451px;
  }
`;

const Category_nav__list_item = styled.li`
  flex: 1;
  text-align: center;

  @media ${devices.desktopS}{
    font-size: 20px;
    letter-spacing: 30px;
    margin-right: -30px;
  }
`;

const Category_nav__list_item_link = styled.a`
  cursor: pointer;
  color: #828282;

  @media ${devices.desktopS}{
    color: #3f3a3a;
  }
`;

const Category_nav__list_devider = styled.li`
  text-align: center;
  color: grey;

  @media ${devices.desktopS}{
    font-size: 20px;
    letter-spacing: 30px;
    margin-right: -30px;
    color: #3f3a3a;
  }
`;

const CategoryNavigation = () => {
  return (
    <Top_CategoryNavigation>
      <Category_nav__list>
        <Category_nav__list_item>
          <Category_nav__list_item_link id="women">女裝</Category_nav__list_item_link>
        </Category_nav__list_item>
        <Category_nav__list_devider>|</Category_nav__list_devider>
        <Category_nav__list_item>
          <Category_nav__list_item_link id="men">男裝</Category_nav__list_item_link>
        </Category_nav__list_item>
        <Category_nav__list_devider>|</Category_nav__list_devider>
        <Category_nav__list_item>
          <Category_nav__list_item_link id="accessories">配件</Category_nav__list_item_link>
        </Category_nav__list_item>
      </Category_nav__list>
    </Top_CategoryNavigation>
  )
}

export default CategoryNavigation