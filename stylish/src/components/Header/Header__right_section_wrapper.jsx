import styled from "styled-components";
import { devices } from '../../assets/device';

const Top_Header__right_section_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 6px;
  right: 10px;

  @media ${devices.desktopS}{
    position: unset;
    gap: 42px;
  }
`;

const Search_containter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Search_form = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 214px;
  height: 40px;
  padding-left: 6px;
  padding-right: 6px;

  @media ${devices.desktopS}{
    height: 44px;
    padding-right: 10px;
    border: 1px #979797 solid;
    border-radius: 20px;
  }
`;

const Search_form__input = styled.input`
  color: #8B572A;
  font-size: 20px;
  border: none;
  line-height: 24px;
  padding-left: 14px;
  width: 150px;
  height: 25px;
  visibility: hidden;

  @media ${devices.desktopS}{
    visibility: unset;
  }
`;

const Search_form__submit = styled.input`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent url(/images/search.png) no-repeat center center;
  background-size: contain;
  border: none;
  align-self: center;

  @media ${devices.desktopS}{
    width: 44px;
    height: 44px;
  }
`

const Header__right_section_wrapper = () => {
  return (
    <Top_Header__right_section_wrapper id="header__right-section-wrapper">
      <Search_containter>
        <Search_form method="get" id="search-form" className="search-form">
          <Search_form__input type="text" id="search-form__input" name="keyword"/>
          <Search_form__submit id="search-form__submit" type="submit" className="search-form__submit" value=""/>
        </Search_form>
      </Search_containter>
    </Top_Header__right_section_wrapper>
  )
}

export default Header__right_section_wrapper;