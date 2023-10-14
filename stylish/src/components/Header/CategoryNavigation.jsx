import styled from "styled-components";
import React from "react";
import { devices } from "../../assets/device";

const Top = styled.nav`
  width: 100%;

  @media ${devices.desktopS} {
    margin-left: 57px;
  }
`;

const CategoryNavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #313538;
  height: 50px;
  padding: 12px 0 12px 0;

  @media ${devices.desktopS} {
    padding-bottom: 0px;
    background-color: transparent;
    width: 451px;
  }
`;

const CategoryNavListItem = styled.li`
  flex: 1;
  text-align: center;

  @media ${devices.desktopS} {
    font-size: 20px;
    letter-spacing: 30px;
    margin-right: -30px;
  }
`;

const CategoryNavListItemLink = styled.a`
  cursor: pointer;
  color: #828282;

  @media ${devices.desktopS} {
    color: #3f3a3a;
  }
`;

const CategoryNavListDevider = styled.li`
  text-align: center;
  color: grey;

  @media ${devices.desktopS} {
    font-size: 20px;
    letter-spacing: 30px;
    margin-right: -30px;
    color: #3f3a3a;
  }
`;

const CategoryNavigation = () => {
  const category = ["women", "men", "accessories"];
  const zhCategory = ["女裝", "男裝", "配件"];

  const arr = category.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <CategoryNavListItem>
          <CategoryNavListItemLink
            id={`${item}`}
            href={`../index.html?category=${item}`}
          >
            {zhCategory[index]}
          </CategoryNavListItemLink>
        </CategoryNavListItem>
        {index !== 2 ? (
          <CategoryNavListDevider>|</CategoryNavListDevider>
        ) : null}
      </React.Fragment>
    );
  });

  return (
    <Top>
      <CategoryNavList>{arr}</CategoryNavList>
    </Top>
  );
};

export default CategoryNavigation;
